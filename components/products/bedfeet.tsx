import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "styles/NewProductPage.module.scss";

const BedFeet = () => {
  return (
    <React.Fragment>
      <div className={styles.summary}>
        <h3>How its looking?</h3>
        <ul className={styles.chooseitemdetail}>
          <li>Bed Size : 3ft Single £400.00</li>
          <li>Fabric : Saxon Twill - Grey +£50.00</li>
          <li>Headboard : Garland</li>
        </ul>
        <div className={styles.priceitemsummary}>
          <div>
            <h5>Total Price</h5>
            <span>£450.00</span>
          </div>
          <div className={styles.numberaddcard}>
            <div>
              <input type="number" className={styles.numbertextarea}></input>
            </div>
            <div>
              <Button className={styles.addcart}> Add the cart</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BedFeet;
