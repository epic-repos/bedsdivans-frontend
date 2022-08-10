import Image from "next/image";
import React from "react";
import styles from "styles/NewProductPage.module.scss";

const BedStorage = () => {
  return (
    <React.Fragment>
      <div>
        <ul className={styles.texture}>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>Front lift</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

// export  {BedStorage};
export default BedStorage;
