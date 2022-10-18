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

import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import axios from "network-requests/axios";

const iconColor = "#777";

const CartPage: NextPageWithLayout = () => {
    const {
        cartState: { cartItems, cartTotalAmount, cartTotalQuantity },
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
    } = useAddCart();
    const router = useRouter();
    const { status } = router.query;

    console.log({ cartItems });

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

    const createCheckOutSession = async () => {
        const { data } = await axios.post("/payment", {
            line_items: cartArray,
        });

        if (data) {
            router.push(data.session.url);
        }
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
                                                    intialQuantity={
                                                        data.quantity
                                                    }
                                                    key={index}
                                                    name="Side Opening Storage Ottoman Mocha Linen CLEARANCE DEAL"
                                                    imageUrl={data.bed.image}
                                                    price={`£${data.total}`}
                                                    totalPrice={`£${data.total}`}
                                                    onAddQuantity={() =>
                                                        increaseQuantity(
                                                            data.bed.id
                                                        )
                                                    }
                                                    onRemoveQuantity={() =>
                                                        decreaseQuantity(
                                                            data.bed.id
                                                        )
                                                    }
                                                    onDeleteItem={() =>
                                                        removeFromCart(
                                                            data.bed.id
                                                        )
                                                    }
                                                    accessories={
                                                        data.accessories
                                                    }
                                                    size={data.bed.size}
                                                />
                                            );
                                        })}
                                    </React.Fragment>
                                )}
                            </table>
                        </div>
                        {/* BUTTON */}
                        <div className={style.continueshopping}>
                            <a onClick={() => router.back()}>
                                {" "}
                                Continue shopping
                            </a>
                        </div>
                    </div>
                    {/* PROMOCODE BOX */}
                    <PromoCode
                        onCheckout={createCheckOutSession}
                        totalItems={cartTotalQuantity}
                        totalPrice={cartTotalAmount}
                    />
                </div>
            </div>
        </div>
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
                                <li>Selected Size : {size}</li>
                                <li>
                                    Selected Storage:{" "}
                                    {accessories?.storage?.name?.label}
                                </li>
                                <li>
                                    Selected Headboard :{" "}
                                    {accessories?.headboard?.name?.label}
                                </li>
                                <li>
                                    Select Feet :{" "}
                                    {accessories?.feet?.name?.label}
                                </li>
                                <li>
                                    Selected Mattress :{" "}
                                    {accessories?.mattress?.name?.label}
                                </li>
                            </ul>
                            {/* <div className={style.productsize}>Size: 3ft Single</div>
              <div className={style.deliverttime}>
                Estimated Delivery: 17/08/2022 - 24/08/2022
              </div> */}
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
                            <i
                                onClick={onAddQuantity}
                                className={style.svgicon}
                            >
                                <AddIcon fill={iconColor} />
                            </i>
                            <i
                                onClick={onRemoveQuantity}
                                className={style.svgicon}
                            >
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
        <div className="col-md-4">
            <div className={style.cartsummary}>
                <ul>
                    <li className={style.cartsummaryline}>
                        <span className={style.jssubtotal}>
                            {totalItems || 0} items
                        </span>
                        <span className={style.value}>£{totalPrice} </span>
                    </li>

                    <li className={style.cartsummarytotals}>
                        <div className={style.pritotal}>
                            <span className={style.jssubtotal}>Total </span>
                            <span className={style.value}>£{totalPrice} </span>
                        </div>

                        <div className={style.alertexpecteddeliverydate}>
                            Estimated Delivery :{" "}
                            <span>18/08/2022 - 25/08/2022</span>
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
                        <a onClick={onCheckout}>Proceed to checkouts</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
