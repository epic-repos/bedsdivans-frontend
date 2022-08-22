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
import router from "next/router";
import useSelectBed from "store/hooks/useselectbed";
import FeatureSlider from "components/home/slider";
import BottomTextContent from "components/home/text";
import HeroImageContainer from "components/home/hero";
import ImageContainer from "components/home/imagecontainer";
import CategoryContainer from "components/home/category";
import firstScreenProduct from "data/product-index";

const low = (str: string, separator: string) =>
  str.replaceAll(/\s+/g, separator).toLocaleLowerCase();

const Home: NextPageWithLayout = (props: any) => {
  // FOR
  const { setBed, setBedImage, bedState } = useSelectBed();
  const onClickProduct = React.useCallback(
    (item: any) => {
      const path = low(`/products/${item.heading}`, "-");
      setBed(item);
      setBedImage(item.imageUrl);
      router.push(path);
    },
    [setBed]
  );
  return (
    <div>
      <NextSEO title={"DBZBeds"} />
      <HeroImageContainer />
      <div className="award-section-destop">
        <div className={styles.banner_bottom_style}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.banner_bottom_ineerbox}>
                  <ul>
                    <li>
                      <Image
                        src="/assets/images/banner/Group594.svg"
                        width={60}
                        height={60}
                      />
                    </li>
                    <li>
                      <h6>Quick Shipping</h6>
                      <span>
                        <p> on orders over $100 </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.banner_bottom_ineerbox}>
                  <ul>
                    <li>
                      <Image
                        src="/assets/images/banner/Group593.png"
                        width={60}
                        height={60}
                      />
                    </li>
                    <li>
                      <h6>Made in UK</h6>
                      <span>
                        <p> Divan Beds and Mattressess </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.banner_bottom_ineerbox}>
                  <ul>
                    <li>
                      <Image
                        src="/assets/images/banner/Group592.svg"
                        width={60}
                        height={60}
                      />
                    </li>
                    <li>
                      <h6>Best Quality</h6>
                      <span>
                        <p> Lolem ipsum quality </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.banner_bottom_ineerbox}>
                  <ul>
                    <li>
                      <Image
                        src="/assets/images/banner/Group591.svg"
                        width={60}
                        height={60}
                      />
                    </li>
                    <li>
                      <h6>Interest Free Credit</h6>
                      <span>
                        <p> Interest Free Credit </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.banner_icons} />
      <ImageContainer
        direction="left"
        heading={`There's No Place Like A Bed`}
        description={` Lord bless the person who invented beds! Choose from a wide variety to suit your needs and preferences.`}
        coverImage="/images/z.png"
        items={[
          {
            heading: `Kings size beds`,
            imageUrl: `/images/x.png`,
          },
          {
            heading: `Single Beds`,
            imageUrl: `/images/c.png`,
          },
          {
            heading: `Queen size beds`,
            imageUrl: `/images/o.png`,
          },
          {
            heading: `Storage beds`,
            imageUrl: `/images/v.png`,
          },
        ]}
      />
      <section className={styles.imgcontainer2}>
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
              <div className={styles.bigbed2}>
                <img src="/images/u.png" alt="img" />
              </div>
              <div className={styles.heading2}>
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
      </section>

      {/* CATEGORY CONTAINER */}

      <CategoryContainer />

      <section className={styles.box3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.perfectbed}>
                <p>
                  <strong>Why wait for the perfect bed?</strong>Spread the cost
                  of your order with interest free credit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEASON PRODUCTS */}
      <section className={styles.productsimages}>
        <div className="container">
          <div className={styles.mainh2}>
            <h2>Best-seller of the season</h2>
          </div>
          <div className="row">
            {firstScreenProduct.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-3"
                  onClick={() => onClickProduct(item)}
                >
                  <div className={styles.box1}>
                    <div className={styles.productimage}>
                      <img
                        src={item.imageUrl}
                        alt="img"
                        width="600"
                        height="200"
                        style={{ objectFit: "cover" }}
                        // objectFit="cover"
                      />
                      <ColorContainer />
                    </div>
                    <h2 className={styles.productname}>{item.heading}</h2>
                    <div className={styles.trustpilot}>
                      <img src="/image/tru.png" alt="img" />
                    </div>
                    <p className={styles.price}>
                      {"£" + item.price}
                      <del>£800.00</del>
                      <span>10%off</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLIDER COMPONENT */}
      <section className={styles.productslider}>
        <div className="container">
          <div className="row">
            <FeatureSlider />
          </div>
        </div>
      </section>

      <section className={styles.reviewtable}>
        <div className={styles.pride}>
          <h2>Their words, our pride</h2>
          <p>DBZ words of our happy customers</p>
        </div>
      </section>

      <div className={`${styles.explore_mattress} section`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center" data-aos="fade-up">
              <div className={styles.section_title}>
                <h2 className={styles.colorsecond}>
                  Explore Our Mattresses Set
                </h2>
                <p className="">
                  We’re one of the UK’s leading manufacturers of cheap divan
                  beds, offering a rich selection of <br />
                  products in a variety of styles.
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div
                className={`${styles.mattres_sectionb} col-12`}
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
            <div className="row">
              <div className="col-6 col-xs-12" style={{ cursor: "pointer" }}>
                <Link href="/mattressess/Mattressessproduct?title=Pillow%20Top%201500%20Pocket%20Medium%20firm%20Mattress%20Free%20UK%20Delivery">
                  <Image
                    src="/assets/images/mattressbanner/Group 696@2x.png"
                    width={700}
                    height={700}
                  />
                </Link>
              </div>
              <div className="col-6 col-xs-12" style={{ cursor: "pointer" }}>
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
      {/*  */}
      <BottomTextContent />
    </div>
  );
};

