/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/image";
import ArrowLeft from "icons/ArrowLeft";
import ArrowRight from "icons/ArrowRight";
import PerPageLayout from "layout/perpage";
import css from "styles/product/page.module.scss";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";
import redirect404 from "constants/redirects";
import { dehydrate, QueryClient } from "react-query";
import { useRouter } from "next/router";
import { useFetchBedVariantsByIdAndSize } from "network-requests/queries";
import useAppDispatch from "store/hooks/usedispatch";
import { nanoid } from "@reduxjs/toolkit";
import addtocart from "store/slices/addtocart";

const bedStorageArray = [
    {
        text: "No Drawers",
        value: "no-drawers",
    },
    {
        text: "2 Drawers – £45",
        value: "2-drawers-45",
    },
];

const NewProductPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const imageRef = React.useRef(null);
    const src = "/grey-linen.jpeg";

    const { data } = useFetchBedVariantsByIdAndSize(
        router?.query?.id as string,
        router?.query?.size as string
    );

    const [state, setState] = React.useState<any>({
        size: undefined,
        color: undefined,
        storage: undefined,
        feet: undefined,
        headboard: undefined,
        mattress: undefined,
        quantity: 1,
    });

    const updateState = (key: string, value: string | number) => {
        setState((prevState: any) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const [style, setStyle] = React.useState<React.CSSProperties>({
        backgroundImage: `url(${
            state?.color?.image || data?.variants[0]?.image
        })`,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
    });

    const zoom = 100;
    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * zoom;
        const y = ((e.pageY - top) / height) * zoom;
        setStyle({
            ...style,
            backgroundPosition: `${x}% ${y}%`,
        });
    };

    //REDUX STATE
    const handleAddToCart = () => {
        dispatch(
            addtocart.actions.addToCart({
                bed: {
                    id: data?._id,
                    name: data?.name,
                    image: data?.variants?.[0]?.image,
                    price: data?.variants?.[0]?.price?.salePrice,
                    size: router?.query?.size,
                },
                accessories: {
                    color: state?.color,
                    storage: state?.storage,
                    feet: state?.feet,
                    headboard: state?.headboard,
                    mattress: state?.mattress,
                },
                quantity: state?.quantity,
            })
        );
    };

    useEffect(() => {
        setStyle((style) => ({
            ...style,
            backgroundImage: `url(${
                state?.color?.image || data?.variants[0]?.image
            })`,
        }));
    }, [state, data]);

    return (
        <div>
            <div className="container">
                <div className={`${css["grid"]}`}>
                    <div className={`${css["left"]}`}>
                        <div className={css["image-section"]}>
                            <div className={css["product-image"]}>
                                <figure
                                    ref={imageRef}
                                    style={style}
                                    onMouseMove={handleMouseMove}
                                >
                                    <img
                                        className={css["image"]}
                                        src={
                                            state?.color?.image ||
                                            data?.variants[0]?.image
                                        }
                                        alt="Grey-linen"
                                    />
                                </figure>
                            </div>
                            <ImageCarousel
                                selected={(value) => console.log(value)}
                                imagesArray={[
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                    {
                                        source: "/grey-linen.jpeg",
                                    },
                                ]}
                            />
                        </div>
                        <div className={css.year_warranty}>
                            <ul>
                                <li>
                                    <Image
                                        src="/one-year-warranty-1.jpg"
                                        height={132}
                                        width={132}
                                        alt="short-image"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/free-delivery2.png"
                                        height={132}
                                        width={132}
                                        alt="short-image"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/made-in-britain3.png"
                                        height={132}
                                        width={132}
                                        alt="short-image"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/trust-pilot4.png"
                                        height={132}
                                        width={132}
                                        alt="short-image"
                                    ></Image>
                                </li>
                            </ul>
                            <p>1 Year Warranty * Made in Britain</p>
                            <ul>
                                <li>
                                    <Image
                                        src="/headboard1.png"
                                        height={79}
                                        width={132}
                                        alt="headboard"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/2-drawers-1-either-side2.png"
                                        height={79}
                                        width={132}
                                        alt="headboard"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/2-drawers-same-side3.png"
                                        height={79}
                                        width={132}
                                        alt="headboard"
                                    ></Image>
                                </li>
                                <li>
                                    <Image
                                        src="/4-drawers4.png"
                                        height={79}
                                        width={132}
                                        alt="headboard"
                                    ></Image>
                                </li>
                            </ul>
                            <p>
                                Headboard can be fixed on both ends of the beds
                            </p>
                        </div>
                    </div>
                    <div className={css["right"]}>
                        <div className={css["product-name"]}>
                            <h1>{data?.name}</h1>
                        </div>
                        <div className={css["trustpilot"]}>
                            <a href="">
                                <img
                                    src="/Trustpilot-4.5-Stars-300x63.png"
                                    alt="trustpilot"
                                    height={26}
                                    width={125}
                                    style={{ marginLeft: "10px" }}
                                />
                                <span>(1175)</span>
                                <img
                                    src="/Trustpilotlogo-300x822nd.webp"
                                    alt="trustpilot-logo"
                                    height={34}
                                    width={125}
                                    style={{ marginLeft: "15px" }}
                                />
                            </a>
                        </div>
                        <div className={css["coupon"]}>
                            <span>
                                Get 10% off on all products minimum spend of
                                £250 "Coupon Code:EXTRA10"
                            </span>
                        </div>
                        <div className={css["price"]}>
                            <p>
                                <span>£</span>
                                <span>
                                    {data?.variants[0]?.price?.salePrice}
                                </span>
                            </p>
                        </div>
                        <div className={css["product-options"]}>
                            <div className={css["colors"]}>
                                <label>
                                    <span style={{ color: "red" }}>*</span>
                                    <span
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "700",
                                        }}
                                    >
                                        Choose Colour
                                    </span>
                                </label>
                                <div className={css["color-options"]}>
                                    <ul>
                                        {data?.variants?.[0]?.accessories?.color?.map(
                                            (color: any) => (
                                                <li
                                                    key={color?._id}
                                                    onClick={() => {
                                                        updateState(
                                                            "color",
                                                            color
                                                        );
                                                    }}
                                                >
                                                    <img
                                                        src={color?.name?.image}
                                                        alt="grey-linen"
                                                        height={33}
                                                        width={33}
                                                    ></img>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <SelectOption
                                dataArray={data?.availabeSizes as any}
                                label="Select Your Size"
                                onChange={(e) => {
                                    console.log(e);
                                    router.push(
                                        {
                                            pathname: `/products/${router?.query?.id}`,
                                            query: { size: e.target.value },
                                        },
                                        undefined,
                                        { scroll: false }
                                    );
                                }}
                            />
                            <SelectOption
                                type="accessories"
                                dataArray={
                                    data?.variants?.[0]?.accessories
                                        ?.storage as any
                                }
                                label="Select Your Storage"
                                onChange={(e) => {
                                    updateState(
                                        "storage",
                                        e.target.value &&
                                            JSON.parse(e.target.value)
                                    );
                                }}
                            />
                            <SelectOption
                                type="accessories"
                                dataArray={
                                    data?.variants?.[0]?.accessories
                                        ?.feet as any
                                }
                                label="Select Your Feet"
                                onChange={(e) => {
                                    updateState(
                                        "feet",
                                        e.target.value &&
                                            JSON.parse(e.target.value)
                                    );
                                }}
                            />
                            <SelectOption
                                type="accessories"
                                dataArray={
                                    data?.variants?.[0]?.accessories
                                        ?.headboard as any
                                }
                                label="Select Your Headboard"
                                onChange={(e) => {
                                    updateState(
                                        "headboard",
                                        e.target.value &&
                                            JSON.parse(e.target.value)
                                    );
                                }}
                            />
                            <SelectOption
                                type="accessories"
                                dataArray={
                                    data?.variants?.[0]?.accessories
                                        ?.mattress as any
                                }
                                label="Select Your Mattress"
                                onChange={(e) => {
                                    updateState(
                                        "mattress",
                                        e.target.value &&
                                            JSON.parse(e.target.value)
                                    );
                                }}
                            />
                        </div>
                        <div>
                            <AddToBasket
                                onClick={handleAddToCart}
                                onChange={(value) =>
                                    updateState("quantity", value)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductPage;

NewProductPage.getLayout = PerPageLayout;

interface SelectOptionProps extends React.ComponentPropsWithoutRef<"select"> {
    label: string;
    dataArray: any;
    type?: string;
}

const SelectOption = (props: SelectOptionProps) => {
    const { label, dataArray, type, ...rest } = props;
    return (
        <div className={css["select-size"]}>
            <label>{props.label}</label>
            <div className={css["dropdown"]}>
                <select {...rest}>
                    {dataArray.map((data: any, index: number) => {
                        return (
                            <>
                                {type === "accessories" && (
                                    <option key={index} value="">
                                        No {label?.split(" ").pop()}
                                    </option>
                                )}
                                <option
                                    key={index}
                                    value={
                                        type === "accessories"
                                            ? JSON.stringify(data)
                                            : data.value
                                    }
                                >
                                    {type === "accessories"
                                        ? data?.name?.label
                                        : data.label}
                                </option>
                            </>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

interface AddToBasketProps {
    onChange: (value: number) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const AddToBasket = ({ onClick, onChange }: AddToBasketProps) => {
    const [count, setCount] = React.useState(0);

    const increaseCount = React.useCallback(() => {
        setCount((i) => i + 1);
    }, []);
    const decreaseCount = React.useCallback(() => {
        if (count > 0) {
            setCount((i) => i - 1);
        }
    }, [count]);

    useEffect(() => {
        onChange(count);
    }, [count]);

    return (
        <div>
            <div className={css["basket-row"]}>
                <div className={css["basket-count"]}>
                    <button onClick={decreaseCount}>-</button>
                    <div className={css["input"]}>
                        <input type={"number"} value={count} />
                    </div>
                    <button onClick={increaseCount}>+</button>
                    <button className={css["addToBasket"]} onClick={onClick}>
                        ADD TO BASKET
                    </button>
                </div>
                <button className={css["size-guide"]}>SIZE GUIDE</button>
            </div>
        </div>
    );
};

interface ImageTypes {
    source: string;
    [K: string]: any;
}

interface ImageCarouselProps {
    imagesArray: ImageTypes[];
    selected: (value: ImageTypes) => void;
}

const ImageCarousel = ({ imagesArray, selected }: ImageCarouselProps) => {
    const containerRef = React.useRef<HTMLUListElement>(null);
    const gapping = 10;
    const imageWidth = 100;
    const totalScroll = imageWidth + gapping;

    const scrollLeft = React.useCallback(() => {
        containerRef.current?.scrollBy({
            behavior: "smooth",
            left: -totalScroll,
        });
    }, [totalScroll]);
    const scrollRight = React.useCallback(() => {
        containerRef.current?.scrollBy({
            behavior: "smooth",
            left: totalScroll,
        });
    }, [totalScroll]);

    const onSelectImage = React.useCallback(
        (data: ImageTypes) => {
            if (selected) {
                selected(data);
            }
        },
        [selected]
    );

    return (
        <div className={css["image-lists"]}>
            <span onClick={scrollLeft} className={css["arrow-left"]}>
                <ArrowLeft color="#fff" size={32} />
            </span>
            <ul ref={containerRef}>
                {imagesArray.map((data, index) => (
                    <li key={index} onClick={() => onSelectImage(data)}>
                        <img src={data.source} alt="" />
                    </li>
                ))}
            </ul>
            <span onClick={scrollRight} className={css["arrow-right"]}>
                <ArrowRight color="#fff" size={32} />
            </span>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id, size } = context.query;

    if (!isValidObjectId(id)) {
        return redirect404();
    }

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["bed-variant", id, size],
        async () =>
            await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/beds/${id}?size=${size}`
            ).then((res) => {
                const response = res.json() as any;
                if (response.success === false) {
                    return {
                        redirect: {
                            permanent: false,
                            destination: "/",
                        },
                    };
                } else {
                    return response;
                }
            })
    );

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};
