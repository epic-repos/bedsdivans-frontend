import React from "react";
import useSelectBed from "store/hooks/useselectbed";
import BedSizeTab from "components/products/tabs/bedSize";
import { useRouter } from "next/router";
import BedColorTab from "components/products/tabs/bedColor";
import BedHeadBoardTab from "components/products/tabs/bedHeadBoard";
import BedStorageTab from "components/products/tabs/bedStorage";
import BedFeetTab from "components/products/tabs/bedFeet";
import BedMattressTab from "components/products/tabs/bedMattress";

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
    const router = useRouter();

    const {
        bedState,
        setBed,
        setBedColor,
        setBedFeet,
        setBedHeadBoard,
        setBedMatters,
        setBedStorage,
    } = useSelectBed();

    // FROM API DATA

    // FROM REDUX
    const { color, feet, headboard, mattress, storage } = bedState.accessories;

    // RENDER TABS
    const RenderTabs = React.useMemo(() => {
        switch (tabName) {
            case "BedSize":
                return (
                    <BedSizeTab
                        items={productsPayload?.availabeSizes}
                        value={bedState.bed.size} // LIKE ISACTIVE
                        onClickItem={(data) => {
                            router.push({
                                pathname: `/products/${productsPayload._id}`,
                                query: { size: data?.value },
                            });
                            // setBed(data);
                        }}
                    />
                );

            case "Color":
                // productsPayload.variants[0].accessories.color
                return (
                    <BedColorTab
                        items={
                            productsPayload?.variants?.["0"]?.accessories?.color
                        }
                        value={color?.name?.value} // LIKE ISACTIVE
                        onClickItem={(data: any) => {
                            setBedColor({ name: data.name, image: data.image });
                            onColorChange(data);
                        }}
                    />
                );

            case "HeadBoard":
                console.log({ headboard });
                return (
                    <BedHeadBoardTab
                        items={
                            productsPayload?.variants[0]?.accessories?.headboard
                        }
                        value={headboard?.name?.value} // LIKE ISACTIVE
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
                    <BedStorageTab
                        items={
                            productsPayload?.variants[0]?.accessories?.storage
                        }
                        value={storage.price} // LIKE ISACTIVE
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
                    <BedFeetTab
                        items={productsPayload?.variants[0]?.accessories?.feet}
                        value={feet.price} // LIKE ISACTIVE
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
                    <BedMattressTab
                        items={
                            productsPayload?.variants[0]?.accessories?.mattress
                        }
                        value={mattress.price} // LIKE ISACTIVE
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