export default Home;

Home.getLayout = PerPageLayout;
export async function getServerSideProps(context: any) {
  const { req } = context;
  const size = req?.__NEXT_INIT_QUERY?.size;
  let sizes = "";

  size ? (sizes = size) : (sizes = "2FT 6");
  const data = await axios.get(
    `${process.env.BASE_URL}/api/products/homepageApi`
    //  {
    //   method: "size",
    //   value: sizes,
    // }
  );
  const data1 = await axios.get(
    //"https://staggingx.bedsdivans.co.uk/api/headboard",
    `${process.env.BASE_URL}/api/headboard/bestproducts`
    // {
    //   method: "size",
    //   value: sizes,
    // }
  );
  const data2 = await axios.get(
    //"https://staggingx.bedsdivans.co.uk/api/gardenfurniture",
    `${process.env.BASE_URL}/api/gardenfurniture/bestproducts`
    // {
    //   method: "size",
    //   value: sizes,
    // }
  );
  const data3 = await axios.get(
    // "https://staggingx.bedsdivans.co.uk/api/mattress",
    `${process.env.BASE_URL}/api/mattress/bestproducts`
    // {
    //   method: "size",
    //   value: sizes,
    // }
  );

  const response = await data.data.data;

  const response1 = await data1.data.data;

  const response2 = await data2.data.data;

  const response3 = await data3.data.data;

  // const responseX = await axios.get(`${process.env.API_URL}/beds`);

  return {
    props: { response, response1, response2, response3 },
    // will be passed to the page component as props
  };
}

const ColorContainer = () => {
  return (
    <ul>
      <li>
        <img src="bedscolor/1.jpg" alt="img" width="50" height="50" />
      </li>
      <li>
        <img src="bedscolor/2.jpg" alt="img" width="50" height="50" />
      </li>
    </ul>
  );
};

{
  /* <div className={`${Style.responsive_button} text-center`}>
          <button className={Style.viewAllProduct}>
            <b>VIEW ALL PRODUCT</b>
          </button>
        </div>
      </div>
      <div className={`${Style.bg_brown} section`}>
        <div className="container">
          <div className="row">
            <div
              className={`${Style.section_title} col-md-12`}
              data-aos="fade-up"
            >
              <div className="text-center">
                <h2 className={Style.colorsecond}>
                  DISCOVER THE BENEFITS OF SHOPPING ONLINE AT BEDSDIVANS
                </h2>
                <p className="mt-4">
                  When looking for a new bed why not try the new designed divan
                  bed. It is affordable and looks great. At bedsdivans we spent
                  years in improving our wide selection of beds and we can
                  assure you will love our latest selection of divan beds. At
                  Bedsdivans we aim to work around your needs whether it comes
                  to short notice delivery dates or the slightest adjustment to
                  your bed we are always here to help you get the bed right for
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className={`${Style.discover_button} text-center`}>
            <button className={Style.viewAllProduct}>
              <b>More Services</b>
            </button>
          </div>
        </div>
      </div> */
}

{
  /* {props.response.map((item: any, index: any) => {
              return (
              
              );
            })} */
}

{
  /* <div className="col-3">
              <div className={Style.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={Style.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={Style.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={Style.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className={Style.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={Style.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={Style.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={Style.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className={Style.box1}>
                <img
                  src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                  alt="img"
                  width={258}
                  height="210"
                />
                <h2 className={Style.productname}>
                  Presley Fabric Ottoman Bed
                </h2>
                <div className={Style.trustpilot}>
                  <img src="/image/tru.png" alt="img" />
                </div>
                <p className={Style.price}>
                  £600.00<del>£800.00</del>
                  <span>10%off</span>
                </p>
              </div>
            </div> */
}
