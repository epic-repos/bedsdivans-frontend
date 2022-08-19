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
import useAddCart from "store/hooks/useaddcart";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";

import productsPayload from "data/products";
import ColorIcon from "icons/color";

/**
 * NEW PRODUCT PAGE
 * @returns
 */
const NewProductPage: NextPageWithLayout = () => {
  const router = useRouter();

  // @ts-expect-error
  const dynamicData = productsPayload[router?.query?.id];

  console.log({ dynamicData });

  const { addToCart, cartState } = useAddCart();
  const [tabs, setTabs] = React.useState("BedSize");
  const { bedState } = useSelectBed();

  // const [currentBed, setCurrentBed] = React.useState<any>({});

  // React.useEffect(() => {
  //   const currentProduct = cartState.cartItems.find(
  //     (item) => Number(item.id) === Number(router.query.id)
  //   );
  //   setCurrentBed(currentProduct);
  //   // console.log({ currentBed });
  // }, [cartState]);

  const onTabSelect = React.useCallback(
    (value: string) => {
      setTabs(value);
    },
    [tabs]
  );

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

  const forCart = {
    id: "f1b18ae7e6e1fe44",
    name: "Product One",
    description: "Small description for product",
    categories: ["writing", "bestseller"],
    quantity: 1,
    price: 98.9,
    options: {
      image: bedState.bedImage,
      size: bedState.bedSize,
      color: bedState.bedColor,
      headBoard: bedState.bedHeadBoard,
      storage: bedState.bedStorage,
      feet: bedState.bedFeet,
      matters: bedState.bedMatters,
    },
  };

  return (
    <React.Fragment>
      <NextSEO title={`Dbz Beds`} />
      {/* Gufran  */}
      <div className={styles.imageContainer}>
        <img src={bedState.bedImage} alt="Bed Image" className={styles.image} />
        <div className={styles.container}>
          <h3 className={styles.productName}>{dynamicData?.name}</h3>
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
                title={tabsArray.find((data) => data.title === tabs)?.title}
                onClickNext={onClickNext}
              />
              {/* DYNAMIC TABS  */}
              <BedsTabs productsPayload={dynamicData} tabName={tabs} />
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.summary}>
              <div className={styles.priceitemsummary}>
                <div>
                  <h5>Total Price</h5>
                  <span>{bedState.bedPrice}</span>
                  {/* <span>£450.00</span> */}
                </div>
                <div className={styles.numberaddcard}>
                  <div>
                    <input
                      type="number"
                      value={cartState.cartTotalQuantity}
                      onChange={(e) => console.log(e.target.value)}
                      className={styles.numbertextarea}
                    />
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        addToCart(forCart);
                      }}
                      className={styles.addcart}
                    >
                      Add the cart {cartState.cartTotalQuantity}
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

const dataTata = {
  name: "",
  category: "",
  description: "",
  beds: [
    {
      size: {
        size: "",
        icon_url: "",
      },
      color: [{ colorname: "", colorimage: "" }],
      price: "",
      storage: [
        {
          price: "",
          icon_url: "",
          category: "",
        },
      ],
      headboard: [
        {
          price: "",
          icon_url: "",
          category: "",
        },
      ],
      mattress: [
        {
          price: "",
          icon_url: "",
          category: "",
        },
      ],
    },
  ],
};

// export async function getServerSideProps({ query }: GetServerSidePropsContext) {
//   const id = query.id;
//   const forbed = await axios.get(`http://localhost:5000/beds`);

//   // const response = await data.data.data;
//   console.log({ SIMPLE: forbed.data });
//   return {
//     props: { response: forbed.data },
//     // will be passed to the page component as props
//   };
// }
