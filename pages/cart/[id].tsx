/* eslint-disable @next/next/no-img-element */
import React from "react";
import AddIcon from "icons/add";
import DeleteIcon from "icons/delete";
import CoupanIcon from "icons/coupan";
import RemoveIcon from "icons/remove";
import useAddCart from "store/hooks/useaddcart";
import style from "styles/product/cart.module.scss";
import router, { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";

const publishableKey = `pk_live_51KUB2yLggtF42pbGuboggv7Gkpsk4f4pkcG72iqva8Eo74OxcMmmWzcnsluD3z7eAbqRTcQGyNgJwYjwoaOkVDbE00f3Pfgrim
`;

const iconColor = "#777";

const CartPage:NextPageWithLayout = () => {
  const {
    cartState: { cartItems },
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useAddCart();
  const router = useRouter();
  const { status } = router.query;

  const [loading, setLoading] = React.useState(false);

  const [item, setItem] = React.useState({
    name: "Apple AirPods",
    description: "Latest Apple AirPods.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    quantity: 0,
    price: 999,
  });

  // const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout", {
      item: item,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <div className={style.sectioncart}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className={style.cartheading}>Shopping Cart</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
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
                          name="Side Opening Storage Ottoman Mocha Linen CLEARANCE DEAL"
                          imageUrl={data.options.image}
                          price={`£${data.price}`}
                          totalPrice={`£${data.totalPrice}`}
                          onAddQuantity={() => increaseQuantity(data.id)}
                          onRemoveQuantity={() => decreaseQuantity(data.id)}
                          onDeleteItem={() => removeFromCart(data.id)}
                          options={data.options}
                        />
                      );
                    })}
                  </React.Fragment>
                )}
              </table>
            </div>
            {/* BUTTON */}
            <div className={style.continueshopping}>
              <a onClick={() => router.back()}> Continue shopping</a>
            </div>
          </div>
          {/* PROMOCODE BOX */}
          <PromoCode onCheckout={createCheckOutSession} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;



CartPage.getLayout=PerPageLayout
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
  options: {
    image: string;
    size: string;
    color: string;
    headBoard: string;
    storage: string;
    feet: string;
    matters: string;
  };
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
  options,
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
                <li>Selected Size : {options.size}</li>
                <li>Selected Storage: {options.storage}</li>
                <li>Selected Headboard : {options.headBoard}</li>
                <li>Select Feet : {options.feet}</li>
              </ul>
              {/* <div className={style.productsize}>Size: 3ft Single</div>
              <div className={style.deliverttime}>
                Estimated Delivery: 17/08/2022 - 24/08/2022
              </div> */}
            </div>
          </div>
        </td>
        <td>
          <div className={style.price}>{price}</div>
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

const PromoCode = ({ onCheckout }: any) => {
  return (
    <div className="col-md-4">
      <div className={style.cartsummary}>
        <ul>
          <li className={style.cartsummaryline}>
            <span className={style.jssubtotal}>8 items</span>
            <span className={style.value}>£1,200.00 </span>
          </li>

          <li className={style.cartsummarytotals}>
            <div className={style.pritotal}>
              <span className={style.jssubtotal}>Total </span>
              <span className={style.value}>£1,200.00 </span>
            </div>

            <div className={style.alertexpecteddeliverydate}>
              Estimated Delivery : <span>18/08/2022 - 25/08/2022</span>
            </div>
          </li>

          <li className={style.blockpromo}>
            <div className={style.cartvoucherarea}>
              <div className={style.img}>
                <CoupanIcon />
              </div>
            </div>
            <div className={style.inputbox}>
              <input type="text" placeholder="Promo code" />
              <button>Add</button>
            </div>
          </li>

          <li className={style.cartdetailedactions}>
            <a onClick={onCheckout}>Proceed to checkout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
