import React from "react";
import styles from "styles/home.module.scss";
import Image from "next/image";

const QuickInfo = () => {
  return (
    <div className="award-section-destop">
      <div className={styles.banner_bottom_style}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={styles.banner_bottom_ineerbox}>
                <ul>
                  <li>
                    <Image
                      src="/assets/images/banner/Group594.svg"
                      width={60}
                      height={60}
                      alt="Quick Shipping"
                    />
                  </li>
                  <li>
                    <h6>Quick Shipping</h6>
                    <span>
                      <p> on orders over $100 </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.banner_bottom_ineerbox}>
                <ul>
                  <li>
                    <Image
                      src="/assets/images/banner/Group593.png"
                      width={60}
                      height={60}
                      alt="Made in UK"
                    />
                  </li>
                  <li>
                    <h6>Made in UK</h6>
                    <span>
                      <p> Divan Beds and Mattressess </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.banner_bottom_ineerbox}>
                <ul>
                  <li>
                    <Image
                      src="/assets/images/banner/Group592.svg"
                      width={60}
                      height={60}
                      alt="Best Quality"
                    />
                  </li>
                  <li>
                    <h6>Best Quality</h6>
                    <span>
                      <p> Bester than Best quality </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.banner_bottom_ineerbox}>
                <ul>
                  <li>
                    <Image
                      src="/assets/images/banner/Group591.svg"
                      width={60}
                      height={60}
                      alt="Interest Free Credit"
                    />
                  </li>
                  <li>
                    <h6>Interest Free Credit</h6>
                    <span>
                      <p> Interest Free Credit </p>
                    </span>
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
export default QuickInfo;