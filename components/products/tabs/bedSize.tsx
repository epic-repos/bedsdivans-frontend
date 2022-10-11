import Image from "next/image";
import React from "react";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";

const BedSizeTab = ({ items, onClickItem, value }: BedSizeProps) => {
  return (
    <div className={styles.color}>
      <ul className={styles.texture}>
        {items?.map((data: any, index: number) => (
          <li
            key={index}
            onClick={() => onClickItem(data)}
            style={{
              border: `2px solid ${
                value === data?.value ? "#20323e" : "transparent"
              }`,
            }}
          >
            <Image
              src={data?.image || "/image.png"}
              width={100}
              height={56}
              alt=""
            />
            <span className={styles.name}>
              {data.label} <span className={styles.price}>{data.price}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BedSizeTab;
