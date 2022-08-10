import React from "react";
import Image from "next/image";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";

const BedSize = (props: BedSizeProps) => {
  const { value, items, onClickItem } = React.useMemo(() => props, [props]);

  console.log(value);
  return (
    <React.Fragment>
      <div className={styles.color}>
        <ul className={styles.texture}>
          {items.map((data, index) => (
            <li
              key={index}
              onClick={() => onClickItem(data)}
              style={{
                border: `2px solid ${
                  value === data.content ? "#607d8b" : "transparent"
                }`,
              }}
            >
              <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
              <span className={styles.name}>
                {data.content}ft single is selected
                <span className={styles.price}> £400.00</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BedSize;
