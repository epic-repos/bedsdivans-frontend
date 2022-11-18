/* eslint-disable @next/next/no-img-element */
import { BedWithImage } from "network-requests/types";
import styles from "styles/home.module.scss";

interface ProductItemProps
  extends React.ComponentPropsWithoutRef<"div">,
    BedWithImage {
  onClick: () => void;
}
const ProductItem = ({
  name,
  price,
  image,
  onClick,
  ...rest
}: ProductItemProps) => {
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
    <div
      className="col-3"
      style={{ cursor: "pointer" }}
      onClick={onClick}
      {...rest}
    >
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
              <img src="/bedscolor/1.jpg" alt="img" width="50" height="50" />
            </li>
            <li>
              <img src="/bedscolor/2.jpg" alt="img" width="50" height="50" />
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

export default ProductItem;
