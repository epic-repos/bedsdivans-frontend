/* eslint-disable @next/next/no-img-element */
import React from "react";
import AddIcon from "icons/add";
import DeleteIcon from "icons/delete";
import RemoveIcon from "icons/remove";
import useAddCart from "store/hooks/useaddcart";
import style from "styles/product/cart.module.scss";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import TitleHeader from "components/title-header";
import Link from "next/link";

const iconColor = "#777";

const CartPage: NextPageWithLayout = () => {
  const {
    cartState: { cartItems, cartTotalAmount, cartTotalQuantity },

    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useAddCart();
  const router = useRouter();

  console.log({ cartItems, cartTotalAmount, cartTotalQuantity });

  let cartArray: any = [];

  cartItems.map((item) => {
    let data = {
      name: item?.bed?.name,
      images: [item?.bed?.image],
      amount: Math.round(item?.total * 100),
      currency: "usd",
      quantity: item?.quantity,
    };
    cartArray.push(data);
  });

  const goToCheckoutPage = async () => {
    router.push("/cart/checkout");
  };
  // console.log({ cartItems: cartItems });
  return (
    <>
      <TitleHeader
        background={`https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
        title="Shopping Cart"
      />
      <br />
      <div className={style.sectioncart}>
        <div className="container">
          <div className="row">
            <div className={`${style.mwfull} col-8`}>
              <div className={style.productlistboxouter}>
                <table className={style.productcarlist}>
                  {cartItems.length <= 0 ? (
                    <h3>No Item in Your Cart</h3>
                  ) : (
                    <React.Fragment>
                      <TableHead />
                      {cartItems.map((data, index) => {
                        return (
                          <ProductItem
                            intialQuantity={data.quantity}
                            key={index}
                            name={data.bed.name}
                            imageUrl={data.bed.image}
                            price={`£${data.bed.price}`}
                            totalPrice={`£${data.total}`}
                            onAddQuantity={() => increaseQuantity(data.bed.id)}
                            onRemoveQuantity={() =>
                              decreaseQuantity(data.bed.id)
                            }
                            onDeleteItem={() => removeFromCart(data.bed.id)}
                            accessories={data.accessories}
                            size={data.bed.size}
                          />
                        );
                      })}
                    </React.Fragment>
                  )}
                </table>
              </div>
              <div className={style.inputsection}>
                <div className={style.inputbox}>
                  <input type="text" placeholder="Coupon code" />
                  <button>Apply coupon</button>
                </div>
                <div className={style.inputbox1}>
                  <button>update basket</button>
                </div>
              </div>
              <div className={style.continueshopping}>
                <a onClick={() => router.back()}> Continue shopping</a>
              </div>
            </div>
            {/* PROMOCODE BOX */}
            <PromoCode
              onCheckout={goToCheckoutPage}
              totalItems={cartTotalQuantity}
              totalPrice={cartTotalAmount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

CartPage.getLayout = PerPageLayout;

const TableHead = () => {
  return (
    <thead>
      <tr>
        <td>Product</td>
        <td>Price</td>
        <td>Qty</td>
        {/* <td>Total</td> */}
        <td> </td>
      </tr>
    </thead>
  );
};

interface ProductItemProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  totalPrice?: string;
  onAddQuantity?: () => void;
  onRemoveQuantity?: () => void;
  onDeleteItem?: () => void;
  intialQuantity?: number;
  accessories: {
    color: {
      name: any;
      image: string;
    };
    storage: {
      name: any;
      price: number;
    };
    feet: {
      name: any;
      price: number;
    };
    headboard: {
      name: any;
      price: number;
    };
    mattress: {
      name: any;
      price: number;
    };
  };
  size?: string;
}

const ProductItem = ({
  imageUrl,
  name,
  onAddQuantity,
  onDeleteItem,
  onRemoveQuantity,
  price,
  totalPrice,
  intialQuantity,
  accessories,
  size,
}: ProductItemProps) => {
  return (
    <tbody>
      <tr>
        <td>
          <div className={style.products}>
            <div className={style.productsimage}>
              <img src={imageUrl} alt="img" />
            </div>
            <div className={style.productdetails}>
              <div className={style.productname}>{name}</div>
              <ul className={style.list}>
                <li>
                  <strong>Selected Size :</strong>
                  {size}
                </li>
                <li>
                  <strong>Selected Storage:</strong>
                  {accessories?.storage?.name?.label}
                </li>
                <li>
                  <strong>Selected Headboard :</strong>
                  {accessories?.headboard?.name?.label}
                </li>
                <li>
                  <strong>Select Feet : </strong>
                  {accessories?.feet?.name?.label}
                </li>
                <li>
                  <strong>Selected Mattress : </strong>
                  {accessories?.mattress?.name?.label}
                </li>
              </ul>
            </div>
          </div>
        </td>
        <td>
          <div className={style.price}>{totalPrice}</div>
        </td>
        <td>
          <div className={style.qty}>
            <input type="number" value={intialQuantity} />
            <div className={style.btn}>
              <i onClick={onAddQuantity} className={style.svgicon}>
                <AddIcon fill={iconColor} />
              </i>
              <i onClick={onRemoveQuantity} className={style.svgicon}>
                <RemoveIcon fill={iconColor} />
              </i>
            </div>
          </div>
        </td>
        {/* <td>
          <div className={style.total}>{totalPrice}</div>
        </td> */}
        <td>
          <i onClick={onDeleteItem} className={style.svgicon}>
            <DeleteIcon fill={iconColor} />
          </i>
        </td>
      </tr>
    </tbody>
  );
};

const PromoCode = ({ onCheckout, totalItems, totalPrice }: any) => {
  return (
    <div className={`${style.mwfull} col-4`}>
      <div className={style.cartsummary}>
        <ul>
          <li className={style.cartsummaryline}>
            <span className={style.jssubtotal}> Subtotal</span>
            <span className={style.value}>£{totalPrice} </span>
          </li>
          <li className={style.cartsummary1}>
            <span className={style.shippingdetail}>Shipping</span>
            <span className={style.shippingdetail1}>
              Free shipping<br></br>Shipping to{" "}
              <strong>
                test, test,<br></br>test, WV14 7HZ.
              </strong>
              <br></br>
              <Link href="#">
                <a>Change address</a>
              </Link>
            </span>
          </li>
          <li className={style.cartsummarytotals}>
            <div className={style.pritotal}>
              <span className={style.jssubtotal}>Total </span>
              <span className={style.value}>£{totalPrice} </span>
            </div>
          </li>
          <li className={style.cartdetailedactions}>
            <a onClick={onCheckout}>Proceed to checkouts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
