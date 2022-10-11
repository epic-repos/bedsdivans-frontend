/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextSEO from "layout/nextseo";
import styles from "styles/header.module.scss";
import PerPageLayout from "layout/perpage";
import { NextPageWithLayout } from "typings/layout";

const DivanBeds: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <NextSEO title={"DBZBEDS"} />
        <section className={styles.mydiv}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.headingh1}>Beds</h1>
                <p className={styles.paragraphp}>
                  Relax and unwind in comfort with our high-quality beds. From
                  natural materials to luxe velvet, we have a fantastic
                  collection of bespoke ottomans and divans handcrafted in
                  Yorkshire with your sleep in mind. Our handcrafted ranges are
                  available in a wide selection of fabrics, and we also have a
                  build your bed tool offering you the opportunity to design the
                  bed of your dreams.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bannersection}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.rightbed}>
                  <h1 className={styles.rightbedheading}>
                    Find the right bed for you
                  </h1>
                </div>
              </div>
              <div className="col-9">
                <div className={styles.imgae}>
                  <img
                    src="https://aspirestore.co.uk/img/cms/Categories/Aspire-store-beds-banner.jpg"
                    alt="image"
                    width={997}
                    height="469"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shopsize">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.sizeh1}>Shop by size</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon}>
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/a.jpg" alt="img" />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/b.jpg" alt="img" />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/c.jpg" alt="img" />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/d.jpg" alt="img" />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img src="/image/e.jpg" alt="img" />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="shopsize">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className={styles.sizeh1}>Shop by size</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bedicon}>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>3'0 Single</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>4'0 Small Double </p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>4'6 Double</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>5'0 King</p>
                </div>
              </div>
              <div className="col-2">
                <div className={styles.bedbox}>
                  <img
                    src="https://aspirestore.co.uk/c/14-category_thumb/6-0-super-king.jpg"
                    alt="img"
                  />
                  <p className={styles.parap}>6'0 Super King</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.beddropdown}>
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <ul className={styles.items}>
                  <li className={styles.showingitems}>
                    <p className={styles.parashowing}>
                      Showing 1-21 of 21 item(s)
                    </p>
                  </li>
                  <li className={styles.selectrelevance}>
                    <select
                      name="filter"
                      id="filter"
                      className={styles.selectoption}
                    >
                      <option value="Relevance">Relevance</option>
                      <option value="New products first">
                        New products first
                      </option>
                      <option value="Name, A to Z ">Name, A to Z</option>
                      <option value="Name, Z to  A ">Name, Z to A </option>
                      <option value="Price, low to high ">
                        Price, low to high
                      </option>
                      <option value="In stock ">In stock </option>
                      <option value="Random ">Random </option>
                    </select>
                  </li>
                  <li className={styles.selectnumber}>
                    <select
                      name="quantity"
                      id="quantity"
                      className={styles.selectoption}
                    >
                      <option value="21">21</option>
                      <option value="12 ">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                      <option value="Show all ">Show all </option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              {/* {props.response.map((item: any, index: any) => {
                return (
                  <div className="col-3" key={index}>
                    <div className={styles.box1}>
                      <img
                        src={
                          item?.images[0]?.color1.base_url
                            ? item?.images[0]?.color1.base_url
                            : "/"
                        }
                        alt="img"
                        width={258}
                        height="210"
                      />
                      <h2 className={styles.productname}>
                        {item.product_name}
                      </h2>
                      <div className={styles.trustpilot}>
                        <img src="/image/tru.png" alt="img" />
                      </div>
                      <p className={styles.price}>{item.price}</p>
                    </div>
                  </div>
                );
              })} */}
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49826-home_default/garland-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Garland Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49144-home_default/presley-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Presley Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49308-home_default/grant-upholstered-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Grant Upholstered Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£675.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/26322-home_default/kelly-upholstered-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Kelly Upholstered Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/48980-home_default/caine-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Caine Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£650.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/26404-home_default/monroe-upholstered-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Monroe Upholstered Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£650.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/25912-home_default/sinatra-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Sinatra Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Hepburn Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£600.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Pacific Solid Wood White Bed Frame - Single to Super King
                    Sizes
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£110.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Solid Wood White Bed Frame - Single to Super King Sizes
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£110.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Footstool Sofa Bed - Foldaway Single Guest Bed with Mattress
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£229.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Side Opening Storage Ottoman Bed Available in Grey Linen,
                    Steel Plush Velvet or Silver...
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£370.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Storage Ottoman Bed Available in Grey, Black or Natural
                    Linen Fabrics
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£325.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Grey Velvet Scroll Top Chesterfield Ottoman Storage Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£525.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Laurence Llewelyn-Bowen Luna Velvet Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£545.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£545.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£549.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£549.00</p>
                </div>
              </div>
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Catherine Lansfield Boutique Divan Bed Set
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£210.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productsimages}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className={styles.box1}>
                  <img
                    src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                    alt="img"
                    width={258}
                    height="210"
                  />
                  <h2 className={styles.productname}>
                    Catherine Lansfield Soho Divan Bed
                  </h2>
                  <div className={styles.trustpilot}>
                    <img src="/image/tru.png" alt="img" />
                  </div>
                  <p className={styles.price}>£210.00</p>
                </div>
              </div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default DivanBeds;

DivanBeds.getLayout = PerPageLayout;
