/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import BestSellingBeds from "./sellingbeds";
import Button from "react-bootstrap/Button";
import styles from "styles/product/product.module.scss";
// COMPONENTS
import useSelectBed from "store/hooks/useselectbed";
import SideTabButton from "components/products/tabbutton";
import ContentHeader from "components/products/contentheader";
// ARRAY
import BedsTabs from "./tabs";
import PerPageLayout from "layout/perpage";
import useAddCart from "store/hooks/useaddcart";
import { NextPageWithLayout } from "typings/layout";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";
import { dehydrate, QueryClient } from "react-query";
import redirect404 from "constants/redirects";
import { useFetchBedVariantsByIdAndSize } from "network-requests/queries";

/**
 * NEW PRODUCT PAGE
 * @returns
 */

const NewProductPage: NextPageWithLayout = ({ id, size }: any) => {
    const { addToCart, cartState } = useAddCart();
    const [tabs, setTabs] = React.useState("BedSize");
    const { bedState, setBed } = useSelectBed();

    const onTabSelect = React.useCallback((value: string) => {
        setTabs(value);
    }, []);

    const { data } = useFetchBedVariantsByIdAndSize(id, size);
    const [currentImage, setCurrentImage] = React.useState<string>("");

    React.useEffect(() => {
        if (!(data?.variants && data?.variants?.length > 0)) return;
        // setCurrentBed(data?.variants[0]);
        setCurrentImage(data?.variants[0].image || "/fake.png");
        setBed({
            price: data.variants[0].price.salePrice,
            name: data.name as any,
            id: data.variants[0]._id as any,
            bedId: data._id as any,
            size: data.variants[0].size as any,
            image: data.variants[0].image as any,
        });
    }, [data, setBed]);

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

    return (
        <React.Fragment>
            <NextSEO title={`Dbz Beds`} />
            {/* Gufran  */}
            <div className={styles.imageContainer}>
                <img
                    src={currentImage}
                    alt="Bed Image"
                    className={styles.image}
                />
                <div className={styles.container}>
                    <h3 className={styles.productName}>{data?.name}</h3>
                    <div className={styles.item1}>
                        <div className={styles.left}>
                            {tabsArray.map((data, index) => (
                                <SideTabButton
                                    key={index}
                                    // icon={data.icon}
                                    onClick={() => onTabSelect(data.title)}
                                    title={data.title}
                                    isactive={data.title === tabs}
                                />
                            ))}
                        </div>
                        <div className={styles.right}>
                            <ContentHeader
                                title={
                                    tabsArray.find(
                                        (data) => data.title === tabs
                                    )?.title
                                }
                                onClickNext={onClickNext}
                            />
                            {/* DYNAMIC TABS  */}
                            <BedsTabs
                                productsPayload={data}
                                tabName={tabs}
                                onColorChange={(value) =>
                                    setCurrentImage(value.image)
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.summary}>
                            <div className={styles.priceitemsummary}>
                                <div>
                                    <h5>Total Price</h5>
                                    <span>{bedState.total}</span>
                                </div>
                                <div className={styles.numberaddcard}>
                                    <div>
                                        <input
                                            type="number"
                                            // value={cartState.cartTotalQuantity}
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className={styles.numbertextarea}
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                addToCart(bedState);
                                            }}
                                            className={styles.addcart}
                                        >
                                            Add the cart{" "}
                                            {/* {cartState.cartTotalQuantity} */}
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

NewProductPage.getLayout = PerPageLayout;

const tabsArray = [
    {
        title: "BedSize",
        // icon:'P'
    },
    {
        title: "Color",
        // icon:<ColorIcon />
    },
    {
        title: "HeadBoard",
        // icon:'P'
    },
    {
        title: "Storage",
        // icon:'P'
    },
    {
        title: "Feet",
        // icon:'P'
    },
    {
        title: "Mattress",
        // icon:'P'
    },
];
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id, size } = context.query;

    if (!isValidObjectId(id)) {
        return redirect404();
    }

    const getBed = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/beds/${id}?size=${size}`
        );

        if (response.status !== 200) {
            return redirect404();
        } else {
            return response.json();
        }
    };

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["bed-variant", id, size],
        async () => await getBed()
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            id,
            size,
        },
    };
};
