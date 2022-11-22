/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import UserIcon from "icons/UserIcon";
import css from "styles/layout.module.scss";
import TrustPilotAndContact from "./trust-pilot";
import MenuIcon from "icons/MenuIcon";
import CloseIcon from "icons/CloseIcon";
import useOnClickOutside from "hooks/useclick";
import BagOutline from "icons/BagOutline";

const Header = () => {
  return (
    <header className={css["header"]}>
      <TrustPilotAndContact />
      <LogoAndSearchBar />
      <section className={css.menudiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={css.mainmenu}>
                <ul>
                  <li>
                    <Link href="/beds/divan-beds">
                      <a>Divan Beds</a>
                    </Link>
                    <ul>
                      <li>House Fabric Divan Beds</li>
                      <li>Crushed Velvet Beds</li>
                      <li>Suede Fabric Divan Bed</li>
                      <li>Low Divan Beds</li>
                      <li>Divan bases</li>
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
                              <div className={css.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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

                        <section className={css.dropmenulastfooter}>
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
                              <div className={css.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                          </div>
                        </div>

                        <section className={css.dropmenulastfooter}>
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
                              <div className={css.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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

                                  <li>
                                    <Link href="/divanbed">
                                      <p>View All</p>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                              <div className={css.dropdownmenu}>
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

                        <section className={css.dropmenulastfooter}>
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
                              <div className={css.dropdownmenu}>
                                <img
                                  src="/image/bettersleepimage.webp"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className={css.dropdownmenu}>
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
                              <div className={css.dropdownmenu}>
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
                              <div className={css.dropdownmenu}>
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

                        <section className={css.dropmenulastfooter}>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={Styles.mobileheadert}>
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
      </div> */}
    </header>
  );
};
export default Header;

const LogoAndSearchBar = () => {
  const [isNavigation, setNavigation] = React.useState(false);

  const onClickMenu = React.useCallback(() => {
    setNavigation(!isNavigation);
  }, [isNavigation]);
  // CloseIcon

  const ref = useOnClickOutside(() => setNavigation(false));
  return (
    <>
      <section
        style={{
          transform: `translateX(${isNavigation ? "0%" : "-100%"})`,
        }}
        className={css["navigation-model"]}
      >
        <div ref={ref} className={css["navigation-content"]}>
          <div className={css["close-button"]}>
            <button
              title="close-icon"
              aria-label="close-icon"
              onClick={onClickMenu}
            >
              <CloseIcon size={24} />
            </button>
          </div>
          <div>
            <h1>Hello World</h1>
          </div>
        </div>
      </section>
      <section className={` ${css["search-container"]} container`}>
        <div className={css["item-grid"]}>
          <div className={css["menu-bar"]}>
<<<<<<< HEAD
            <button aria-label="menu-icon" onClick={onClickMenu}>
              <MenuIcon size={30} />
=======
            <button
              title="menu-icon"
              aria-label="menu-icon"
              onClick={onClickMenu}
            >
              <MenuIcon size={20} />
>>>>>>> bcbc95a7da638409e9b83aa907e8c116a5031048
            </button>
          </div>
          <div className={css["logo"]}>
            <Link href="/">
              <a>
                <img src="/image/wplogo.webp" alt="imge" />
              </a>
            </Link>
          </div>
          <div className={css["searchbar"]}>
            <input type="text" placeholder="Search for products..." />
            <button title="search" aria-label="search-icon">
              <img src="/image/SEARCH.SVG" alt="" />
            </button>
          </div>
          <div className={css["controls"]}>
            <ul>
              <li>
                <Link href={"/account"}>
                  <a>
                    <span>
                      <UserIcon size={32} />
                    </span>
                    <span className={css["texts"]}>My Account</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  <a>
                    <BagOutline size={32} />
                    <span className={css["texts"]}>My Cart</span>
                    <i className={css["badge"]}>0</i>
                  </a>
                </Link>
              </li>

              {/* <li>
                <MapIcon />
                <span className={css["texts"]}>My basket</span>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
