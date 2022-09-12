import React from "react";
import CommonForBed from "components/products/common";
import useSelectBed from "store/hooks/useselectbed";
import {
  bedIcons,
  colorIcons,
  headBoardIcons,
  mattressIcons,
  feetIcons,
  storageIcons,
} from "constants/icons";

interface BedsTabsProps {
  tabName: string;
  productsPayload: any;
  onColorChange: (value: any) => void;
}

const BedsTabs = ({
  tabName,
  productsPayload,
  onColorChange,
}: BedsTabsProps) => {
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

  // RENDER TABS
  const RenderTabs = React.useMemo(() => {
    switch (tabName) {
      case "BedSize":
        return (
          <CommonForBed
            items={{ bedIcons, productsPayload, type: "BED" }}
            value={bedState.bedSize}
            onClickItem={(data) => {
              // setBed(data);
              // setBedSize(data.content);
              // setBedImage(data.imageUrl as string);
              // setBedPrice(data.price);
            }}
          />
        );
      case "Color":
        return (
          <CommonForBed
            items={{ colorIcons, productsPayload, type: "COLOR" }}
            value={bedState.bedColor}
            onClickItem={(data: any) => {
              onColorChange(data);
              // console.log({ data });
            }}
          />
        );
      case "HeadBoard":
        return (
          <CommonForBed
            items={{ headBoardIcons, productsPayload, type: "HEADBOARD" }}
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
            items={{ storageIcons, productsPayload, type: "STORAGE" }}
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
            items={{ feetIcons, productsPayload, type: "FEET" }}
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
            items={{ mattressIcons, productsPayload, type: "MATTRESS" }}
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
