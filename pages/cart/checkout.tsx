import TitleHeader from "components/title-header";
import CoupanIcon from "icons/coupan";
import PerPageLayout from "layout/perpage";
import axios from "network-requests/axios";
import { useCreateOrder } from "network-requests/mutations";
import Link from "next/link";
import { useRouter } from "next/router";
import CalendarIcon from "icons/calendaricon";
import React, { useMemo } from "react";
import useAddCart from "store/hooks/useaddcart";
import css from "styles/cart.module.scss";
import { NextPageWithLayout } from "typings/layout";
import ContactForm from "./form";

const Checkout: NextPageWithLayout = () => {
    const router = useRouter();

    const [isValidForm, setValidForm] = React.useState(true);
    const [paymentMethod, setPaymentMethod] = React.useState<string>("stripe");

    const {
        cartState: { cartItems },
        removeFromCart,
    } = useAddCart();

    const { mutate } = useCreateOrder();

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
                _id: item?.bed?.id,
                bedId: item?.bed?.bedId,
                color: item?.accessories?.color?._id,
                headboard: item?.accessories?.headboard?._id,
                mattress: item?.accessories?.mattress?._id,
                feet: item?.accessories?.feet?._id,
                storage: item?.accessories?.storage?._id,
                quantity: item?.quantity,
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

            shippingAddress: {
                address: formData.houseNumber,
                townCity: formData.townCity,
                postalCode: formData.postcode,
                country: formData.country,
                companyName: formData.companyName,
            },

            orderNotes: formData.orderNotes,
            payment: {
                paymentMethod: paymentMethod,
            },
        };
    }, [formData, cartItems, paymentMethod]);

    // console.log({ orderPayload, cartItems });

    React.useEffect(() => {
        if (
            formData.country &&
            formData.houseNumber &&
            formData.townCity &&
            formData.postcode &&
            formData.phone
        ) {
            setValidForm(true);
        }
    }, [formData]);

    const createCheckOutSession = React.useCallback(() => {
        if (isValidForm) {
            mutate(orderPayload as any, {
                onSuccess: async () => {
                    if (paymentMethod === "stripe") {
                        const { data } = await axios.post(
                            "/payment",
                            {
                                line_items: cartArray,
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
                                },
                            }
                        );
                        if (data) {
                            router.push(data.session.url);
                        }
                    } else {
                        router.push("/order/success");
                    }
                },
                onError: (error) => {
                    console.log(error);
                },
            });
        } else {
            alert("First You need to complete the form");
        }
    }, [cartArray, orderPayload, isValidForm, mutate, router, paymentMethod]);

    const haveSomethingInCart = cartItems.length > 0;

    const [coupanInput, setCoupanInput] = React.useState(false);

    return (
        <React.Fragment>
            <TitleHeader title="Checkout" />
            <div className={css.item}>
                <div className="container">
                    <div className={css["coupan-container"]}>
                        <div className={css["coupan-text"]}>
                            <CalendarIcon />
                            Have a coupon?
                            <strong
                                onClick={() => setCoupanInput(!coupanInput)}
                            >
                                Click here to enter your code
                            </strong>
                        </div>
                        {coupanInput && (
                            <div className={css["coupan-input"]}>
                                <label>
                                    If you have a coupon code, please apply it
                                    below.
                                </label>
                                <div className={css["inputs"]}>
                                    <input
                                        placeholder="Coupon Code"
                                        type="text"
                                    />
                                    <button>Apply coupon</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={css.row}>
                        {/* FORM */}
                        <ContactForm onChange={(value) => setFormData(value)} />
                        <div className={css.button}>
                            {haveSomethingInCart ? (
                                <div className={css["summary"]}>
                                    <p className={css["bag-item"]}>
                                        YOUR ORDER
                                    </p>
                                    {cartItems.map((data, index) => {
                                        return (
                                            <BagItemsSummary
                                                {...data}
                                                key={index}
                                                onRemove={() =>
                                                    removeFromCart(data.bed.id)
                                                }
                                            />
                                        );
                                    })}

                                    <TotalSummary
                                        isDisable={!isValidForm}
                                        defaultPaymentType={paymentMethod}
                                        onStripeCheckout={createCheckOutSession}
                                        onCashOnDelivery={createCheckOutSession}
                                        getPaymentType={(value) =>
                                            setPaymentMethod(value) as any
                                        }
                                    />
                                </div>
                            ) : (
                                <div className={css.item2}>
                                    <p>Your Cart is Empty</p>
                                    <div className={css.shopping_page}>
                                        <Link href={"/"}>
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTACT END */}
        </React.Fragment>
    );
};
export default Checkout;

Checkout.getLayout = PerPageLayout;

interface TotalSummaryProps {
    isDisable?: boolean;
    onStripeCheckout: () => void;
    onCashOnDelivery: () => void;
    defaultPaymentType: string;
    getPaymentType?: (value: string) => string;
}

const TotalSummary = ({
    onStripeCheckout,
    onCashOnDelivery,
    defaultPaymentType,
    getPaymentType,
    isDisable,
}: TotalSummaryProps) => {
    const {
        cartState: { cartTotalAmount },
    } = useAddCart();

    const [paymentType, setPaymentType] = React.useState(defaultPaymentType);

    const paymentTypeArray = [
        {
            title: "Credit card/Debit card",
            type: "stripe",
            description: "Secure payment via Stripe Checkout.",
        },
        {
            title: "Cash on delivery",
            type: "cash-on-delivery",
            description: "Pay with cash upon delivery.",
        },
    ];

    React.useEffect(() => {
        if (getPaymentType) {
            getPaymentType(paymentType);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paymentType]);
    // Based on Type You Can Change

    return (
        <div className={css.checkform}>
            <div className={css.items}>
                <div className={css.payment}>
                    {paymentTypeArray.map((data, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={css["radio-box"]}
                                onClick={() => setPaymentType(data.type)}
                            >
                                <input
                                    type="radio"
                                    id={data.type}
                                    name={data.type}
                                    checked={paymentType === data.type}
                                />
                                <label htmlFor={data.type}>{data.title}</label>
                            </div>
                            {
                                <div
                                    className={css["description"]}
                                    style={{
                                        maxHeight:
                                            paymentType === data.type
                                                ? "50px"
                                                : "0px",
                                    }}
                                >
                                    <p>{data.description}</p>
                                </div>
                            }
                        </React.Fragment>
                    ))}
                </div>
                <div>
                    <PaymentButton
                        title={isDisable ? "Full Fill the Form" : ""}
                        disable={isDisable}
                        onStripeCheckout={onStripeCheckout}
                        onCashOnDelivery={onCashOnDelivery}
                        paymentType={paymentType}
                    />
                </div>
            </div>
        </div>
    );
};

interface PaymentButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    disable?: boolean;
    paymentType: string;
    onStripeCheckout: () => void;
    onCashOnDelivery: () => void;
}

const PaymentButton = ({
    paymentType,
    onStripeCheckout,
    onCashOnDelivery,
    disable,
    ...rest
}: PaymentButtonProps) => {
    const router = useRouter();
    switch (paymentType) {
        case "stripe":
            return (
                <>
                    <div className={css.paymentparagraph}>
                        <p>
                            Your personal data will be used to process your
                            order,<br></br>support your experience throughout
                            this website, and for<br></br>other purposes
                            described in our{" "}
                            <Link href="#">
                                <a>privacy policy.</a>
                            </Link>
                        </p>
                    </div>
                    <button
                        disabled={disable}
                        className={`${css.checkpro} ${
                            disable ? css.disable : ""
                        }`}
                        onClick={onStripeCheckout}
                        {...rest}
                    >
                        Pay via Checkout
                    </button>
                </>
            );
        case "cash-on-delivery":
            return (
                <button
                    disabled={disable}
                    className={`${css.checkpro} ${disable ? css.disable : ""}`}
                    onClick={onCashOnDelivery}
                    {...rest}
                >
                    Place Order
                </button>
            );

        default:
            return null;
    }
};

interface ItemsSummaryProps {
    bed: any;
    accessories: any;
    onRemove: () => void;
}

const BagItemsSummary = ({ accessories, bed, onRemove }: ItemsSummaryProps) => {
    return (
        <React.Fragment>
            <div className={css["summary-container"]}>
                <div className={css["summary-items"]}>
                    <ul>
                        <li>Product</li>
                        <li>Subtotal</li>
                    </ul>
                    <h4 className={css["product-name"]}>{bed?.name}</h4>
                    <ul>
                        <li>
                            <span>Bed Size </span>
                            <span>:</span>
                            <span>{bed?.size}</span>
                        </li>
                        <li>
                            <span>Bed Color </span>
                            <span>:</span>

                            <span>{accessories?.color?.name?.label}</span>
                        </li>
                        <li>
                            <span>Storage </span>
                            <span>:</span>
                            <span>{accessories?.storage?.name?.label}</span>
                        </li>
                        <li>
                            <span>Headboard </span>
                            <span>:</span>
                            <span>{accessories?.headboard?.name?.label}</span>
                        </li>
                        <li>
                            <span>Feet </span>
                            <span>:</span>
                            <span>{accessories?.feet?.name?.label}</span>
                        </li>
                        <li>
                            <span>Mattressess </span>
                            <span>:</span>
                            <span>{accessories?.mattress?.name?.label}</span>
                        </li>
                    </ul>
                </div>
                <div className={css["price-summary"]}>
                    <h5>
                        <span className={css["price-sum"]}> Subtotal </span>
                        <span className={css["price-sums"]}>£{bed?.price}</span>
                    </h5>
                </div>
                <div className={css["price-summary1"]}>
                    <h5>
                        <span className={css["price-sum"]}>Shipping</span>
                        <span className={css["price-sums1"]}>Free<br></br>shipping</span>
                    </h5>
                </div>
                <div className={css["price-summary1"]}>
                    <h5>
                        <span className={css["price-sum"]}>Total</span>
                        <span className={css["price-sums"]}> £619.00</span>
                    </h5>
                </div>
                <div className={css.CartItems_buttons}>
                    {/* <button onClick={onRemove} className={css.removebutton}>
            Remove
          </button> */}
                </div>
            </div>
        </React.Fragment>
    );
};

const Recommendation = () => {};
