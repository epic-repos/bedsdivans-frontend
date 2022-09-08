/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import NextSEO from "layout/nextseo";
import Style from "styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import React from "react";
import { NextPageWithLayout } from "typings/layout";
import PerPageLayout from "layout/perpage";
import { randomBytes } from "crypto";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = ({ newData }: any) => {
  console.log({ SIMPLE: newData.data[0]?.variants });
  const router = useRouter();

  const settings = {
    dots: true,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <NextSEO title={"DBZBeds"} />
      <div className={Style.swiper_wrapper}>
        <div className={`${Style.slider_height} d-flex`}>
          <div className="container  text-center">
            <div className={Style.bannerheadingmiddle}>
              <h1 className="HeadingForM">
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
      </section>

      <section className={Style.qualityproducts}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={Style.qualityheading}>
                <h2>Our Quality Products</h2>
                <p>Get up Refresh Every day</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((data, index) => {
              return (
                <div key={index} className="col-3">
                  <div className={Style.box2}>
                    <img src={data.imageUrl} alt="image" />
                    <h3>Beds</h3>
                    <p>
                      Our range of beds come in single, double, king and super
                      king sizes are crafted with superior memory foam that
                      cradles your head and keeps your head and neck aligned
                      even while you sleep on your side and prevents the head
                      from sinking.
                    </p>
                    <button
                    // onClick={() => router.push(`/products/${data.id}`)}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={Style.box3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={Style.perfectbed}>
                <p>
                  <strong>Why wait for the perfect bed?</strong>Spread the cost
                  of your order with interest free credit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.productsimages}>
        <div className="container">
          <div className={Style.mainh2}>
            <h2>Best-seller of the season</h2>
          </div>
          <div className="row">
            {products.map((item, index) => {
              return (
                <div
                  className="col-3"
                  key={index}
                  onClick={() =>
                    router.push(
                      `/products/${item.heading}`
                        .replaceAll(" ", "-")
                        .toLowerCase()
                    )
                  }
                >
                  <div className={Style.box1}>
                    <div className={Style.productimage}>
                      <Image
                        src={item.imageUrl}
                        alt="img"
                        width="600"
                        height="500"
                      />
                      <ul>
                        <li>
                          <img
                            src="bedscolor/1.jpg"
                            alt="img"
                            width="50"
                            height="50"
                          />
                        </li>
                        <li>
                          <img
                            src="bedscolor/2.jpg"
                            alt="img"
                            width="50"
                            height="50"
                          />
                        </li>
                      </ul>
                    </div>
                    <h2 className={Style.productname}>{item.heading}</h2>
                    <div className={Style.trustpilot}>
                      <img src="/image/tru.png" alt="img" />
                    </div>
                    <p className={Style.price}>
                      {"£" + item.price}
                      <del>£800.00</del>
                      <span>10%off</span>
                    </p>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              );
            })}

            {/* {props.response.map((item: any, index: any) => {
              return (
              
              );
            })} */}

            {/* <div className="col-3">
              <div className={Style.box1}>
                <img
                  src="
Zoom https---aspirestore.co.uk-49144-home_default-presley-fabric-ottoman-bed.jpg
https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg
 "
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
                  src="
Zoom https---aspirestore.co.uk-49144-home_default-presley-fabric-ottoman-bed.jpg
https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg
 "
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
                  src="
Zoom https---aspirestore.co.uk-49144-home_default-presley-fabric-ottoman-bed.jpg
https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg
 "
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
            </div> */}
          </div>
        </div>
      </section>

      {/* <-----------------------------------------------------------------> */}

      <section className={Style.productslider}>
        <div className="container">
          <div className="row">
            <div className={Style.featuredslider}>
              <h2>Featured</h2>
              <Slider {...settings}>
                <div className={Style.slideimg}>
                  <img src="/image/2.jpg" alt="Pink" />
                  <p>
                    For bedrooms big and small, the guide explains our different
                    types of storage beds
                  </p>
                  <div className={Style.guidestrip}>
                    <p>A Guide to Storage beds</p>
                  </div>
                </div>
                <div className={Style.slideimg}>
                  <img src="/image/1.jpg" alt="Pink" />
                  <p>Discover measurement for all UK and Euro beds mattress</p>
                  <div className={Style.guidestrip2}>
                    <p>A Guide to mattress sizes</p>
                  </div>
                </div>
                <div className={Style.slideimg}>
                  <img src="/image/3.jpg" alt="Pink" />
                  <p>
                    We want you to get a great nights sleep. Let us help you
                    choose the perfect bed and mattress.
                  </p>
                  <div className={Style.guidestrip3}>
                    <p>A Guide to divan beds</p>
                  </div>
                </div>
                <div className={Style.slideimg}>
                  <img src="/image/4.jpg" alt="Pink" />
                  <p>
                    Helping you find the perfect bed, only available at Dream
                  </p>
                  <div className={Style.guidestrip4}>
                    <p>Sleepmatch</p>
                  </div>
                </div>
                <div className={Style.slideimg}>
                  <img src="/image/5.jpg" alt="Pink" />
                  <p>
                    Free delivered on all orders, including our super snuggly
                    range of beedings
                  </p>
                  <div className={Style.guidestrip5}>
                    <p>Comfort delivered to your door</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.reviewtable}>
        <div className={Style.pride}>
          <h2>Their words, our pride</h2>
          <p>DBZ words of our happy customers</p>
        </div>
      </section>

      {/* <-----------------------api fetch------------------------> */}

      <section></section>

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
        {/* <div className={`${Style.responsive_button} text-center`}>
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
      </div> */}
      </div>
      <section className={Style.text}>
        <div className="container">
          <div className="row">
            <h2>Buy Bed Online At Best Price in India </h2>
            <p>
              Your home is a personal sanctuary, and your bed is your ultimate
              relaxation place to lie down and rest after a hard days toil. It
              is one of the most essential and inevitable requirements of any
              human being because the quality of sleep that you get depends
              largely on how comfortable and cosy your bed is.
            </p>
            <p>
              {" "}
              But, you do not spend on a bed now and then. It is an investment
              that gives you returns for a long period in the form of relaxation
              and rejuvenation of your body every time you retire on it for a
              relaxed nights sleep. It forms an integral part of your everyday
              living. Hence, you need to be extremely cautious and vigilant
              before buying a bed for yourself.
            </p>
            <p>
              {" "}
              Various underlying factors govern your choice of bed in every
              aspect, be it the material, size or even the quality of a simple
              bed design that you invest in. With a plethora of options
              available on multiple online sites these days, choosing the right
              bed as per your requirement and specification may seem a difficult
              task. Here is a quick guide to answer all your queries about
              buying a designer bed for a restful and comfortable sleep.
            </p>
            <h2>Things to Consider Before Buying a Bed</h2>
            <p>
              You want your bed to be just perfect, something that gives you
              optimum satisfaction and takes complete care of your relaxed
              mornings by imparting good sleep quality to you every night. It
              involves a good amount of investment too. Hence, you need to be
              precautious about various things before finalising a bed design
              for your room.
            </p>
            <h2>The Purpose</h2>
            <p>
              What bed you choose depends largely on what purpose you want to
              put it to. For example, a single bed design would solve your
              purpose if you live alone. Again, if you have two kids or twins,
              then a bunker bed or a folding bed would also care for the need
              and save a lot of space in the kids bedroom.
            </p>
            <h2>Space Availability</h2>
            <p>
              If you have a small house or smaller rooms and like to be
              organised, you should choose beds with storage spaces. Box-bed
              designs, pull-out drawers installed within double beds, or even
              single beds, and hydraulic bed units can save a lot of space and
              provide extra storage facilities for you to store your essentials
              and keep your room neat and organised at all times.
            </p>
            <h2>Size of Bedframe</h2>
            <p>
              Your bed frame design should not be too large or too small as per
              the space availability in your master bedroom. Also, it should
              coincide with your sleep comforts. If you want a wider space, then
              a king-size bed is what you need. But if you love to sleep in a
              composed posture, then a queen size bed is sufficient.
            </p>
            <h2>Quality of Material</h2>
            <p>
              You want a bed that has a longer lifespan. This would depend upon
              the quality of the material that you choose. For example, a wooden
              bed design promises better longevity, good durability and
              sturdiness to stay.
            </p>
            <h2>Pay Attention to Style</h2>
            <p>
              Your bed design should synchronise with the existing decor theme
              of your room. Also, your bed reflects your personality and
              personal choice; hence it should be an aesthetically appealing and
              comfortable bed at the same time.
            </p>
            <h2>Budget</h2>
            <p>
              A lot depends upon how much you want to spend on a bed. Your
              purchasing decision would be highly affected by the budget that
              you set aside for it.
            </p>
            <h2>Types of Beds and Their Utility</h2>
            <p>
              Depending on usage, there are different varieties of beds that you
              can select from.
            </p>
            <div className={Style.nospace}>
              <h2>Single Beds</h2>
              <p>These are perfect for bachelors and students.</p>
              <p> A single bed comes with storage spaces as well.</p>
              <p> Also known as twin beds, they are 75 long and 39 wide.</p>
              <h2>Double Beds</h2>
              <p>Also known as full-sized beds, their size is 85 X 54.</p>
              <p>
                The double bed design is most convenient for college students,
                hotels, and loft beds.
              </p>
              <p>
                {" "}
                They can be made with storage space to keep extra bedding or
                other essentials.
              </p>
              <h2>Queen Size Bed</h2>
              <p>The ideal size of these beds is 80x60.</p>
              <p> These beds are used by couples, teens, and young adults.</p>
              <p>
                {" "}
                The size is perfect for a guest room, hotel room and bachelors
                room.
              </p>
              <h2>King Size Bed</h2>
              <p>A king-size bed comes with dimensions of 80 X 76.</p>
              <p>It is a perfect size for married couples with a small kid.</p>
              <p>
                King bed size can have huge storage spaces to stalk things
                neatly and properly.
              </p>
              <p> Explore Varieties in Bed Designs and Styles</p>
              <h2>Poster Beds</h2>
              <p>
                These beds have four columns that add charisma and beauty to
                your master bedroom design. It makes you sleep in royalty, like
                a king. They are mostly made of wood which adds durability and
                longevity to them. They come with storage spaces too.
              </p>
            </div>
            <h2>Foldable or Trundle Beds</h2>
            <p>
              These beds can be folded and put to other functionalities during
              the daytime. It can be pulled out like a secret chamber at night
              and add an appealing look to the overall space.
            </p>
            <h2>Bunk Beds</h2>
            <p>
              Space constraints can be dealt with in the best manner by using
              bunk beds to accommodate two adults in a single bed space room.
              Two single beds are placed, one on top of the other where two
              children or two adults can sleep comfortably.
            </p>
            <h2>Upholstered Beds</h2>
            <p>
              These beds come with a luxurious fabric covering over their wooden
              parts and provide added comfort when resting or watching TV or
              simply taking a backrest to relax your body without dozing off to
              sleep. They add an extra element of appeal and aesthetics to the
              overall interiors of the room.
            </p>
            <h2>Different Materials Used for Making Designer Beds Wood</h2>
            <p>
              A wide range of wooden bed designs makes beds of all sizes and
              varieties. This includes particleboard, Sheesham wood beds, teak,
              acacia, mango, rubber, solid, and engineered wood. Wooden beds can
              be designed most traditionally or framed in a contemporary design,
              too, as per the specification and liking of the user.
            </p>
            <h2>Fabric</h2>
            <p>
              Leather and fabric are used to create upholstered beds, a true
              combination of comfort and style. These beds are best for a more
              contemporary and modern look.
            </p>
            <h2>Where to Shop for Designer Beds?</h2>
            <p>
              If you are planning to buy a bed for yourself, you can easily get
              the best deals, designs and varieties on Pepperfry right from the
              comforts of your home. Pepperfry is a one-stop destination with
              the widest and latest collection of various beds, in every
              material, design, and style, for you to choose from. From wooden
              to metal and upholstered beds, single, double, and bunk beds,
              storage, foldable to trundle beds, Pepperfry has everything you
              can think of when it comes to the different categories and styles
              of designer beds.
            </p>
            <h2>
              What makes dbz a preferred choice for furniture lovers all across
              the country is that:
            </h2>
            <p>
              It has the widest and latest collection that boasts of
              traditional, contemporary and modern furniture, all under one
              roof. It offers the most competitive and affordable prices but
              does not compromise on its quality and commitment. With a single
              click on your smart devices, you can select the best available
              choice of beds without having to hop around from one shop to
              another physically.
            </p>
            <h2>
              Special discounts and offers make shopping a tempting deal for
              every buyer.
            </h2>
            <p>
              Cash on delivery, easy return options, and warranty on its
              products make Pepperfry the star of the show amongst furniture
              portals in India. There are special offers during festivities, and
              sales on different furniture range from time to time, proving
              extremely valuable and worth the spend. Pepperfry offers free
              delivery to most of the pin codes in India and multiple payment
              options, along with no-cost EMI too. Apart from furniture, you can
              even shop for other related accessories like mattresses, pillows,
              bedsheets, lights, decor items, etc., all under one umbrella, on
              Pepperfry. This eases the pains of hunting for related items on
              multiple websites and portals. With such a sea of advantages,
              Pepperfry is undoubtedly the best bet when you have to buy a bed,
              or any other piece of furniture, for your dream house. Also, with
              the spread of the pandemic, the safety and convenience of online
              shopping for all your necessities is like a saviour, and Pepperfry
              is an add on to the list.
            </p>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className={Style.nospace2}>
              <h3>What Is A Queen Size Bed?</h3>
              <p>
                A bed that is smaller than a king-size but larger than a double
                bed is a queen-size bed. Queen size beds are ideal for
                comfortable sleeping of two people.
              </p>
              <h3>Which Wood Is Best For Bed?</h3>
              <p>
                Any hardwood such as birch, cherry, ebony, mahogany, maple,
                teak, oak, and rosewood is best for making beds.
              </p>
              <h3>What Is The Normal Size Of A Double Bed?</h3>
              <p>
                The normal size of a double bed is around 54 x 74 inches (137 x
                187 cm).
              </p>
              <h3>
                What Is The Difference Between A Double Bed And A Queen Size
                Bed?
              </h3>
              <p>
                A queen-size bed is 6 inches wider than a double bed and is
                ideal for a family of two. A double bed is spacious enough for a
                single person; however, it can be a little shorter and more
                uncomfortable for two people.
              </p>
              <h3>Which is the best material for a bed?</h3>
              <p>
                Beds made of hardwood like maple, ebony, cherry, mahogany, oak
                and rosewood are good for making beds
              </p>
            </div>
          </div>
        </div>
      </section>
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
  const { data: newData } = await axios.get(
    // "https://staggingx.bedsdivans.co.uk/api/mattress",
    `http://localhost:5000/beds/`
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
    props: { response, response1, response2, response3, newData },
    // will be passed to the page component as props
  };
}

const products = [
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Grey Linen Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/greylinen.png`,
    description: `  Our range of beds come in single, double, king and super
                      king sizes are crafted with superior memory foam that
                      cradles your head and keeps your head and neck aligned
                      even while you sleep on your side and prevents the head
                      from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Blue Plush Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blueplush.png`,
    description: `  Memory foam Mattress topper provides an additional cushioning
                  to your regular memory foam mattress. The topper is made from
                  one inch gel foam which is to be placed above the memory foam
                  mattress.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Black Crushed Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blackcrushed.png`,
    description: `  Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory foam that cradles your
                  head and keeps your head and neck aligned even while you sleep
                  on your side and prevents the head from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `Cream Chanille Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/creamchenille.png`,
    description: ` Our range of beds come in single, double, king and super king
                  sizes are crafted with superior memory foam that cradles your
                  head and keeps your head and neck aligned even while you sleep
                  on your side and prevents the head from sinking.`,
  },
];
