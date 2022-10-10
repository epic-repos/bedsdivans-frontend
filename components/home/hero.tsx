import React from "react";
import styles from "styles/home.module.scss";

const HeroImageContainer = () => {
  const scrollSmooth = () => {
    window.scrollBy({ behavior: "smooth", top: 500 });
  };
  return (
    <div className={styles.swiper_wrapper}>
      <div className={`${styles.slider_height} d-flex`}>
        <div className={`${styles.center} container"`}>
          <div className={styles.bannerheadingmiddle}>
            <h1 className="HeadingForM">
              <strong>Divan Beds</strong>
            </h1>
            <p>Save upto 60% with Divan Beds</p>
            <div className={styles.bannerButton}>
              <button onClick={scrollSmooth}>
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
