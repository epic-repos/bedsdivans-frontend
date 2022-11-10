/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import NextSEO from "layout/nextseo";
import styles from "styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React from "react";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import BottomTextContent from "components/home/text";
import FeatureSlider from "components/home/slider";
import ProductListing from "components/home/products";
import Title from "components/title";
import TitleWIthBackground from "components/title/grey";
import ProductsGrid from "components/home/grid";
import QuickInfo from "components/home/info";
import HeroImageContainer from "components/home/hero";
import CategoryContainer from "components/home/category";
import { dehydrate, QueryClient } from "react-query";
import { useFetchAllBedsWithImage } from "network-requests/queries";

const Home: NextPageWithLayout = () => {
    const { data } = useFetchAllBedsWithImage();

    return (
        <React.Fragment>
            <NextSEO title={"DBZBeds | Home"} />
            <HeroImageContainer />
            <QuickInfo />
            <hr className={styles.banner_icons} />
            <ProductsGrid
                left={{
                    heading: `There's No Place Like A Bed`,
                    description: `Lord bless the person who invented beds! Choose from a wide variety to suit your needs and preferences.`,
                    image: "/images/z.png",
                }}
                right={{
                    images: gridImages.listOne,
                }}
                swipe={false}
            />
            <ProductsGrid
                left={{
                    heading: `Secret To Good Sleep`,
                    description: `Your mattress plays a major role iin one's sleep cycle. The right mattress will ensure you get a good night's sleep every night`,
                    image: "/images/z.png",
                }}
                right={{
                    images: gridImages.listTwo,
                }}
                swipe={true}
            />
            <Title
                title="Our Quality Products"
                description="Get up Refresh Every day"
                style={{
                    background: "#f5f5f5",
                }}
            />
            <CategoryContainer />
            {/* <section className={styles.qualityproducts}>
        <div className="container">
          <div className="row">
            {products.map((data, index) => {
              return (
                <div key={index} className="col-3">
                  <div className={styles.itemCard}>
                    <img src={data.imageUrl} alt="image" />
                    <h3>Beds</h3>
                    <p>
                      Our range of beds come in single, double, king and super
                      king sizes are crafted with superior memory foam that
                      cradles your head and keeps your head and neck aligned
                      even while you sleep on your side and prevents the head
                      from sinking.
                    </p>
                    <button>Buy now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

            <section className={styles.box3}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.perfectbed}>
                                <p>
                                    <strong>
                                        Why wait for the perfect bed?
                                    </strong>
                                    Spread the cost of your order with interest
                                    free credit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Title
                title="Best-seller of the season"
                description="Get up Refresh Every day"
            />
            <ProductListing productList={data?.pages?.["0"]?.data || []} />
            <Title title="Featured" />
            <FeatureSlider />
            <TitleWIthBackground
                title="Their words, our pride"
                description="DBZ words of our happy customers"
            />

            <div className={`${styles["explore-mattress"]} section`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className={styles["section-title"]}>
                                <h2
                                    className={`${styles["heading"]}  ${styles["blue-color"]}`}
                                >
                                    Explore Our Mattresses Set
                                </h2>
                                <p className={styles["description"]}>
                                    We’re one of the UK’s leading manufacturers
                                    of cheap divan beds, offering a rich
                                    selection of <br />
                                    products in a variety of styles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div
                                className={`${styles["mattres_sectionb"]} col-12`}
                                style={{ cursor: "pointer", padding: "0" }}
                            >
                                <Link href="/product/Mattressess">
                                    <Image
                                        className={styles.mattress_bannerone}
                                        src="/assets/images/mattressbanner/Group 693@2x.png"
                                        width={1700}
                                        height={400}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles["fluid-row"]}>
                            <div
                                className="col-6 col-xs-12"
                                style={{ cursor: "pointer" }}
                            >
                                <Link href="/mattressess/Mattressessproduct?title=Pillow%20Top%201500%20Pocket%20Medium%20firm%20Mattress%20Free%20UK%20Delivery">
                                    <Image
                                        src="/assets/images/mattressbanner/Group 696@2x.png"
                                        width={700}
                                        height={700}
                                    />
                                </Link>
                            </div>
                            <div
                                className="col-6 col-xs-12"
                                style={{ cursor: "pointer" }}
                            >
                                <Link href="/mattressess/Mattressessproduct?title=Orthopedic%20Foam%20and%20Spring%20Mattress%20Medium%20Firmness">
                                    <Image
                                        src="/assets/images/mattressbanner/Group 694@2x.png"
                                        width={600}
                                        height={295}
                                    />
                                </Link>
                                <div className="" style={{ cursor: "pointer" }}>
                                    <Link href="/mattressess/Mattressessproduct?title=1500%20Pocket%20Tinsel%20Medium%20Firmness%20Mattress%20Free%20UK%20Delivery">
                                        <Image
                                            src="/assets/images/mattressbanner/Group 695@2x.png"
                                            width={600}
                                            height={295}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomTextContent />
        </React.Fragment>
    );
};

export default Home;

Home.getLayout = PerPageLayout;

export const getServerSideProps = async (context: any) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["beds-image"],
        async () =>
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/beds/get-all-beds-with-base-image`,
                {
                    credentials: "same-origin",
                    headers: {
                        Cookie: context.req.headers.cookie,
                    },
                }
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
    return { props: { dehydratedState: dehydrate(queryClient) } };
};

const gridImages = {
    listOne: [
        {
            heading: "Kings size beds",
            image: "/images/x.png",
        },
        {
            heading: "Single Beds",
            image: "/images/c.png",
        },
        {
            heading: "Queen size beds",
            image: "/images/o.png",
        },
        {
            heading: "Storage beds",
            image: "/images/v.png",
        },
    ],
    listTwo: [
        {
            heading: "Orthopedic mattress",
            image: "/images/b.png",
        },
        {
            heading: "Tinsel top matrress",
            image: "/images/m.png",
        },
        {
            heading: "Memory foam mattress",
            image: "/images/n.png",
        },
        {
            heading: "Pillow top mattress",
            image: "/images/g.png",
        },
    ],
};
{
    /* <ProductsGrid swipe={true} /> */
}
{
    /* <section className={Style.imgcontainer}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={Style.bigbed1}>
                <img src="/images/z.png" alt="img" />
              </div>
              <div className={Style.heading1}>
                <h1>There's No Place Like A Bed</h1>
                <p>
                  Lord bless the person who invented beds! Choose from a wide
                  variety to suit your needs and preferences.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <img src="/images/x.png" alt="img" />
                  <h2>Kings size beds</h2>
                </div>
                <div className="col-6">
                  <img src="/images/c.png" alt="img" />
                  <h2>Single Beds</h2>
                </div>
                <div className="col-6">
                  <img src="/images/o.png" alt="img" />
                  <h2>Queen size beds</h2>
                </div>
                <div className="col-6">
                  <img src="/images/v.png" alt="img" />
                  <h2>Storage beds</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.imgcontainer2}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6 ">
                  <img src="/images/b.png" alt="img" />
                  <h2>Orthopedic mattress</h2>
                </div>
                <div className="col-6">
                  <img src="/images/m.png" alt="img" />
                  <h2>Tinsel top matrress</h2>
                </div>
                <div className="col-6">
                  <img src="/images/n.png" alt="img" />
                  <h2>Memory foam mattress</h2>
                </div>
                <div className="col-6">
                  <img src="/images/g.png" alt="img" />
                  <h2>Pillow top mattress</h2>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={Style.bigbed2}>
                <img src="/images/u.png" alt="img" />
              </div>
              <div className={Style.heading2}>
                <h1>Secret To Good Sleep</h1>
                <p>
                  Your mattress plays a major role iin one's sleep cycle. The
                  right mattress will ensure you get a good night's sleep every
                  night
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
