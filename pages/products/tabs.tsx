import React from "react";
import CommonForBed from "components/products/common";
import useSelectBed from "store/hooks/useselectbed";
import {
  bedBedSizeArray,
  bedColorArray,
  bedHeadBoardArray,
  bedStorageArray,
  bedFeetArray,
  bedMattressArray,
} from "./array";

interface BedsTabsProps {
  tabName: string;
}

const BedsTabs = ({ tabName }: BedsTabsProps) => {
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
  // RENDER TABS
  const RenderTabs = React.useMemo(() => {
    switch (tabName) {
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
              setBedPrice(data.price);
            }}
          />
        );
      case "HeadBoard":
        return (
          <CommonForBed
            items={bedHeadBoardArray}
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
            items={bedStorageArray}
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
            items={bedFeetArray}
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
            items={bedMattressArray}
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
