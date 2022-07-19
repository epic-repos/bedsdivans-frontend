import React from "react";
// import Style from "styles/cart.module.scss";
import Style from "../../styles/cart.module.scss";

const NewProductPage = () => {
  return (
    <div>
      <div className={Style.text_center}>
        <div className={Style.cart_heading}>
          <h1>Your basket and service options</h1>
        </div>
      </div>
      <div
        className={Style.container_fluid}
        style={{ background: "rgb(243, 243, 248)" }}
      >
        <div className="container ">
          <div className="row">
            <div className={Style.first_boxcart}>
              <h5>Services recommended for you</h5>
              <div className={`${Style.bg_white}  ${Style.boxfirst_cart}`}>
                <h4>Mattress and bed frame recycling service</h4>               
                <p>
                  For peace of mind, add this to your order today – we’ll
                  collect and recycle your old bed during the delivery of your
                  new bed.
                </p>
                <ul className={Style.boxfirst_cartul}>
                  <li>
                    All recyclable materials are reused, and waste is turned
                    into green energy
                  </li>
                  <li>
                    Ensure you have dismantled any furniture items prior to
                    delivery
                  </li>
                  <li>
                    {" "}
                    We’ll provide you with a green bag to wrap your item in
                    before delivery
                  </li>
                  <li>
                    All recyclable materials are reused, and waste is turned
                    into green energy
                  </li>
                </ul>
              </div>

              <div className={`${Style.bg_white}  ${Style.boxfirst_cart}`}>
                <h4>Bed frame assembly</h4>
                <p>
                  Fancy sitting back and relaxing while we assemble your new
                  bed?
                </p>
                <ul className={Style.boxfirst_cartul}>
                  <li>Our team are fully trained in bed building</li>
                  <li>
                    We offer a quick and tidy service – all packaging is taken
                    away
                  </li>
                </ul>
              </div>
              <div className={`${Style.bg_white}  ${Style.boxfirst_cart}`}>
                <h4>Bedcover service plan</h4>
                <p>
                  Be rest assured by adding insurance to your purchase. We’ll
                  then provide:
                </p>
                <ul className={Style.boxfirst_cartul}>
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
    </div>
  );
};
export default NewProductPage;
