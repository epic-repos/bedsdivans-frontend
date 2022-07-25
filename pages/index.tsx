import NextSEO from "layout/nextseo";
import type { NextPage } from "next";
import Head from "next/head";
import Style from "styles/HomePage/home.module.scss";
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
              <div className={Style.bannerButton}>
                <button>
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
          
      <section className={Style.imgcontainer}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={Style.bigbed1}>
                <img src="/images/z.png" alt="img" /></div>
              <div className={Style.heading1}>
                <h1>There's No Place Like A Bed</h1>
                <p>Lord bless the person who invented beds! Choose from a wide variety to suit your needs and preferences.</p>
              </div>
            </div>
            <div className= "col-6">
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
                <img src="/images/u.png" alt="img" /></div>
              <div className={Style.heading2}>
                <h1>Secret To Good Sleep</h1>
                <p>Your mattress plays a major role iin one's sleep cycle. The right mattress will ensure you get a good night's sleep every night</p>
              </div>
            </div>
          </div>
        </div>
      </section>


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
                style={{ cursor: "pointer", padding: "0" }}
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
      </div>
    </div>
  );
};

export default Home;
