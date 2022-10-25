/* eslint-disable @next/next/no-img-element */
import { BedWithImage } from "network-requests/types";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/home.module.scss";

interface ProductListingProps {
  productList: BedWithImage[];
}

const ProductListing = ({ productList }: ProductListingProps) => {
  const router = useRouter();

  return (
    <div>
      <section className={styles.productsimages}>
        <div className="container">
          {/* <div className={styles.mainh2}>
            <h2>Best-seller of the season</h2>
          </div> */}
          <div className="row">
            {productList?.map((item: BedWithImage, index: number) => {
              return (
                // @ts-ignore
                <ProductItem
                  name={item?.name}
                  price={item?.price}
                  image={item?.image}
                  key={index}
                  onClick={() =>
                    router.push({
                      pathname: `/products/${item._id}`,
                      query: {
                        size: item?.variants && item?.variants[0]?.size,
                      },
                    })
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductListing;

interface ProductItemProps extends BedWithImage {
  onClick: () => void;
  // price:
}
const ProductItem = ({ name, price, image, onClick }: ProductItemProps) => {
  const getPercentage = (
    base: number | undefined,
    sale: number | undefined
  ) => {
    const dif = Number(base) - Number(sale);
    if (base) return (dif / base) * 100;
  };

  const percentage = getPercentage(price?.basePrice, price?.salePrice)?.toFixed(
    0
  );

  return (
    <div className="col-3" onClick={onClick}>
      <div className={styles.box1}>
        <div className={styles.productimage}>
          <img
            alt="img"
            height="200"
            src={image || "/fake.png"}
            className={styles.productimh}
          />
          <ul>
            <li>
              <img src="bedscolor/1.jpg" alt="img" width="50" height="50" />
            </li>
            <li>
              <img src="bedscolor/2.jpg" alt="img" width="50" height="50" />
            </li>
          </ul>
        </div>
        <h2 className={styles.productname}>{name}</h2>

        <p className={styles.price}>
          {`£ ${price?.salePrice}`}
          <del>{`£${price?.salePrice}`}</del>
          <span>{percentage}% off</span>
        </p>
        {/* <p>{item.description}</p> */}
        <div className={styles.trustpilot}>
          <img src="/image/tru.png" alt="img" />
        </div>
      </div>
    </div>
  );
};
