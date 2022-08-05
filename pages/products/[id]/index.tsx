/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "styles/product.module.scss";
import NextSEO from "layout/nextseo";
import { NextPage } from "next";

interface SelectProps extends React.ComponentPropsWithRef<"select"> {
  heading: string;
  items: {
    text: string;
    value: string;
  }[];
}
const ProductPage: NextPage = () => {
  return (
    <React.Fragment>
      <NextSEO title={"Product Page"} />
      <section className={styles.div1}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.main}>
                <div className={styles.smallimg}>
                  <ul>
                    <li>
                      <img src="/image/bed1(small).jpg" alt="img" />
                    </li>
                    <li>
                      <img src="/image/bed2(small).jpg" alt="img" />
                    </li>
                  </ul>
                </div>
                <div className={styles.bigimg}>
                  <img src="/image/bed(big).jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.bodycontent}>
                <h1>Sinatra Fabric Ottoman Bed 3ft Single Eire Linen - Grey</h1>
                <ul>
                  <li>
                    <img src="/image/star.png" alt="img" />
                  </li>
                  <li>4.8(15)</li>
                </ul>
                <p>
                  Sinatra Fabric Ottoman Bed with a stylishly designed,
                  upholstered headboard.
                </p>
                <p>
                  {`Aspire's Sinatra storage bed features ample storage space. The
                  Ottoman bed frame is available in various fabrics, colours and
                  standard bed sizes.`}
                </p>
                <h2>£600.00</h2>
                <ul className={styles.klarnaimage}>
                  <li>
                    <img src="/image/klarna.png" alt="img" />
                  </li>
                  <li>Make 3 payments of £200.00. No fees. Learn more</li>
                </ul>
                <Select
                  heading={"Bed Size"}
                  items={[
                    { text: "2FT 6 - Small Single - £89", value: "First" },
                    { text: "3FT - Single - £129", value: "First" },
                    { text: "4FT - Small Double - £179", value: "First" },
                    { text: "5FT - Double - £209", value: "First" },
                    { text: "6FT - Super King - £239", value: "First" },
                  ]}
                />
                <Select
                  heading={"Colour"}
                  items={[
                    { text: "Eire Linen - Grey", value: "Eire Linen - Grey" },
                    { text: "Eire Linen - Suede", value: "First" },
                  ]}
                />
                <Select
                  heading={"Storage Option"}
                  items={[
                    { text: "No Drawers", value: "First" },
                    { text: "2 Drawers", value: "First" },
                  ]}
                />
                <Select
                  heading={"Select Your Feet"}
                  items={[
                    { text: "Free Castro Wheels", value: "First" },
                    { text: "Chrome Gliders - £10", value: "First" },
                  ]}
                />
                <Select
                  heading={"Select Your HeadBoard"}
                  items={[
                    {
                      text: "No Headboard",
                      value: "First",
                    },
                    {
                      text: "26 Inch Diamond Button Cube Headboard- £45",
                      value: "Eire Linen - Grey",
                    },
                    {
                      text: "26 Inch Matching Button Cube Headboard- £45",
                      value: "First",
                    },
                    {
                      text: "48 Inch Floor Standing Diamond Cube Headboard- £125",
                      value: "First",
                    },
                    {
                      text: "48 Inch Floor Standing Matching Button Cube Headboard- £125",
                      value: "First",
                    },
                  ]}
                />
                <Select
                  heading={"Select Your Mattress"}
                  items={[
                    { text: "No Mattress", value: "First" },
                    {
                      text: "2FT 6 - Memory Foam Mattress - £10",
                      value: "First",
                    },
                  ]}
                />
                <div className={styles.quamtitydiv}>
                  <ul>
                    <li>Qty</li>
                    <li className={styles.number}>
                      <input type="number" placeholder="1" />
                    </li>
                    <li className={styles.control}>
                      <button>Add to Basket</button>
                    </li>
                  </ul>
                </div>
                <div className={styles.arrowdiv}>
                  <ul>
                    <li>
                      <img src="/image/arrow.svg" alt="img" />
                      <p>
                        <span>Hassle Free</span>
                        <span>Returns</span>
                      </p>
                    </li>
                    <li>
                      <img src="/image/lock.svg" alt="img" />
                      <p>
                        <span>100%</span>
                        <span>Secure</span>
                      </p>
                    </li>
                    <li>
                      <img src="/image/cross.svg" alt="img" />
                      <p>
                        <span>0%</span>
                        <span>Finance</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ProductPage;

const Select = ({ heading, items, ...rest }: SelectProps) => {
  return (
    <React.Fragment>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.bedsizeaccordion}>
        <select {...rest}>
          {items.map(({ text, value }, index) => (
            <option key={index} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};
