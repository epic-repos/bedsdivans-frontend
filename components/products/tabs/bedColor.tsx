import Image from "next/image";
import React from "react";
import { BedSizeProps } from "typings/product";
import styles from "styles/new-product.module.scss";

const BedColorTab = ({ items, onClickItem, value }: BedSizeProps) => {
  return (
    <div className={styles.color}>
      <ul className={styles.texture}>
        {items?.map((data: any, index: number) => (
          <li
            key={index}
            onClick={() =>
              onClickItem({
                name: data.name,
                image: data.image,
              })
            }
            style={{
              border: `2px solid ${
                value === data?.name?.value ? "#20323e" : "transparent"
              }`,
            }}
          >
            <Image
              width={100}
              height={56}
              alt="icons-images"
              src={data?.name?.image || "/image.png"}
              style={{
                borderRadius: "4px",
              }}
            />
            <span className={styles.name}>
              {data?.name?.label}{" "}
              <span className={styles.price}>{data.price}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BedColorTab;
