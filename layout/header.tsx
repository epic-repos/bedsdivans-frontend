import React from "react";
import type { NextPage } from "next";
import Styles from "styles/topheader.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section className={Styles.mydiv}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className={Styles.header1}>
                <img src="/image/w.png" alt="img" />
                <img src="/image/e.png" alt="img" />
              </div>
            </div>
            <div className="col-8">
              <div className={Styles.secondbox}>
                <ul>
                  <li>Customer service:0343 798 3687</li>
                  <li>Sales:0190 240 5535</li>
                  <li>Contact Us</li>
                  <li>My account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.secondheader}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className={Styles.searchbar}>
                <input type="text" placeholder="search for products" />
                <button className={Styles.search_button}>
                  <img src="/image/SEARCH.SVG" alt="" />
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.mainlogo}>
                <img src="/image/1.png" alt="imge" />
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.carticon}>
                <ul>
                  <li>
                    <div className={Styles.wishlist}>
                      <img src="/image/HEART.SVG" alt="icon" />
                      <p>My shortlist</p>
                    </div>
                  </li>
                  <li>
                    <div className={Styles.wishlist}>
                      <img src="/image/CART.SVG" alt="icon" />
                      <p>My basket</p>
                    </div>
                  </li>
                  <li>
                    <div className={Styles.wishlist}>
                      <img src="/img/tyiu.svg" alt="icon" />
                      <p>My basket</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.menudiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={Styles.mainmenu}>
                <ul>
                  <li>
                    <Link href="/divanbed">
                      <a>Divan Beds</a>
                    </Link>
                    <ul>
                      <section className="drop">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Type</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Velvet Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Chennile Fabric Divan Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Suede Fabric Divan Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Low Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Leather Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a> Divan Bed Base</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Size</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Single (2'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Single (3ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Double (4ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Double (4'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>King (5ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Super King (6ft)</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Divan Beds Complete Set</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>



                        <section className={Styles.dropmenulastfooter}>
                      <div className="container">
                         <div className="row">
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                         </div>
                      </div>
                    </section>
                      </section>
                    </ul>
                  </li>

                  <li>
                    <Link href="/divanbed">
                      <a>All Beds </a>
                    </Link>
                    <ul>
                      <section className="drop">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Sleigh Beds</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Florida Bed Range</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Ambassador Range</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Kendall Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Manoco Range</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Royal Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Swan Bed Range</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Wing Bed Range</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Winchester Bed</a>
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                {/* <h2>Shop BY Size</h2> */}
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Ottoman Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Kids Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Leather Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Nevada Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Storage Beds</a>
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/divanbed">
                                      <a>Super King (6ft)</a>
                                    </Link>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Divan Beds</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Velvet Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Suede Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Low Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Leather Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <section className={Styles.dropmenulastfooter}>
                      <div className="container">
                         <div className="row">
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                         </div>
                      </div>
                    </section>
                      </section>
                    </ul>
                  </li>
                  <li>
                    <Link href="/divanbed">
                      <a>Headboards </a>
                    </Link>
                    <ul>
                      <section className="drop">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Type</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Cube Headboard</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>4 Panel Vertical Headboard</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>3 Panel Horizontal Headboard</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Plain Headboard</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/divanbed">
                                      <a>Leather Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a> Divan Bed Base</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Size</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Single (2'6")</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Single (3ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Double (4ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Double (4'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>King (5ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Super King (6ft)</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Divan Beds Complete Set</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div> */}
                          </div>
                        </div>

                        <section className={Styles.dropmenulastfooter}>
                      <div className="container">
                         <div className="row">
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                         </div>
                      </div>
                    </section>
                      </section>
                    </ul>
                  </li>
                  <li>
                    <Link href="/divanbed">
                      <a>Mattresses </a>
                    </Link>
                    <ul>
                      <section className="drop">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Type</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Orthopedic Mattresses</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Pocket Mattresses</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Memory Form Mattresses</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Pillow Top Mattresses</a>
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/divanbed">
                                      <a>Low Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Leather Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a> Divan Bed Base</a>
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Size</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Single (2'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Single (3ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Double (4ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Double (4'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>King (5ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Super King (6ft)</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop By Comfort</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Very Firm</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Firm</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Very Firm</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Very Firm</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <section className={Styles.dropmenulastfooter}>
                      <div className="container">
                         <div className="row">
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                         </div>
                      </div>
                    </section>
                      </section>
                    </ul>
                  </li>
                  <li>
                    <Link href="/divanbed">
                      <a>Garden Furniture </a>
                    </Link>
                        <ul>
                      <section className="drop">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Type</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Velvet Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Chennile Fabric Divan Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Suede Fabric Divan Bed</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Low Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Leather Divan Beds</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a> Divan Bed Base</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Shop BY Size</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Single (2'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Single (3ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Small Double (4ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Double (4'6ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>King (5ft)</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Super King (6ft)</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={Styles.dropdownmenu}>
                                <h2>Divan Beds Complete Set</h2>
                                <ul>
                                  <li>
                                    <Link href="/divanbed">
                                      <a>Linen Fabric Divan Beds</a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <section className={Styles.dropmenulastfooter}>
                      <div className="container">
                         <div className="row">
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                           <div className="col-4">
                           </div>
                         </div>
                      </div>
                    </section>
                      </section>
                    </ul>
                  </li>
                  <li>
                    <Link href="/divanbed">
                      <a className={Styles.active}>Sale</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </header>
  );
};
export default Header;
