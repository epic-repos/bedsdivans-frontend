import PerPageLayout from "layout/perpage";
import axios from "network-requests/axios";
import { useCreateOrder } from "network-requests/mutations";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useAddCart from "store/hooks/useaddcart";
import css from "styles/cart.module.scss";
import { NextPageWithLayout } from "typings/layout";
import ContactForm from "./form";

const Checkout: NextPageWithLayout = () => {
  const router = useRouter();

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
        paymentMethod: "stripe",
      },
    };
  }, [formData, cartItems]);

  // console.log({ orderPayload, cartItems });

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

  const haveSomethingInCart = cartItems.length > 0;

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
              {haveSomethingInCart ? (
                <div className={css["summary"]}>
                  <p className={css["bag-item"]}>
                    My Bag have{" "}
                    <strong className={css.colorchange}>
                      {" "}
                      {cartItems?.length}
                    </strong>{" "}
                    item (s)
                  </p>
                  {cartItems.map((data, index) => {
                    // console.log(data);
                    return (
                      <BagItemsSummary
                        onRemove={() => removeFromCart(data.bed.id)}
                        {...data}
                        key={index}
                      />
                    );
                  })}
                  <TotalSummary onCheckout={createCheckOutSession} />
                </div>
              ) : (
                <div className={css.item2}>
                  <p>Your Cart is Empty</p>
                  <div className={css.shopping_page}>
                    <Link href={"/"}>Continue Shopping</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT END */}
      <Recommendation />
    </div>
  );
};
export default Checkout;

Checkout.getLayout = PerPageLayout;

interface TotalSummaryProps {
  onCheckout: () => void;
}

const TotalSummary = ({ onCheckout }: TotalSummaryProps) => {
  const {
    cartState: { cartTotalAmount },
  } = useAddCart();

  const [paymentType, setPaymentType] = React.useState("stripe");

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

  // Based on Type You Can Change
  const PaymentButton = React.useMemo(() => {
    switch (paymentType) {
      case "stripe":
        return (
          <button className={css.checkpro} onClick={onCheckout}>
            Pay via Stripe Checkout
          </button>
        );
      case "cash-on-delivery":
        return (
          <button className={css.checkpro} onClick={onCheckout}>
            Place Order
          </button>
        );
    }
  }, [onCheckout, paymentType]);

  return (
    <div className={css.checkform}>
      <div className={css.items}>
        <p>Price Summary </p>
        <div className={css.price}>
          <p>Total MRP (Incl.of taxes) </p>
          <p>£{cartTotalAmount?.toFixed(2)}</p>
        </div>
        <div className={css.price}>
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className={css.price}>
          <p>Total</p>
          <p>£{cartTotalAmount?.toFixed(2)}</p>
        </div>
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
                    maxHeight: paymentType === data.type ? "50px" : "0px",
                  }}
                >
                  <p>{data.description}</p>
                </div>
              }
            </React.Fragment>
          ))}
        </div>
        <div>{PaymentButton}</div>
      </div>
    </div>
  );
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
          <h4 className={css["product-name"]}>{bed?.name}</h4>
          <ul>
            <li>
              <span>Bed Size : {bed?.size} </span>
            </li>
            <li>
              <span>Bed Color : {accessories?.color?.name?.label} </span>
            </li>
            <li>
              <span>Storage : {accessories?.storage?.name?.label}</span>
            </li>
            <li>
              <span>Headboard : {accessories?.headboard?.name?.label}</span>
            </li>
            <li>
              <span>Feet : {accessories?.feet?.name?.label}</span>
            </li>
            <li>
              <span>Mattressess : {accessories?.mattress?.name?.label}</span>
            </li>
          </ul>
        </div>
        <h5> Price £{bed?.price}</h5>
        <div className={css.CartItems_buttons}>
          <button onClick={onRemove} className={css.removebutton}>
            Remove
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const Recommendation = () => {
  return (
    <div className={css["fluid-container"]}>
      <div className="container">
        <div className={css.first_boxcart}>
          <div className={css.item3}>
            <h5>Services recommended for you</h5>
            <div className={`${css.bg_white}  ${css.boxfirst_cart}`}>
              <h4>Mattress and bed frame recycling service</h4>
              <p>
                For peace of mind, add this to your order today – we’ll collect
                and recycle your old bed during the delivery of your new bed.
              </p>
              <ul className={css.boxfirst_cartul}>
                <li>
                  All recyclable materials are reused, and waste is turned into
                  green energy
                </li>
                <li>
                  Ensure you have dismantled any furniture items prior to
                  delivery
                </li>
                <li>
                  We’ll provide you with a green bag to wrap your item in before
                  delivery
                </li>
                <li>
                  All recyclable materials are reused, and waste is turned into
                  green energy
                </li>
              </ul>
            </div>

            <div className={`${css.bg_white}  ${css.boxfirst_cart}`}>
              <h4>Bed frame assembly</h4>
              <p>
                Fancy sitting back and relaxing while we assemble your new bed?
              </p>
              <ul className={css.boxfirst_cartul}>
                <li>Our team are fully trained in bed building</li>
                <li>
                  We offer a quick and tidy service – all packaging is taken
                  away
                </li>
              </ul>
            </div>
            <div className={`${css.bg_white}  ${css.boxfirst_cart}`}>
              <h4>Bedcover service plan</h4>
              <p>
                Be rest assured by adding insurance to your purchase. We’ll then
                provide:
              </p>
              <ul className={css.boxfirst_cartul}>
                <li>Structural defect cover for 8 years*</li>
                <li>Accidental cosmetic damage cover for 5 years</li>
                <li>
                  A FREE mattress protector with each mattress added to the
                  service plan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
