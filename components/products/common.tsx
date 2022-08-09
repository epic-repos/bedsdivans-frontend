import React from "react";
import Image from "next/image";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";

const CommonForBed = (props: BedSizeProps) => {
  const { value, items, onClickItem } = React.useMemo(() => props, [props]);
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
                  value === data.content ? "#20323e" : "transparent"
                }`,
              }}
            >
              <Image src={data.iconUrl} width={100} height={56} alt="" />
              <span className={styles.name}>
                {data.content}
                <span className={styles.price}>{data.price}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CommonForBed;
//
//  £400.00
