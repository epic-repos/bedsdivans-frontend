import React from "react";
import CommonForBed from "components/products/common";
import useSelectBed from "store/hooks/useselectbed";

interface BedsTabsProps {
  tabName: string;
  productData: any;
}

const BedsTabs = ({ tabName, productData }: BedsTabsProps) => {
  const {
    bedState,
    setBedSize,
    setBedImage,
    setBedPrice,
    setBedColor,
    setBedFeet,
    setBedHeadBoard,
    setBedMatters,
    setBedStorage,
  } = useSelectBed();

  // LIKE API DATA
  const {
    bedColor,
    bedFeet,
    bedHeadBoard,
    bedMatters,
    bedSize,
    bedStorage,
    category,
  } = productData;

  // RENDER TABS
  const RenderTabs = React.useMemo(() => {
    switch (tabName) {
      case "BedSize":
        return (
          <CommonForBed
            items={bedSize}
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
            items={bedColor}
            value={bedState.bedColor}
            onClickItem={(data) => {
              setBedColor(data.content);
              setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      case "HeadBoard":
        return (
          <CommonForBed
            items={bedHeadBoard}
            value={bedState.bedHeadBoard}
            onClickItem={(data) => {
              setBedHeadBoard(data.content);
              // setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      case "Storage":
        return (
          <CommonForBed
            items={bedStorage}
            value={bedState.bedStorage}
            onClickItem={(data) => {
              setBedStorage(data.content);
              // setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      case "Feet":
        return (
          <CommonForBed
            items={bedFeet}
            value={bedState.bedFeet}
            onClickItem={(data) => {
              setBedFeet(data.content);
              // setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      case "Mattress":
        return (
          <CommonForBed
            items={bedMatters}
            value={bedState.bedMatters}
            onClickItem={(data) => {
              setBedMatters(data.content);
              // setBedImage(data.imageUrl);
              setBedPrice(data.price);
            }}
          />
        );
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bedState, bedState, tabName]);

  return RenderTabs;
};
export default BedsTabs;
