/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import BestSellingBeds from "./demo";
import Button from "react-bootstrap/Button";
import styles from "styles/product/product.module.scss";
// COMPONENTS
import useSelectBed from "store/hooks/useselectbed";
import SideTabButton from "components/products/tabbutton";
import ContentHeader from "components/products/contentheader";
// ARRAY
import BedsTabs from "./tabs";
import dummyPayload from "./array";
import useAddCart from "store/hooks/useaddcart";

/**
 * NEW PRODUCT PAGE
 * @returns
 */
const NewProductPage = () => {
  const { addToCart, cartState } = useAddCart();
  const [tabs, setTabs] = React.useState("BedSize");
  const { bedState } = useSelectBed();

  const onTabSelect = React.useCallback(
    (value: string) => {
      setTabs(value);
    },
    [tabs]
  );

  const [tabIndex, settabIndex] = React.useState(
    tabsArray.findIndex((data) => data.title === tabs)
  );
  const onClickNext = React.useCallback(() => {
    if (tabIndex < tabsArray.length) {
      settabIndex((i) => i + 1);
    }
    if (tabIndex >= tabsArray.length - 1) {
      settabIndex(0);
    }
  }, [tabIndex]);

  React.useEffect(() => {
    if (tabIndex < tabsArray.length) {
      setTabs(tabsArray[tabIndex].title);
    }
  }, [tabIndex]);

  const forCart = {
    id: 1,
    name: "Product One",
    description: "Small description for product",
    categories: ["writing", "bestseller"],
    quantity: 0,
    price: 98.9,
    options: {
      image: "no",
      size: "2ft",
      color: "grey light",
      headBoard: "no",
      storage: "single",
      feet: "no",
      matters: "no",
    },
  };

  const { name } = dummyPayload;

  return (
    <React.Fragment>
      <NextSEO title={"Dbz beds "} />
      {/* Gufran  */}
      <div className={styles.imageContainer}>
        <img src={bedState.bedImage} alt="Bed Image" className={styles.image} />
        <div className={styles.container}>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.item1}>
            <div className={styles.left}>
              {tabsArray.map((data, index) => (
                <SideTabButton
                  key={index}
                  onClick={() => onTabSelect(data.title)}
                  title={data.title}
                  isactive={data.title === tabs}
                />
              ))}
            </div>
            <div className={styles.right}>
              <ContentHeader
                title={tabsArray.find((data) => data.title === tabs)?.title}
                onClickNext={onClickNext}
              />
              {/* DYNAMIC TABS  */}
              <BedsTabs productData={dummyPayload} tabName={tabs} />
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.summary}>
              <div className={styles.priceitemsummary}>
                <div>
                  <h5>Total Price</h5>
                  <span>£{cartState.cartTotalAmount}</span>
                  {/* <span>£450.00</span> */}
                </div>
                <div className={styles.numberaddcard}>
                  <div>
                    <input
                      type="number"
                      defaultValue={0}
                      className={styles.numbertextarea}
                    />
                  </div>
                  <div>
                    <Button
                      onClick={() => addToCart(forCart)}
                      className={styles.addcart}
                    >
                      Add the cart {cartState.cartTotalQuantity}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERE */}
      <BestSellingBeds />
    </React.Fragment>
  );
};
export default NewProductPage;

const tabsArray = [
  {
    title: "BedSize",
  },
  {
    title: "Color",
  },
  {
    title: "HeadBoard",
  },
  {
    title: "Storage",
  },
  {
    title: "Feet",
  },
  {
    title: "Mattress",
  },
];
