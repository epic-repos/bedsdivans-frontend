import React from "react";
import styles from "styles/home.module.scss";

const HeroImageContainer = () => {
  return (
    <div className={styles.swiper_wrapper}>
      <div className={`${styles.slider_height} d-flex`}>
        <div className="container  text-center">
          <div className={styles.bannerheadingmiddle}>
            <h1 className="HeadingForM">
              <strong>Divan Beds</strong>
            </h1>
            <p
              className="NextH"
              style={{
                fontSize: "28px",
                color: "#ffffff",
                lineHeight: "1.1",
                opacity: "0.8",
              }}
            >
              Save upto 60% with Divan Beds
            </p>
            <div className={styles.bannerButton}>
              <button>
                <b>SHOP NOW</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImageContainer;
