import React from "react";
import CommonForBed from "components/products/common";
import useSelectBed from "store/hooks/useselectbed";

interface BedsTabsProps {
  tabName: string;
  productsPayload: any;
}

const BedsTabs = ({ tabName, productsPayload }: BedsTabsProps) => {
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
    setBed,
  } = useSelectBed();

  // LIKE API DATA

  console.log(bedState.bedSize);
  // RENDER TABS
  const RenderTabs = React.useMemo(() => {
    switch (tabName) {
      case "BedSize":
        return (
          <CommonForBed
            items={productsPayload?.options?.bedSize}
            value={bedState.bedSize}
            onClickItem={(data) => {
              setBed(data);
              setBedSize(data.content);
              setBedImage(data.imageUrl as string);
              setBedPrice(data.price);
            }}
          />
        );
      case "Color":
        return (
          <CommonForBed
            items={bedState.bed.bedColor}
            value={bedState.bedColor}
            onClickItem={(data) => {
              setBedColor(data.content);
              setBedImage(data.imageUrl as string);
              setBedPrice(data.price);
            }}
          />
        );
      case "HeadBoard":
        return (
          <CommonForBed
            items={bedState.bed.bedHeadBoard}
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
            items={bedState.bed.bedStorage}
            value={bedState.bedStorage}
            onClickItem={(data) => {
              setBedStorage(data.content);

              setBedPrice(data.price);
            }}
          />
        );
      case "Feet":
        return (
          <CommonForBed
            items={bedState.bed.bedFeet}
            value={bedState.bedFeet}
            onClickItem={(data) => {
              setBedFeet(data.content);
              setBedPrice(data.price);
            }}
          />
        );
      case "Mattress":
        return (
          <CommonForBed
            items={bedState.bed.bedMatters}
            value={bedState.bedMatters}
            onClickItem={(data) => {
              setBedMatters(data.content);

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
