import NextSEO from "layout/nextseo";
import type { NextPage } from "next";
import Head from "next/head";
import Style from "styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import DynamicTabs from "../components/tabs/index";
import HomeMattress from "../components/HomeMattress";

const Home: NextPage = () => {
  return (
    <div>
      <NextSEO title={"DBZBeds"} />

      <NextSEO title={"DBZBEDS"} />

      <div className={Style.swiper_wrapper}>
        <div className={`${Style.slider_height} d-flex`}>
          <div className="container  text-center">
            <div className={Style.bannerheadingmiddle}>
              <h1
                className="HeadingForM"
                style={{
                  fontSize: "85px",
                  color: "#ffffff",
                  textShadow: "2px 2px 4px #909090e0",
                }}
              >
                <strong>Divan Beds</strong>
              </h1>
              <p
                className="NextH"
                style={{
                  fontSize: "28px",
                  color: "#ffffff",
                  lineHeight: "1.1",
                  opacity: "0.8",
                }}
              >
                Save upto 60% with Divan Beds
              </p>
              <div>
                <button
                  className={Style.ShopMobile}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#f22222",
                    padding: "9px",
                    borderRadius: "42px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontSize: "18px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    fontWeight: "300",
                    letterSpacing: "0.5px",
                    marginTop: "50px !important",
                    marginBottom: "37px !important",
                    border: "none",
                  }}
                >
                  <b>SHOP NOW</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="award-section-destop">
        <div className={Style.banner_bottom_style}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={Style.banner_bottom_ineerbox}>
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
                        {" "}
                        <p> on orders over $100 </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={Style.banner_bottom_ineerbox}>
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
                        {" "}
                        <p> Divan Beds and Mattressess </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={Style.banner_bottom_ineerbox}>
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
                        {" "}
                        <p> Lolem ipsum quality </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className={Style.banner_bottom_ineerbox}>
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
                        {" "}
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
      <hr className={Style.banner_icons} />
      <div className="container">
        <div className="row" style={{ width: "83%", margin: "0 auto" }}>
          <div className="col-md-12 text-center" data-aos="fade-up">
            <div className={Style.section_title}>
              <h2 className={Style.colorfirst}>DBZBeds</h2>
            </div>
            <p className={Style.sub_title}>
              We’re one of the UK’s leading manufacturers of
              <span style={{ color: "#262884" }}> cheap divan beds</span> ,
              offering a rich selection of products in a variety of styles. At
              BedsDivans, we are committed to improving comfort and sleep
              quality without compromising style. We believe shopping for a bed,
              mattress, or set of
              <span style={{ color: "#262884" }}> rattan furniture</span> for
              your garden should be an enjoyable experience all the way through.
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up">
            <div className={Style.section_title}>
              <h2 className={Style.colorRed}>Featured Products</h2>
            </div>
          </div>
        </div>
      </div>

      {/* tabs start  */}
      <div className={Style.newtabs}>
        <DynamicTabs />
      </div>
      {/* tabs end  */}

      <div className="section">
        <div className="container-fluid">
          <div className="row">
            <div className={Style.size_box}>
              <div className={Style.single_box}>
                <a href="/divanbed/two-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-01.png"
                  />
                </a>

                <p className="text-center text-blue mt-2"> Single 2FT 6 </p>
              </div>

              <div className={Style.single_box}>
                <a href="/divanbed/three-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-02.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> Single(3FT) </p>
              </div>

              <div className={Style.single_box}>
                <a href="/divanbed/four-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-03.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">
                  {" "}
                  Small Double(4FT){" "}
                </p>
              </div>

              <div className={Style.single_box}>
                <a href="/divanbed/five-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-04.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> Double 4FT 6 </p>
              </div>

              <div className={Style.single_box}>
                <a href="/divanbed/five-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-05.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> King(5FT) </p>
              </div>

              <div className={Style.single_box}>
                <a href="/divanbed/six-feet-bed">
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-N-01.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> Super King(6FT) </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up">
            <div className={Style.section_title}>
              <h2 className={Style.colorsecond}>New Best Selling Bed</h2>
              <p className={Style.sub_title11}>
                We’re one of the UK’s leading manufacturers of cheap divan beds,
                offering a rich selection of products in a variety of styles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Style.bg_green} section`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div
                  className={`${Style.moreOffer} col-lg-6 col-md-6 col-sm-12 text-center text-md-left`}
                >
                  <h2>Want to get 60% off? Save the time and money?</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12 text-center">
                  <button className={Style.more}>More Offer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Style.explore_mattress} section`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center" data-aos="fade-up">
              <div className={Style.section_title}>
                <h2 className={Style.colorsecond}>
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
                className={`${Style.mattres_sectionb} col-12`}
                style={{ cursor: "pointer" }}
              >
                <Link href="/product/Mattressess">
                  <Image
                    className={Style.mattress_bannerone}
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
        <div className={`${Style.responsive_button} text-center`}>
          <button
            className={Style.ShopMobile}
            style={{
              color: "#ffffff",
              backgroundColor: "rgb(38, 40, 132)",
              borderRadius: "6px",
              fontSize: "15px",
              padding: "12px 20px",
              fontWeight: "400",
              letterSpacing: "0.5px",
              marginTop: "37px",
            }}
          >
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
            <button
              className={Style.ShopMobile}
              style={{
                color: "#ffffff",
                backgroundColor: "rgb(38, 40, 132)",
                borderRadius: "6px",
                fontSize: "15px",
                padding: "12px 20px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                marginTop: "0px",
              }}
            >
              <b>More Services</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
