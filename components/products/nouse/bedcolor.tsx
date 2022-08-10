import Image from "next/image";
import React from "react";
import styles from "styles/NewProductPage.module.scss";
import { BedColorProps } from "typings/product";

const BedColor = ({ items, onClickItem, value }: BedColorProps) => {
  return (
    <React.Fragment>
      <div className={styles.color}>
        <div className={styles.heading}>
          <span>plush velvet</span>
        </div>
        <div className={styles.colorimage}>
          <ul className={styles.texture2}>
            {items.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickItem(data)}
                  style={{
                    border: `2px solid ${
                      value === data.content ? "#607d8b" : "transparent"
                    }`,
                  }}
                >
                  <Image
                    src={data.imageUrl}
                    width={60}
                    height={60}
                    alt={data.content}
                    className={styles.imagestyle2}
                  />
                  <span className={styles.name}>{data.content}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BedColor;
