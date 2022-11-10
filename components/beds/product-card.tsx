/* eslint-disable @next/next/no-img-element */
import styles from "styles/header.module.scss";

interface ProductCardProps extends React.ComponentPropsWithoutRef<"div"> {}
const ProductCard = ({ ...rest }: ProductCardProps) => {
  return (
    <div className="col-3" {...rest}>
      <div className={styles.box1}>
        <img
          src="https://aspirestore.co.uk/49826-home_default/garland-fabric-ottoman-bed.jpg"
          alt="img"
          width={258}
          height="210"
        />
        <h2 className={styles.productname}>Garland Fabric Ottoman Bed</h2>
        <div className={styles.trustpilot}>
          <img src="/image/tru.png" alt="img" />
        </div>
        <p className={styles.price}>£600.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
