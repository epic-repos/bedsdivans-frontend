import NextSEO from "layout/nextseo";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, Row, Col, Nav, Button } from "react-bootstrap";
import ScaleIcon from "icons/scale";
import Style from "styles/HomePage/home.module.scss";
import styles from "styles/NewProductPage.module.scss";

const BestSellingBeds=()=>{
    return(
      <div>
   
       <div className={styles.banner} >
       <Image src="/images/klarna-banner.png" width={1500} height={200} alt=""  className={styles.bannerimage}/>
       </div>
       <section className={styles.productsimages}>
        <div className= {styles.containers}>
          <div className={styles.mainh2}>
            <h2>Best Selling Beds</h2>
          </div>
          <div className ={styles.productcart}>
            
              <div className={styles.box1}>
                <img
                  src="/img/gk.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
           
          
              <div className={styles.box1}>
                <img
                  src="/img/k.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
           
           
              <div className={styles.box1}>
              <img
                  src="/img/gk.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
                </h2>
                <div className={Style.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
           
           
              <div className={styles.box1}>
              <img
                  src="/img/gk.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
                </h2>
                <div className={styles.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
              <div className={styles.box1}>
              <img
                  src="/img/gk.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
                </h2>
                <div className={Style.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={styles.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
          </div>
        </div>
      </section>
      </div>
    )
  }

  export default BestSellingBeds
//   export { BestSellingBeds}