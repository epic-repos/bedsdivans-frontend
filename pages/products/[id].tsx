/* eslint-disable @next/next/no-img-element */
import PerPageLayout from "layout/perpage";
import React from "react";
import css from "styles/product/page.module.scss";
import Image from "next/image";
const NewProductPage = () => {
  return (
    <div>
      <div className="container">
        <div className={`${css["grid"]}`}>
          <div className={`${css["left"]}`}>
            <div className={css.product_image}>
              <Image
                src="/grey-linen.jpeg"
                alt="Grey-linen"
                height={424}
                width={600}
              ></Image>
            </div>
            <div className={css.year_warranty}>
              <ul>
                <li>
                  <Image
                    src="/one-year-warranty-1.jpg"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/free-delivery2.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/made-in-britain3.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/trust-pilot4.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
              </ul>
              <p>1 Year Warranty * Made in Britain</p>
              <ul>
                <li>
                  <Image
                    src="/headboard1.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/2-drawers-1-either-side2.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/2-drawers-same-side3.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/4-drawers4.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
              </ul>
              <p>Headboard can be fixed on both ends of the beds</p>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["product-name"]}>
              <h1>
                Grey Linen Divan Bed Base or Set Headboard & Mattress Free Uk
                Delivery
              </h1>
            </div>
            <div className={css["trustpilot"]}>
              <a href="">
                <img
                  src="/Trustpilot-4.5-Stars-300x63.png"
                  alt="trustpilot"
                  height={26}
                  width={125}
                  style={{ marginLeft: "10px" }}
                />
                <span>(1175)</span>
                <img
                  src="/Trustpilotlogo-300x822nd.webp"
                  alt="trustpilot-logo"
                  height={34}
                  width={125}
                  style={{ marginLeft: "15px" }}
                />
              </a>
            </div>
            <div className={css["coupon"]}>
              <span>
                Get 10% off on all products minimum spend of £250 "Coupon
                Code:EXTRA10"
              </span>
            </div>
            <div className={css["price"]}>
              <p>
                <span>£</span>
                <span>89.00</span>
              </p>
            </div>
            <div className={css["product-options"]}>
              <div className={css["colors"]}>
                <label>
                  <span style={{ color: "red" }}>*</span>
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    Choose Colour
                  </span>
                </label>
                <div className={css["color-options"]}>
                  <ul>
                    <a>
                      <li>
                        <img
                          src="/images/grey-linen.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/silver-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/white-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/blue-plush.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/grey-suede.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/black-venice.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      {" "}
                      <li>
                        <img
                          src="/images/cream-chenille.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      {" "}
                      <li>
                        <img
                          src="/images/black-leather.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/black-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/champagne-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/pink-crushed.png"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
              <SelectOption label="Select Your Size" />
              <SelectOption label="Storage Options" />
              <SelectOption label="Select Your Feet" />
              <SelectOption label="Select Your Headboard" />
              <SelectOption label="Select Your Mattress" />
            </div>
            <div>
              <AddToBasket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductPage;

NewProductPage.getLayout = PerPageLayout;

// METHOD 1
interface SelectOptionProps {
  label: string;
}

// METHOD 2
// type SelectOptionProps = {
//   label: string;
// };

const SelectOption = (props: SelectOptionProps) => {
  return (
    <div className={css["select-size"]}>
      <label>{props.label}</label>
      <div className={css["dropdown"]}>
        <select>
          <option value="2 feet">2FT 6″ – Small Single – £89</option>
          <option value="3 feet">3FT – Single – £129</option>
          <option value="4 feet">4FT – Small Double – £179</option>
          <option value="4 feet 6 inch">4FT 6″ – Double – £179</option>
          <option value="5 feet">5FT – King – £209</option>
          <option value="6 feet">6FT – Super King – £239</option>
        </select>
      </div>
    </div>
  );
};
const AddToBasket = () => {
  return (
    <div>
      <div className={css["basket-row"]}>
        <div className={css["basket-count"]}>
          <button>-</button>
          <div className={css["input"]}>
            <input type={"number"} />
          </div>
          <button>+</button>
          <button className={css["addToBasket"]}>ADD TO BASKET</button>
        </div>

        <button className={css["size-guide"]}>SIZE GUIDE</button>
      </div>
    </div>
  );
};
