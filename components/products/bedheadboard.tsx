import Image from "next/image";
import React from "react";
import styles from "styles/NewProductPage.module.scss";
import numArray from "utils/num";

const BedHeadBoard = () => {
  return (
    <React.Fragment>
      <div className={styles.color}>
        <ul className={styles.texture}>
          {numArray(5).map((_, i) => (
            <li key={i}>
              <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
              <span className={styles.name}>
                {" "}
                3ft single
                <span className={styles.price}> £400.00</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BedHeadBoard;
