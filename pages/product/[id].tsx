/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import PerPageLayout from "layout/perpage";
import css from "styles/product/page.module.scss";
import { dehydrate, QueryClient } from "react-query";
import AddToBasket from "components/products/add-to-basket";
import SelectOption from "components/products/select-options";
import ImageCarousel from "components/products/image-carousel";
import { useFetchBedVariantsByIdAndSize } from "network-requests/queries";
import Colors from "components/products/colors";
import Warranty from "components/products/warranty";
import useAddCart from "store/hooks/useaddcart";
import useProduct from "store/hooks/use-product";

// DYNAMIC COMPONENTS
const ContentTabs = dynamic(() => import("components/products/tabs"));

const ProductDetailPage = ({ size: bedSize, id }: any) => {
  const router = useRouter();

  const { setAccessories, productState, setBed } = useProduct();

  const [size, setSize] = React.useState("");
  const { data, isFetching, isFetched } = useFetchBedVariantsByIdAndSize(
    id as any,
    size || (bedSize as any)
  );
  // API DATA
  const [productData, setProductData] = React.useState({
    id: data?._id,
    name: data?.name,
    images: data?.images,
    description: data?.description,
    categories: data?.categories,
    availabeSizes: data?.availabeSizes,
    variants: data?.variants[0],
  });
  const [currentImage, setCurrentImage] = React.useState(
    productState?.accessories?.color?.image || productData?.variants?.image
  );
  // REFETCH DATA ON CHANGE
  React.useMemo(() => {
    if (isFetched) {
      setProductData({
        id: data?._id,
        name: data?.name,
        images: data?.images,
        description: data?.description,
        categories: data?.categories,
        variants: data?.variants[0],
        availabeSizes: data?.availabeSizes,
      });
    }
  }, [data, isFetched]);

  React.useMemo(() => {
    setCurrentImage(
      productState?.accessories?.color?.image || productData?.variants?.image
    );
  }, [productState?.accessories?.color?.image, productData?.variants]);
  React.useMemo(() => {
    setBed({
      id: productData?.id,
      name: productData?.name,
      image: productData?.variants?.image,
      price: Number(productData?.variants?.price?.salePrice),
      size: size,
    });
  }, [productData, size]);

  const _updateState = React.useCallback(
    (key: string, value: any) => {
      setAccessories(key, value);
    },
    [setAccessories]
  );

  const updateState = React.useMemo(() => _updateState, [_updateState]);
  const { addToCart, cartState } = useAddCart();
  //REDUX STATE

  const handleAddToCart = React.useCallback(() => {
    // setBed({
    //   id: productData?.id,
    //   name: productData?.name,
    //   image: productData?.variants?.image,
    //   price: Number(productData?.variants?.price?.salePrice),
    //   size: size,
    // });
    addToCart({
      // bed: {
      //   id: productData?.id,
      //   name: productData?.name,
      //   image: productData?.variants?.image,
      //   price: Number(productData?.variants?.price?.salePrice),
      //   size: size,
      // },
      bed: productState.bed,
      accessories: productState.accessories,
    });

    console.log(productState);
    // router.push("/cart");
  }, [
    addToCart,
    productData?.id,
    productData?.name,
    productData?.variants?.image,
    productData?.variants?.price?.salePrice,
    productState,
    size,
  ]);

  // @ts-ignore ( IMAGE ARRAY )
  const carouselImages = [productData?.variants?.image, ...productData?.images];

  const onChangeAccessories = React.useCallback(
    (key: string, e: any) => {
      const values = JSON.parse(e.target.value);
      updateState(key, {
        name: values?.name?.label,
        value: values?.name?.value,
        price: Number(values?.price),
      });
    },
    [updateState]
  );

  console.log({ cartState });
  return (
    <div>
      <section className={css.mainproducttitle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{productData?.name}</h1>
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
          {/* LEFT */}
          <div className={`${css["left"]}`}>
            <div className={css["image-section"]}>
              <div className={css["product-image"]}>
                <img
                  className={css["image"]}
                  src={currentImage as string}
                  alt="Grey-linen"
                />
              </div>
              <ImageCarousel
                selected={(value: any) => setCurrentImage(value)}
                imagesArray={carouselImages}
              />
            </div>
            <Warranty />
          </div>
          {/* RIGHT */}
          <div className={css["right"]}>
            <div className={css["product-name"]}>
              <h1>{productData?.name}</h1>
            </div>
            <div className={css["trustpilot"]}>
              <a>
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
                <span>{productData?.variants?.price?.salePrice}</span>
              </p>
            </div>
            <div className={css["product-options"]}>
              {productData?.variants?.accessories?.color && (
                <Colors
                  colorArray={productData?.variants?.accessories?.color}
                  colorName={productState?.accessories.color?.name}
                  onPickColor={(value: any) =>
                    updateState("color", {
                      image: value?.image,
                      name: value?.name?.label,
                    })
                  }
                  activeColor={productState?.accessories.color as any}
                />
              )}
              <SelectOption
                dataArray={productData?.availabeSizes as any}
                label="Select Your Size"
                value={size}
                onChange={(e) => {
                  updateState("size", e.target.value);
                  setSize(e.target.value as any);
                }}
              />
              {productData?.variants?.accessories?.storage && (
                <SelectOption
                  type="accessories"
                  dataArray={productData?.variants?.accessories?.storage}
                  label="Select Your Storage"
                  onChange={(e) => onChangeAccessories("storage", e)}
                />
              )}
              {productData?.variants?.accessories?.feet && (
                <SelectOption
                  type="accessories"
                  dataArray={productData?.variants?.accessories?.feet as any}
                  label="Select Your Feet"
                  onChange={(e) => onChangeAccessories("feet", e)}
                />
              )}
              {productData?.variants?.accessories?.headboard && (
                <SelectOption
                  type="accessories"
                  dataArray={
                    productData?.variants?.accessories?.headboard as any
                  }
                  label="Select Your Headboard"
                  onChange={(e) => onChangeAccessories("headboard", e)}
                />
              )}
              {productData?.variants?.accessories?.mattress && (
                <SelectOption
                  type="accessories"
                  dataArray={
                    productData?.variants?.accessories?.mattress as any
                  }
                  label="Select Your Mattress"
                  onChange={(e) => onChangeAccessories("mattress", e)}
                />
              )}
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
// addToCart({
//   bed: {
//     id: productData?.id,
//     name: productData?.name,
//     image: productData?.variants?.image,
//     price: Number(productData?.variants?.price?.salePrice),
//     size: size,
//   },
//   accessories: {
//     color: productState?.accessories?.color,
//     storage: productState?.accessories?.storage,
//     feet: productState?.accessories?.feet,
//     headboard: productState?.accessories?.headboard,
//     mattress: productState?.accessories?.mattress,
//   },
//   quantity: productState?.quantity,
// });
