/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import BestSellingBeds from "./demo";
import Button from "react-bootstrap/Button";
import styles from "styles/NewProductPage.module.scss";
// COMPONENTS
import useSelectBed from "store/hooks/useselectbed";
import TabButton from "components/products/tabbutton";
import BedHeadBoard from "components/products/bedheadboard";
import ContentHeader from "components/products/contentheader";
// ARRAY
import {
  bedBedSizeArray,
  bedColorArray,
  bedFeetArray,
  bedHeadBoardArray,
  bedMattressArray,
  bedStorageArray,
} from "./array";
import CommonForBed from "components/products/common";

const RenderTabsArray = [
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

/**
 * NEW PRODUCT PAGE
 * @returns
 */
const NewProductPage = () => {
  const [tabs, setTabs] = React.useState("BedSize");
  const {
    bedState,
    setBedSize,
    setBedColor,
    setBedFeet,
    setBedHeadBoard,
    setBedMatters,
    setBedStorage,
    setBedImage,
    setBedPrice,
  } = useSelectBed();

  // RENDER TABS
  const RenderTabs = React.useMemo(() => {
    switch (tabs) {
      case "BedSize":
        return (
          <CommonForBed
            items={bedBedSizeArray}
            value={bedState.bedSize}
            onClickItem={(data) => {
              setBedSize(data.content);
              setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      case "Color":
        return (
          <CommonForBed
            items={bedColorArray}
            value={bedState.bedColor}
            onClickItem={(data) => {
              setBedColor(data.content);
              setBedImage(data.imageUrl);
            }}
          />
        );
      case "HeadBoard":
        return (
          <CommonForBed
            items={bedHeadBoardArray}
            value={bedState.bedHeadBoard}
            onClickItem={(data) => setBedHeadBoard(data.content)}
          />
        );
      case "Storage":
        return (
          <CommonForBed
            items={bedStorageArray}
            value={bedState.bedStorage}
            onClickItem={(data) => setBedStorage(data.content)}
          />
        );
      case "Feet":
        return (
          <CommonForBed
            items={bedFeetArray}
            value={bedState.bedFeet}
            onClickItem={(data) => setBedFeet(data.content)}
          />
        );
      case "Mattress":
        return (
          <CommonForBed
            items={bedMattressArray}
            value={bedState.bedMatters}
            onClickItem={(data) => setBedMatters(data.content)}
          />
        );
      default:
        return null;
    }
  }, [bedState, bedState, tabs]);

  const onTabSelect = React.useCallback(
    (value: string) => {
      setTabs(value);
    },
    [tabs]
  );

  const [tabIndex, settabIndex] = React.useState(
    RenderTabsArray.findIndex((data) => data.title === tabs)
  );
  const onClickNext = () => {
    // console.log(index)
    if (tabIndex < RenderTabsArray.length) {
      settabIndex((i) => i + 1);
      setTabs(RenderTabsArray[tabIndex].title);
    }

    // console.log(RenderTabsArray[index+1].title)
  };
  return (
    <React.Fragment>
      <NextSEO title={"Dbz beds "} />
      {/* Gufran  */}
      <div className={styles.imageContainer}>
        <img src={bedState.bedImage} alt="Bed Image" className={styles.image} />
        <div className={styles.container}>
          <h3 className={styles.productName}>
            Grey Linen Divan Bed Set With 3 Panel Headboard And Free Pillow Top
            Mattress
          </h3>
          <div className={styles.item1}>
            <div className={styles.left}>
              {RenderTabsArray.map((data, index) => (
                <TabButton
                  key={index}
                  onClick={() => onTabSelect(data.title)}
                  title={data.title}
                  isactive={data.title === tabs}
                />
              ))}
            </div>
            <div className={styles.right}>
              <ContentHeader
                title={
                  RenderTabsArray.find((data) => data.title === tabs)?.title
                }
                onClickNext={onClickNext}
              />
              {RenderTabs}
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.summary}>
              <div className={styles.priceitemsummary}>
                <div>
                  <h5>Total Price</h5>
                  <span>{bedState.bedPrice}</span>
                  {/* <span>£450.00</span> */}
                </div>
                <div className={styles.numberaddcard}>
                  <div>
                    <input
                      type="number"
                      className={styles.numbertextarea}
                    ></input>
                  </div>
                  <div>
                    <Button className={styles.addcart}> Add the cart</Button>
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
