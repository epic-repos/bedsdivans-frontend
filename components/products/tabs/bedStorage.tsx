import React from "react";
import Image from "next/image";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";

const BedStorageTab = ({ items, onClickItem, value }: BedSizeProps) => {
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
              src={data?.name?.image || "/image.png"}
              width={100}
              height={56}
              alt=""
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
export default BedStorageTab;
