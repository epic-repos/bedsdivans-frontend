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
        setBed,
        setBedColor,
        setBedFeet,
        setBedHeadBoard,
        setBedMatters,
        setBedStorage,
    } = useSelectBed();

    // LIKE API DATA

    // RENDER TABS
    const RenderTabs = React.useMemo(() => {
        switch (tabName) {
            case "BedSize":
                return (
                    <CommonForBed
                        items={{ bedIcons, productsPayload, type: "BED" }}
                        value={bedState.bed.size} // LIKE ISACTIVE
                        onClickItem={(value) => {
                            console.log(value);
                        }}
                    />
                );
            case "Color":
                return (
                    <CommonForBed
                        items={{ colorIcons, productsPayload, type: "COLOR" }}
                        value={bedState.accessories.color.name} // LIKE ISACTIVE
                        onClickItem={(data: any) => {
                            setBedColor({ name: data.name, image: data.image });
                            onColorChange(data);
                        }}
                    />
                );
            case "HeadBoard":
                return (
                    <CommonForBed
                        items={{
                            headBoardIcons,
                            productsPayload,
                            type: "HEADBOARD",
                        }}
                        value={bedState.accessories.headboard.name} // LIKE ISACTIVE
                        onClickItem={(data) => {
                            setBedHeadBoard({
                                name: data.name,
                                price: Number(data.price),
                            });
                        }}
                    />
                );
            case "Storage":
                return (
                    <CommonForBed
                        items={{
                            storageIcons,
                            productsPayload,
                            type: "STORAGE",
                        }}
                        value={bedState.accessories.storage.name} // LIKE ISACTIVE
                        onClickItem={(data) => {
                            setBedStorage({
                                name: data.name,
                                price: Number(data.price),
                            });
                        }}
                    />
                );
            case "Feet":
                return (
                    <CommonForBed
                        items={{ feetIcons, productsPayload, type: "FEET" }}
                        value={bedState.accessories.feet.name} // LIKE ISACTIVE
                        onClickItem={(data) => {
                            setBedFeet({
                                name: data.name,
                                price: Number(data.price),
                            });
                        }}
                    />
                );
            case "Mattress":
                return (
                    <CommonForBed
                        items={{
                            mattressIcons,
                            productsPayload,
                            type: "MATTRESS",
                        }}
                        value={bedState.accessories.mattress.name} // LIKE ISACTIVE
                        onClickItem={(data) => {
                            setBedMatters({
                                name: data.name,
                                price: Number(data.price),
                            });
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
