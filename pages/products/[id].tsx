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
import Link from "next/link";
import addtocart from "store/slices/addtocart";
import Styles from "styles/product/page.module.scss";

const TabsArray = [
    {
        name: "Description",
        value: "description",
    },
    {
        name: "Reviews",
        value: "reviews",
    },
    {
        name: "Policy & Warranty",
        value: "warranty",
    },
];

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

const NewProductPage = ({ size: bedSize, id }: any) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const imageRef = React.useRef(null);
    const src = "/grey-linen.jpeg";

    const [size, setSize] = React.useState(null);

    const { data } = useFetchBedVariantsByIdAndSize(
        id as any,
        size || (bedSize as any)
    );

    const [state, setState] = React.useState<any>({
        size: data?.variants?.[0]?.size,
        color: undefined,
        storage: undefined,
        feet: undefined,
        headboard: undefined,
        mattress: undefined,
        quantity: 1,
    });

    const [currentImage, setCurrentImage] = React.useState(
        state?.color?.image || data?.variants[0]?.image
    );

    useEffect(() => {
        setCurrentImage(state?.color?.image || data?.variants[0]?.image);
    }, [state?.color?.image, data?.variants]);

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
                    price: Number(data?.variants?.[0]?.price?.salePrice),
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
            backgroundImage: `url(${currentImage})`,
        }));
    }, [currentImage]);

    const [tabsName, setTabsName] = React.useState("description");

    const TabsRender = React.useMemo(() => {
        switch (tabsName) {
            case "description":
                return <Description />;
            case "reviews":
                return <Reviews />;
            case "warranty":
                return <PolicyWarranty />;
            default:
                return null;
        }
    }, [tabsName]);

    return (
        <div>
            <section className={Styles.mainproducttitle}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Grey Linen Divan Bed Base or Set Headboard &
                                Mattress Free Uk Delivery
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
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
                                        src={currentImage}
                                        alt="Grey-linen"
                                    />
                                </figure>
                            </div>
                            <ImageCarousel
                                selected={(value) => setCurrentImage(value)}
                                imagesArray={[
                                    state?.color?.image ||
                                        data?.variants[0]?.image,
                                    ...(data?.images || []),
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
                                                    style={{
                                                        overflow: "hidden",
                                                        borderRadius: "4px",
                                                        border: `2px solid ${
                                                            state?.color ===
                                                            color
                                                                ? "#222178"
                                                                : "transparent"
                                                        }`,
                                                    }}
                                                >
                                                    <img
                                                        src={color?.name?.image}
                                                        alt={color?.name?.label}
                                                        height={40}
                                                        width={40}
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
                                value={state?.size}
                                onChange={(e) => {
                                    updateState("size", e.target.value);
                                    setSize(e.target.value as any);
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
                <section className={Styles.descriptiontabs}>
                    <div className="container">
                        <ul className={`${Styles["descriptionul"]}`}>
                            {TabsArray.map((data, index) => (
                                <li
                                    onClick={() => setTabsName(data.value)}
                                    key={index}
                                    style={{
                                        borderColor:
                                            data.value === tabsName
                                                ? "#252782"
                                                : "",
                                    }}
                                >
                                    {data.name}
                                </li>
                            ))}
                        </ul>
                        <div>{TabsRender}</div>
                    </div>
                </section>
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
                    {dataArray?.map((data: any, index: number) => {
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
                        <input
                            type={"number"}
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                        />
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
                {imagesArray.map((data: any, index) => (
                    <li key={index} onClick={() => onSelectImage(data)}>
                        <img src={data} alt="" />
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
    const { id: query = null }: any = context.query;
    let size: any = null;
    let id: any = null;

    if (query) {
        const lastWord = query.split("-").pop();
        if (lastWord && !isNaN(parseInt(lastWord.slice(0, 1)))) {
            size = lastWord;
        }
        id = query.replace(`-${size}`, "");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/beds/${id}${
            size ? `?size=${size}` : ""
        }`
    );

    const data = await res.json();

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["bed-variant", id, size],
        async () => data
    );

    if (res.statusText !== "OK") {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    } else if (data?.variants?.length === 0 || !data) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            size,
            id,
        },
    };
};

const Description = () => {
    return (
        <div className={Styles.desctab1}>
            <h3>Specifications:</h3>
            <ul>
                <li>Variety of colours available in many different fabrics</li>
                <li>Various drawer options available</li>
                <li>free castor wheel’s legs are included</li>
                <li>
                    3 different Mattress options and 4 headboard options
                    available
                </li>
                <li>Made in the UK</li>
                <li>1-year guarantee included on a full set</li>
                <li>
                    Headboard can be fitted on either side of the base for a 2
                    draw same side option
                </li>
                <li>Base height is 12” without the feet</li>
            </ul>
            <h3>Dimensions:</h3>
            <ul>
                <li>Single W: 90cm L: 190cm</li>
                <li>Small Double W: 120cm L: 190cm</li>
                <li>Double W: 135cm L: 190cm</li>
                <li>King Size W: 150cm L: 200cm</li>
                <li>Super King Size W: 180cm L: 200cm</li>
                <p>
                    <strong>Luxury base</strong> will add a touch of class to
                    any bedroom. This <strong>Luxury divan bed</strong> will
                    look great with your bedroom decor.
                </p>
            </ul>
            <h3>
                4 Headboards options available as an optional extra, shop our
                range of matching headboards here:
            </h3>
            <ul>
                <li>
                    <strong>Option 1</strong> – 26 Inch Diamond Button Cube
                    Headboard
                </li>
                <li>
                    <strong>Option 2</strong> – 26 Inch Matching Button Cube
                    Headboard
                </li>
                <li>
                    <strong>Option 3</strong> – 48 Inch Floor Standing Diamond
                    Cube Headboard
                </li>
                <li>
                    <strong>Option 4</strong> – 48 Inch Floor Standing Matching
                    Cube Headboard
                </li>
            </ul>
            <h3>
                3 optional Mattresses available separately, shop our range of
                mattresses here:
            </h3>
            <ul>
                <li>
                    <strong>Option 1</strong> – Orthopedic Mattress -Medium to
                    Soft Firmness
                </li>
                <li>
                    <strong>Option 2</strong> – 1500 pocket tinsel top – Medium
                    Firmness
                </li>
                <li>
                    <strong>Option 3</strong> – 1500 Pillow top Mattress –
                    Medium to Hard Firmness
                </li>
                <p>
                    Our luxury base is an upgrade of our classic divan offering
                    a superior sleep experience. Classic divans are designed to
                    offer great value, in our essential range of colours and
                    fabrics. The luxury divan is upholstered in a range of
                    premium fabrics available in neutral colours.
                </p>
            </ul>
            <h3>Please note:</h3>
            <ul>
                <li>
                    For the 2-drawer divan option, the drawers can be positioned
                    on either the left or the right side of the bed as the
                    headboard can be fixed at either end of the base.
                </li>
                <li>
                    In the 4-drawer divan option, the drawers appear either
                    side.
                </li>
                <li>
                    The divan base comprises of two halves split north to south,
                    with the exception of the single which is one complete base
                </li>
            </ul>
        </div>
    );
};
const Reviews = () => {
    return <div>Reviews</div>;
};
const PolicyWarranty = () => {
    return (
        <div className={Styles.desctab3}>
            <h5>Delivery Information</h5>
            <p>
                Once you have successfully placed your order, you’ll receive an
                order confirmation by email with a follow-up call from the sales
                team within 2-3 days to confirm your order and delivery date.
                Please ensure you leave a correct contact number for our sales
                team to contact you, if we fail to reach you on a contact number
                you’ve provided, your order will be placed on hold until we hear
                from you. We only to deliver to UK Mainland.
            </p>
            <p>
                Standard Free Delivery is within 3-5 working days within 120
                miles of our postcode WV14 7HZ, any orders placed outside this
                postcode will take slightly longer. Areas covered within 2-5
                working days are London, East Midlands, West Midlands, South
                Wales, Manchester, Yorkshire, and surrounding postcodes.Orders
                will only be dispatched once the order has been confirmed with
                the customer and the delivery date / approximate time has been
                given.
            </p>
            <p>
                Safe Delivery All orders are delivered to the front of the
                building via our free standard kerbside delivery. If you live in
                a flat, it will be delivered to the communal entrance of the
                building. Couriers may deliver to the hallway at their own
                discretion.
            </p>
            <p>
                Please note if a 3rd party courier is used to deliver your goods
                and any damages occur whilst on your property, you must inform
                us of this on the day the goods have been delivered so we can
                make a note of this on your order, and also provide you with
                contact details of the couriers for you to make a direct claim
                to them.
            </p>
            <p>
                Missed Delivery All customers are contacted regarding the
                delivery date/ time frame. Once the delivery is confirmed and
                booked in, the driver will contact you prior to delivery and if
                the delivery is missed, you are liable for the courier charge
                for the following booking
            </p>
            <p>
                Delivery Professionals Our friendly delivery drivers adhere to
                strict health and safety standards, to ensure your order is
                delivered in an efficient and professional manner. This ensures
                minimum damage that can be caused by mainstream couriers due to
                changing hands too many times.
            </p>
            <p>
                Refusal of Delivery If you refuse to accept a delivery on the
                day without approval from us, a charge of £62 will be liable to
                be paid. The amount will be debited from any refunds due paid by
                card or any other means.
            </p>
            <h5> Warranty</h5>
            <p>
                Garden Furniture The colour of wooden furniture is affected
                eventually by UV rays and is not covered by our guarantee.
                Therefore, you the customer are responsible to maintain and
                treat the equipment.
            </p>
            <p>
                Please note that shaking (small cracks) in wood outdoor
                furniture is normal and is not a structural fault.
            </p>
            <p>
                All other products e.g., Cushions are guaranteed for 2 years
                against any structural fault. This excludes colour change.
            </p>
            <p>
                All our guarantees do not cover any of our garden products used
                in a contract environment (non-domestic), i.e., in hotels, bars,
                hostelries, inns, taverns, restaurants, holiday lets, rented
                accommodation, campsites etc.
            </p>
            <p>
                After 28 days from purchase, it is the responsibility (this
                includes both cost and effort) of the customer to return and
                collect any goods to the address below in the event of a
                guarantee claim. In the event of any claim, the customer must
                provide proof of purchase in the form of the original sales
                invoice or the payment method.
            </p>
            <p>Bed Divans Unit 7, Stag Industrial Estate, Bilston, WV14 7HZ.</p>
            <p>
                Our guarantees are only applicable to private individuals who
                purchased goods for domestic use. Where the goods are used other
                than for domestic purposes, including without limitation,
                communal use and/or commercial use, our guarantees will not
                apply. Our guarantees shall not apply to persons acquiring goods
                second hand or at auction.
            </p>
            <p>
                Our 2-year structural guarantee does not cover the normal wear
                and tear of furniture or any damages that arise due to misuse,
                negligence, or incorrect assembly.<br></br>Beds / Mattresses You
                will receive a full 1 Year Exchange Guarantee with a full bed
                set (like for like).
            </p>
            <h5>Refunds, Returns and Exchanges</h5>
            <p>
                Changing your order You can make any changes within 48 hours of
                placing your order, such as colour, bed size and quantity.
            </p>
            <p>
                Cancelling your order if you wish to cancel your order please
                either call or email us and we can get this done for you.
            </p>
            <p>
                To complete your return, we require proof of purchase. This
                could be an order confirmation or invoice. Refunds take 5-7
                working days to the original method of payment, depending on
                your bank.
            </p>
            <h5>Returns after delivery</h5>
            <p>You can return your order within 14 days after delivery.</p>
            <p>
                Items can be returned at your own cost or we can arrange for
                collection with one of our drivers. The collection is subject to
                a courier charge of £62 if the item is unused, in its original
                condition and in its original packaging.
            </p>
            <p>
                Please ensure you use a tracking service if you are returning
                items at your own cost so we can safely receive your returned
                item. The item must clearly contain your name, order number and
                full address so that we can process your return.
            </p>
            <p>
                All returns must be approved by DBZKHAN LTD before any return is
                processed. Once your return is received and inspected, we will
                send you an email to notify you that we have received your
                returned item. You will then receive an email notifying you of
                the approval or rejection of your refund.
            </p>
            <p>
                What if my item doesn’t fit? It is your responsibility to make
                sure you carefully check the measurements before placing your
                order. If the item has been delivered and does not fit, you are
                liable for returning the item back or arranging collection
                subject to a courier charge of £62 in its original condition and
                in its original packaging, for a refund to be processed.
            </p>
            <p>
                Faulty products Our products are handled with care and usually
                arrive in good condition. If your item is faulty this must be
                reported within 24-48 hours of receiving your delivery.<br></br>
                Reported faults will result in a dispute claim which require
                photographic evidence for our friendly after sales team to
                resolve the issue.
            </p>
            <h5>Refunds</h5>
            <p>
                If your return is approved, a refund will be processed, and a
                credit will automatically be applied to your original method of
                payment within 5-7 working days depending on your bank
            </p>
            <p>
                We want you to be satisfied with your purchase. If you aren’t,
                we’d like to help. Please contact us on info@bedDivans.co.uk or
                via our live chat service.
            </p>
            <h5>Exchanges</h5>
            <p>
                If for any reason you are not satisfied with your bed purchase
                in regard to manufacturing purposes, then we are more than happy
                to offer an exchange.
            </p>
            <h5>Klarna Payment Privacy Policy</h5>
            <p>
                If you wish to use Klarna’s payment methods to pay for your
                goods, then your personal data will be passed on to Klarna. This
                is for Klarna to assess your individual eligibility and criteria
                subject to a credit check. This process enables Klarna to
                establish what would be a suitable payment method to suit your
                individual needs. Therefore, please be aware, this is all
                subject to your personal data transferred to Klarna in line with
                Klarna’s own privacy notice.
            </p>
        </div>
    );
};
