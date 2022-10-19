import PerPageLayout from "layout/perpage";
import axios from "network-requests/axios";
import { useCreateOrder } from "network-requests/mutations";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useAddCart from "store/hooks/useaddcart";
import css from "styles/cart.module.scss";
import { NextPageWithLayout } from "typings/layout";
import ContactForm from "./form";

const Checkout: NextPageWithLayout = () => {
    const router = useRouter();

    const {
        cartState: { cartItems, cartTotalAmount, cartTotalQuantity },
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
    } = useAddCart();

    const { mutate } = useCreateOrder();

    console.log({ cartItems });

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        country: "",
        companyName: "",
        houseNumber: "",
        townCity: "",
        postcode: "",
        phone: "",
        email: "",
        orderNotes: "",
    });

    const cartArray = useMemo(() => {
        return cartItems.map((item) => {
            return {
                name: item?.bed?.name,
                images: [item?.bed?.image],
                amount: Math.round(item?.total * 100),
                currency: "usd",
                quantity: item?.quantity,
            };
        });
    }, [cartItems]);

    const orderPayload = useMemo(() => {
        const orderItems = cartItems.map((item) => {
            return {
                name: item?.bed?.name,
                size: item?.bed?.size,
                quantity: item?.quantity,
                accessories: item?.accessories,
                image: item?.bed?.image,
                price: item?.bed?.price,
            };
        });

        return {
            user: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
            },

            orderItems: orderItems,

            totalPrice: cartTotalAmount,

            shippingAddress: {
                address: formData.houseNumber,
                townCity: formData.townCity,
                postalCode: formData.postcode,
                country: formData.country,
                companyName: formData.companyName,
            },

            orderNotes: formData.orderNotes,
            payment: {
                paymentMethod: "stripe",
            },
        };
    }, [formData, cartItems, cartTotalAmount]);

    const createCheckOutSession = async () => {
        mutate(orderPayload as any, {
            onSuccess: async () => {
                const { data } = await axios.post("/payment", {
                    line_items: cartArray,
                });

                if (data) {
                    router.push(data.session.url);
                }
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <div>
            <div className={css.text_center}>
                <div className={css.cart_heading}>
                    <h1>Your basket and service options</h1>
                </div>
            </div>
            <div className={css.item}>
                <div className="container">
                    <div className={css.row}>
                        {/* FORM */}
                        <ContactForm onChange={(value) => setFormData(value)} />
                        <div className={css.button}>
                            <div className={css.item2}>
                                <p>Your Cart is Empty</p>
                                <div className={css.shopping_page}>
                                    <a>Continue Shopping</a>
                                </div>
                            </div>
                            <div>
                                <p className={css.bagitem}>
                                    My Bag{" "}
                                    <strong className={css.colorchange}>
                                        1
                                    </strong>{" "}
                                    item (s)
                                </p>
                                <div className={css.check}>
                                    <div className={css.check1}>
                                        <h4>$219.99 </h4>
                                        <ul className="checkout-ul">
                                            <li>
                                                {" "}
                                                <span>Bed Size = </span>
                                            </li>
                                            <li>
                                                {" "}
                                                <span>Bed Color = </span>
                                            </li>
                                            <li>
                                                <span>Storage = </span>
                                            </li>
                                            <li>
                                                <span>Storage-Price = </span>
                                            </li>
                                            <li>
                                                <span>Headboard = </span>
                                            </li>
                                            <li>
                                                <span>Headboard-Price = </span>
                                            </li>
                                            <li>
                                                <span>Feet = </span>
                                            </li>
                                            <li>
                                                <span>Feet-Price = </span>
                                            </li>
                                            <li>
                                                <span>Mattressess = </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Mattressess-Price ={" "}
                                                </span>
                                            </li>
                                        </ul>
                                        <svg
                                            className={`${css.MuiSvgIcon_root} ${css.MuiSvgIcon_fontSizeSmall}`}
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M19 13H5v-2h14v2z"></path>
                                        </svg>
                                        <select className={css.dropdown}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <svg
                                            className={`${css.MuiSvgIcon_root} ${css.MuiSvgIcon_fontSizeSmall}`}
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                        </svg>
                                    </div>
                                    <div className={css.CartItems_buttons}>
                                        <div className={css.CartItems_buttons1}>
                                            <button
                                                type="submit"
                                                className={css.removebutton}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <button type="submit">Buy Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className={css.checkform}>
                                <div>
                                    <div>
                                        <p>Price Summary </p>
                                        <div className={css.price}>
                                            <p>Total MRP (Incl.of taxes) </p>
                                            <p>£55.00</p>
                                        </div>
                                        <div className={css.price}>
                                            <p>Delivery Fee </p>
                                            <p>FREE</p>
                                        </div>
                                        <div className={css.price}>
                                            <p>Bag Discount </p>
                                            <p>£ 1024</p>
                                        </div>

                                        <div className={css.price}>
                                            <p>Subtotal </p>
                                            <p>£55.00</p>
                                        </div>

                                        <div className={css.checkord}>
                                            You are saving £ 3090 on this order
                                        </div>
                                        <div className={css.Cart_finalCheckout}>
                                            <div className={css.Cart_price}>
                                                <p>Total</p>
                                                <p>£55.00</p>
                                            </div>
                                            <div>
                                                <button
                                                    className={css.checkpro}
                                                    type="submit"
                                                    onClick={
                                                        createCheckOutSession
                                                    }
                                                >
                                                    Proceed To Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTACT END */}
            <div
                className={css.container_fluid}
                style={{ background: "rgb(243, 243, 248)" }}
            >
                <div className="container ">
                    <div className="row">
                        <div className={css.first_boxcart}>
                            <div className={css.item3}>
                                <h5>Services recommended for you</h5>
                                <div
                                    className={`${css.bg_white}  ${css.boxfirst_cart}`}
                                >
                                    <h4>
                                        Mattress and bed frame recycling service
                                    </h4>
                                    <p>
                                        For peace of mind, add this to your
                                        order today – we’ll collect and recycle
                                        your old bed during the delivery of your
                                        new bed.
                                    </p>
                                    <ul className={css.boxfirst_cartul}>
                                        <li>
                                            All recyclable materials are reused,
                                            and waste is turned into green
                                            energy
                                        </li>
                                        <li>
                                            Ensure you have dismantled any
                                            furniture items prior to delivery
                                        </li>
                                        <li>
                                            {" "}
                                            We’ll provide you with a green bag
                                            to wrap your item in before delivery
                                        </li>
                                        <li>
                                            All recyclable materials are reused,
                                            and waste is turned into green
                                            energy
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className={`${css.bg_white}  ${css.boxfirst_cart}`}
                                >
                                    <h4>Bed frame assembly</h4>
                                    <p>
                                        Fancy sitting back and relaxing while we
                                        assemble your new bed?
                                    </p>
                                    <ul className={css.boxfirst_cartul}>
                                        <li>
                                            Our team are fully trained in bed
                                            building
                                        </li>
                                        <li>
                                            We offer a quick and tidy service –
                                            all packaging is taken away
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={`${css.bg_white}  ${css.boxfirst_cart}`}
                                >
                                    <h4>Bedcover service plan</h4>
                                    <p>
                                        Be rest assured by adding insurance to
                                        your purchase. We’ll then provide:
                                    </p>
                                    <ul className={css.boxfirst_cartul}>
                                        <li>
                                            Structural defect cover for 8 years*
                                        </li>
                                        <li>
                                            Accidental cosmetic damage cover for
                                            5 years
                                        </li>
                                        <li>
                                            A FREE mattress protector with each
                                            mattress added to the service plan
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={css.item4}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;

Checkout.getLayout = PerPageLayout;
