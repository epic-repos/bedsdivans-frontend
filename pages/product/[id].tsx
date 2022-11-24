/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import PerPageLayout from "layout/perpage";
import addtocart from "store/slices/addtocart";
import css from "styles/product/page.module.scss";
import { dehydrate, QueryClient } from "react-query";
import useAppDispatch from "store/hooks/usedispatch";
import AddToBasket from "components/products/add-to-basket";
import SelectOption from "components/products/select-options";
import ImageCarousel from "components/products/image-carousel";
import { useFetchBedVariantsByIdAndSize } from "network-requests/queries";

// DYNAMIC COMPONENTS
const ContentTabs = dynamic(() => import("components/products/tabs"));

const ProductDetailPage = ({ size: bedSize, id }: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const imageRef = React.useRef(null);

  const [size, setSize] = React.useState(null);

  const { data, isFetching, isFetched } = useFetchBedVariantsByIdAndSize(
    id as any,
    size || (bedSize as any)
  );

  const [productData, setProductData] = React.useState(data);

  const [productState, setProductState] = React.useState<any>();
  const [currentImage, setCurrentImage] = React.useState(
    productState?.color?.image || productData?.variants[0]?.image
  );
  // REFETCH DATA ON CHANGE
  React.useMemo(() => {
    if (isFetched) {
      setProductData(data);
    }
  }, [data, isFetched]);

  React.useEffect(() => {
    setCurrentImage(
      productState?.color?.image || productData?.variants[0]?.image
    );
  }, [productState?.color?.image, productData?.variants]);

  const _updateState = React.useCallback(
    (key: string, value: string | number) => {
      setProductState((prevState: any) => ({
        ...prevState,
        [key]: value,
      }));
    },
    []
  );

  const updateState = React.useMemo(() => _updateState, [_updateState]);

  // const { handleMouseMove, style } = useMouseMove(
  //   state?.color?.image || productData?.variants[0]?.image
  // );
  //REDUX STATE
  const handleAddToCart = React.useCallback(() => {
    dispatch(
      addtocart.actions.addToCart({
        bed: {
          id: productData?._id,
          name: productData?.name,
          image: productData?.variants?.[0]?.image,
          price: Number(productData?.variants?.[0]?.price?.salePrice),
          size: router?.query?.size,
        },
        accessories: {
          color: productState?.color,
          storage: productState?.storage,
          feet: productState?.feet,
          headboard: productState?.headboard,
          mattress: productState?.mattress,
        },
        quantity: productState?.quantity,
      })
    );
    router.push("/cart");
  }, []);

  // React.useEffect(() => {
  //   setStyle((style) => ({
  //     ...style,
  //     backgroundImage: `url(${currentImage})`,
  //   }));
  // }, [currentImage]);

  return (
    <div>
      <section className={css.mainproducttitle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Grey Linen Divan Bed Base or Set Headboard & Mattress Free Uk
                Delivery
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div
          className={`${css["grid"]}`}
          style={{
            opacity: isFetching ? 0.5 : 1,
          }}
        >
          <div className={`${css["left"]}`}>
            <div className={css["image-section"]}>
              <div className={css["product-image"]}>
                <figure ref={imageRef}>
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
                  productState?.color?.image || productData?.variants[0]?.image,
                  ...(productData?.images || []),
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
              <p>Headboard can be fixed on both ends of the beds</p>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["product-name"]}>
              <h1>{productData?.name}</h1>
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
                Get 10% off on all products minimum spend of £250 "Coupon
                Code:EXTRA10"
              </span>
            </div>
            <div className={css["price"]}>
              <p>
                <span>£</span>
                <span>{productData?.variants[0]?.price?.salePrice}</span>
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
                  {productState?.color?.name?.label && (
                    <span className={css["active-color"]}>
                      {productState?.color?.name?.label}
                    </span>
                  )}
                </label>
                <div className={css["color-options"]}>
                  <ul>
                    {productData?.variants?.[0]?.accessories?.color?.map(
                      (color: any) => (
                        <li
                          key={color?._id}
                          onClick={() => {
                            updateState("color", color);
                          }}
                          style={{
                            overflow: "hidden",
                            borderRadius: "4px",
                            border: `2px solid ${
                              productState?.color === color
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
                dataArray={productData?.availabeSizes as any}
                label="Select Your Size"
                value={productState?.size}
                onChange={(e) => {
                  updateState("size", e.target.value);
                  setSize(e.target.value as any);
                }}
              />
              <SelectOption
                type="accessories"
                dataArray={
                  productData?.variants?.[0]?.accessories?.storage as any
                }
                label="Select Your Storage"
                onChange={(e) => {
                  updateState(
                    "storage",
                    e.target.value && JSON.parse(e.target.value)
                  );
                }}
              />
              <SelectOption
                type="accessories"
                dataArray={productData?.variants?.[0]?.accessories?.feet as any}
                label="Select Your Feet"
                onChange={(e) => {
                  updateState(
                    "feet",
                    e.target.value && JSON.parse(e.target.value)
                  );
                }}
              />
              <SelectOption
                type="accessories"
                dataArray={
                  productData?.variants?.[0]?.accessories?.headboard as any
                }
                label="Select Your Headboard"
                onChange={(e) => {
                  updateState(
                    "headboard",
                    e.target.value && JSON.parse(e.target.value)
                  );
                }}
              />
              <SelectOption
                type="accessories"
                dataArray={
                  productData?.variants?.[0]?.accessories?.mattress as any
                }
                label="Select Your Mattress"
                onChange={(e) => {
                  updateState(
                    "mattress",
                    e.target.value && JSON.parse(e.target.value)
                  );
                }}
              />
            </div>
            <div>
              <AddToBasket
                onClick={handleAddToCart}
                onChange={(value) => updateState("quantity", value)}
              />
            </div>
          </div>
        </div>
        <ContentTabs />
      </div>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = PerPageLayout;

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
  await queryClient.prefetchQuery(["bed-variant", id, size], async () => data);

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
