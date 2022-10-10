/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Styles from "styles/topheader.module.scss";
import { CallOutline } from "icons/CallOutline";
import UserIcon from "icons/UserIcon";

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
                  <li>
                    <span>
                      <CallOutline />
                    </span>
                    <span className="text">Contact Us</span>
                  </li>
                  <li>
                    <span>
                      <UserIcon />
                    </span>
                    <span>My account</span>
                  </li>
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
                <Link href="/">
                  <a>
                    <img src="/image/1.png" alt="imge" />
                  </a>
                </Link>
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
                      <Link href={"/cart"}>
                        <a>
                          <img src="/image/CART.SVG" alt="icon" />
                          <p>My basket</p>
                        </a>
                      </Link>
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
                              <div className="col-4"></div>
                              <div className="col-4"></div>
                              <div className="col-4"></div>
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
                              <div className="col-4"></div>
                              <div className="col-4"></div>
                              <div className="col-4"></div>
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
                              <div className="col-4"></div>
                              <div className="col-4"></div>
                              <div className="col-4"></div>
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
                              <div className="col-4"></div>
                              <div className="col-4"></div>
                              <div className="col-4"></div>
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
                              <div className="col-4"></div>
                              <div className="col-4"></div>
                              <div className="col-4"></div>
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
      <div className={Styles.mobileheadert}>
        <div className={Styles.header2}>
          <div className={Styles.header1}>
            <img src="/image/w.png" alt="img" className={Styles.headerimage} />
            <img src="/image/e.png" alt="img" className={Styles.headerimage} />
          </div>
          <div className={Styles.secondbox1}>
            <div> Contact Us</div>
            <div> My account</div>
          </div>
        </div>
        <div className={Styles.cart3}>
          <div className={Styles.moblogo}>
            <img src="/image/1.png" alt="imge" width={91} height={40} />
          </div>
          <div className={Styles.carticon1}>
            <div className={Styles.wishlist}>
              <img
                src="/image/search-icon.SVG"
                alt="icon"
                width={20}
                height={20}
                className={Styles.iconstyle}
              />
              <p className={Styles.pstyle}>Search</p>
            </div>

            <div className={Styles.wishlist}>
              <Link href={"/cart"}>
                <a>
                  <img
                    src="/image/CART.SVG"
                    alt="icon"
                    width={20}
                    height={20}
                    className={Styles.iconstyle}
                  />
                  <p className={Styles.pstyle}>My basket</p>
                </a>
              </Link>
            </div>

            <div className={Styles.wishlist}>
              <img
                src="/img/tyiu.svg"
                alt="icon"
                width={20}
                height={20}
                className={Styles.iconstyle}
              />
              <p className={Styles.pstyle}>My basket</p>
            </div>
            <div className={Styles.wishlist}>
              <img
                src="/image/menu-icon.svg"
                alt="icon"
                width={20}
                height={20}
                className={Styles.iconstyle}
              />
              <p className={Styles.pstyle}>Menu</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
