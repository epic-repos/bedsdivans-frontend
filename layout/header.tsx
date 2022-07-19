import React from "react";
import Style from "styles/header/header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className={`${Style.header} section`}>
        <div className={Style.classic_header}>
          <div className={`${Style.header_top} section-fluid`}>
            <div className="container">
              <div className="row row-cols-lg-2 align-items-center">
                <div className={`${Style.col} text-lg-left`}>
                  <div className={Style.header_top_massege}>
                    <p>Free Delivery over £40 to most of UK* </p>
                  </div>
                </div>

                <div className={`${Style.col} d-none d-lg-block`}>
                  <div className="header-top-set-lan-curr d-flex justify-content-end">
                    <div className={`${Style.header_top_content} for-border`}>
                      <a href="/contactus">
                        <button> Contact Us </button>
                      </a>
                    </div>

                    <div className={Style.header_top_content}>
                      <Link href="/about">
                        <button>About us</button>
                      </Link>
                    </div>
                    <div className={Style.header_top_content}>
                      <button>01902405535</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom d-none d-lg-block">
          <div className="container position-relative Ncs ">
            <div className="row  ">
              <div className="col-md-2 align-self-center">
                <div className={Style.header_logo}>
                  <Link href="/">
                    <Image
                      className=""
                      alt="BedsDivan"
                      src="/assets/images/logo/logo.png"
                      width={1000}
                      height={1000}
                      priority
                    />
                  </Link>
                </div>
              </div>
              {/* New search start */}

              {/* New search end */}
              <div
                className="col-7 align-self-center"
                style={{ marginTop: "10px" }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control col-8"
                    placeholder="Search for product"
                  />
                  <ul className={Style.search_suggestions}>
                    <div className="row search_type_row">
                      return (
                      <div className="col-md-4 p-0">
                        <div className={Style.searchitems_box}>
                          <ul>
                            <li className="col-2 p-0"></li>
                            <li className="col-10">
                              <h4 className="suggestion-title result-title"></h4>

                              <div className="suggestion-price price">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      );
                      <li
                        style={{
                          textAlign: "center",
                          color: "grey",
                          padding: 5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                        }}
                      >
                        view all results{" "}
                      </li>
                    </div>
                  </ul>
                  <div className="input-group-append col-4 p-0">
                    <select
                      className="form-control category-dropdown"
                      id="sel1"
                    >
                      <option value="">Select Category</option>
                      <option value="bed">Divan Bed</option>
                      <option value="allbeds">Allbeds</option>
                      <option value="headboard">Headboard</option>
                      <option value="mattress">Mattress</option>
                      <option value="sofa">Sofa</option>
                      <option value="gardenFurniture">Garden Furniture</option>
                      <option value="livingRoom">Living room furniture</option>
                      <option value="diningSet">Dining set</option>
                    </select>
                    <button className="btn btn-danger search-btn" type="submit">
                      <img
                        src="/assets/images/image/Icon material-search.png"
                        style={{ height: "22px", opacity: "0.9" }}
                        alt="bedsdivans"
                      />
                    </button>
                  </div>
                </div>

                {/* new search bar */}
              </div>

              <div className="col-md-2 align-self-center">
                <div className="cartfordesktop">
                  <div className={Style.header_actions}>
                    <div className="header-bottom-set dropdown">
                      <ul>
                        <button className="">
                          <span
                            className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0"
                            style={{ cursor: "pointer" }}
                          >
                            {/* <ShoppingCartIcon /> */}
                            <Image
                              width={25}
                              height={25}
                              src="/assets/images/icons/basket.webp"
                              alt=""
                            />
                            <span className="header-action-num"></span>
                          </span>
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-1 align-self-center">
                <div className="whislist">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/icons/heart.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom d-lg-none sticky-nav bg-white">
          <div className="container position-relative">
            <div className="row align-self-center">
              <div className="col-auto align-self-center">
                <div className="header-logo">
                  <a href="#">
                    <Image
                      src="/assets/images/logo/logo.png"
                      width={128}
                      height={128}
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>

              <div className="col align-self-center">
                <div className={Style.header_actions}>
                  <div className={Style.header_account_list}>
                    <a className={`${Style.header_action_btn} search_btn`}>
                      <i className="icon-magnifier"></i>
                    </a>
                    <div className="dropdown_search">
                      <form className="action-form" action="#">
                        <input
                          className="form-control"
                          placeholder="Enter your search key"
                          type="text"
                        />
                        <button className="submit" type="submit">
                          <i className="icon-magnifier"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="header-bottom-set dropdown">
                    <button
                      className="dropdown-toggle header-action-btn"
                      data-bs-toggle="dropdown"
                    >
                      <i className="icon-user"></i>
                    </button>
                    <ul>
                      <li>
                        <a className="dropdown-item" href="my-account.html">
                          My account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Sign in
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#offcanvas-cart"
                    className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0"
                  >
                    <i className="icon-handbag"></i>
                    <span className="header-action-num">01</span>
                  </a>
                  <a
                    href="#offcanvas-mobile-menu"
                    className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
                  >
                    <i className="icon-menu"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Mobile Menu Components start */}

        <div className={Style.MenuforMobile}>{/* <Menu /> */}</div>
        {/* For Mobile Menu Components start */}
        <div
          className="d-none d-lg-block sticky-nav"
          style={{ backgroundColor: "#204697" }}
        >
          <div
            className="container position-relative"
            style={{ maxWidth: "100%" }}
          >
            <div className="row">
              <div className="col-md-12 align-self-center">
                <div className="main-menu manu-color-white">
                  <ul>
                    {/* <li className="dropdown position-static"><a href="/DivanBed"> <b>Divan Beds</b> </a> */}
                    <li className="dropdown position-static ">
                      <Link className="ForBold" href="/product/divanbed">
                        Divan Beds
                      </Link>
                      <ul className="mega-menu d-block">
                        <li className="d-flex">
                          <ul className="d-block">
                            <li>
                              <a className="p-0 " href="shop-left-sidebar.html">
                                <Image
                                  className="img-responsive w-100 "
                                  src="/assets/images/menu-icons/BedsDivan.png"
                                  width={258}
                                  height={238}
                                  alt="BedsDivan"
                                />
                              </a>
                            </li>
                          </ul>

                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Shop by Type </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/divanbed/linen-Fabric-Divan-Beds">
                                Linen Fabric Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/velvet-Fabric-Divan-Beds">
                                Velvet Fabric Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/chenille-Fabric-Divan-beds">
                                Chenille Fabric Divan Bed
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/suede-Fabric-Divan-Beds">
                                Suede Fabric Divan Bed
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/low-Divan-Beds">
                                Low Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/leather-Divan-Beds">
                                Leather Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/divan-bed-base">
                                Divan Bed Base
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/product/divanbed"
                                style={{ color: "#262884" }}
                              >
                                <b>View All</b>
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Shop by size </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/divanbed/two-feet-bed">
                                Small Single (2'6ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/three-feet-bed">
                                Single (3ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/four-feet-bed">
                                Small Double (4ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/four-six-feet-bed">
                                Double (4'6ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/five-feet-bed">
                                King (5ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/six-feet-bed">
                                Super King (6ft)
                              </Link>
                            </li>
                          </ul>
                          <ul
                            className="d-block"
                            style={{ marginRight: "0px !important" }}
                          >
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Divan Beds Complete Set</b>
                              </a>
                            </li>
                            <li>
                              <Link href="/divanbed/linen-Fabric-Divan-Beds">
                                Linen Fabric Divan Beds
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li></li>
                      </ul>
                    </li>
                    <li className="dropdown position-static">
                      <Link className="ForBold" href="/product/allbeds">
                        All Beds
                      </Link>

                      <ul className="mega-menu d-block">
                        <li className="d-flex">
                          <ul className="d-block">
                            <li>
                              <a className="p-0" href="shop-left-sidebar.html">
                                <Image
                                  className="img-responsive w-100"
                                  src="/assets/images/menu-icons/submenu-divanbeds.png"
                                  width={258}
                                  height={238}
                                  alt="BedsDivan"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a
                                href="/allbed/sleigh-beds"
                                style={{ color: "#262884" }}
                              >
                                <b> Sleigh Beds </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/allbed/floridabed">
                                Florida Bed Range
                              </Link>
                            </li>
                            <li>
                              <Link href="/allbed/ambassadorbed">
                                Ambassador Range
                              </Link>
                            </li>
                            <li>
                              <Link href="/allbed/kendall">Kendall Bed</Link>
                            </li>
                            <li>
                              <Link href="/allbed/manocobed">Manoco Range</Link>
                            </li>
                            <li>
                              <Link href="/allbed/royalbed">Royal Beds</Link>
                            </li>
                            <li>
                              <Link href="/allbed/swanbed">Swan Bed Range</Link>
                            </li>
                            <li>
                              <Link href="/allbed/wingbed">Wing Bed Range</Link>
                            </li>
                            <li>
                              <Link href="/allbed/winchester">
                                Winchester Bed
                              </Link>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title1">
                              <Link
                                href="/allbed/ottoman-bed"
                                style={{ color: "#262884" }}
                              >
                                Ottoman Beds
                              </Link>
                            </li>
                            <li className="title1">
                              <Link
                                href="/allbed/kids-bed"
                                style={{ color: "#262884" }}
                              >
                                Kids Beds
                              </Link>
                            </li>
                            <li className="title1">
                              <Link
                                href="/allbed/leaher-bed"
                                style={{ color: "#262884" }}
                              >
                                Leather beds
                              </Link>
                            </li>
                            <li className="title1">
                              <Link
                                href="/allbed/nevada-bed"
                                style={{ color: "#262884" }}
                              >
                                Nevada Beds
                              </Link>
                            </li>
                            <li className="title1">
                              <Link
                                href="/allbed/storage-bed"
                                style={{ color: "#262884" }}
                              >
                                Storage Bed
                              </Link>
                            </li>
                          </ul>
                          <ul
                            className="d-block"
                            style={{ marginRight: "0px !important" }}
                          >
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Divan Beds </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/divanbed/linen-Fabric-Divan-Beds">
                                Linen Fabric Divan Beds
                              </Link>
                            </li>

                            <li>
                              <Link href="/divanbed/velvet-Fabric-Divan-Beds">
                                Velvet Fabric Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/velvet-Fabric-Divan-Beds">
                                Suede Fabric Divan Bed
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/suede-Fabric-Divan-Beds">
                                Low Divan Beds
                              </Link>
                            </li>
                            <li>
                              <Link href="/divanbed/leather-Divan-Beds">
                                Leather Divan Beds
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/product/allbeds"
                                style={{ color: "#262884" }}
                              >
                                <b>View All</b>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown position-static">
                      <Link href="/product/headboard"> Headboard </Link>

                      <ul className="mega-menu d-block">
                        <li className="d-flex">
                          <ul className="d-block">
                            <li>
                              <a className="p-0" href="shop-left-sidebar.html">
                                <Image
                                  className="img-responsive w-100"
                                  src="/assets/images/menu-icons/submenu-headboard.png"
                                  width={258}
                                  height={238}
                                  alt="BedsDivan"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b>Shop by Type</b>
                              </a>
                            </li>
                            <li>
                              <Link href="/headboard/cubeheadboard">
                                Cube Headboard
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/four-panel-headboard">
                                4 Panel Vertical Headboard
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/three-panel-headboard">
                                3 Panel Horizontal Headboard
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/plainheadboard">
                                Plain Headboard
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/product/headboard"
                                style={{ color: "#262884" }}
                              >
                                <b>View All</b>
                              </a>
                            </li>
                          </ul>

                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b>Shop by size</b>
                              </a>
                            </li>
                            <li>
                              <Link href="/headboard/two-feet-headboard">
                                Small Single (2'6")
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/three-feet-headboard">
                                Single (3ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/four-feet-headboard">
                                Small Double (4ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/four-six-feet-headboard">
                                Double (4'6ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/five-feet-headboard">
                                King (5ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/headboard/six-feet-headboard">
                                Super King (6ft)
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown position-static">
                      <Link href="/product/Mattressess">Mattresses</Link>

                      <ul className="mega-menu d-block">
                        <li className="d-flex">
                          <ul className="d-block">
                            <li>
                              <a className="p-0" href="shop-left-sidebar.html">
                                <Image
                                  className="img-responsive w-100"
                                  src="/assets/images/menu-icons/submenu-matteress.png"
                                  width={258}
                                  height={238}
                                  alt="BedsDivan"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Shop by Type </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/mattressess/orthopedicmattressess">
                                Orthopedic Mattresses
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/pocketmattressess">
                                Pocket Mattresses
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/memoryformmattressess">
                                Memory Form Mattresses
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/pillowtopmattressess">
                                Pillow Top Mattresses
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/product/Mattressess"
                                style={{ color: "#262884" }}
                              >
                                <b>View All</b>
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b>Shop by size</b>
                              </a>
                            </li>
                            <li>
                              <Link href="/mattressess/two-feet-mattress">
                                Small Single (2'6ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/three-feet-mattress">
                                Single (3ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/four-feet-mattress">
                                Small Double (4ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/four-six-feet-mattress">
                                Double (4'6ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/five-feet-mattress">
                                King (5ft)
                              </Link>
                            </li>
                            <li>
                              <Link href="/mattressess/six-feet-mattress">
                                Super King (6ft)
                              </Link>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b>Shop by Comfort</b>
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">Very Firm</a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">Firm</a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">Medium</a>
                            </li>
                            <li>
                              <a href="single-product-group.html">Soft</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown position-static">
                      <Link href="/product/gardenfurniture">
                        Garden Furniture
                      </Link>

                      <ul className="mega-menu d-block">
                        <li className="d-flex">
                          <ul className="d-block">
                            <li>
                              <a className="p-0" href="shop-left-sidebar.html">
                                <Image
                                  width={258}
                                  height={238}
                                  className="img-responsive w-100"
                                  src="/assets/images/menu-icons/submenu-garden-furniture.png"
                                  alt="BedsDivan"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a href="#" style={{ color: "#262884" }}>
                                <b> Shop by Type </b>
                              </a>
                            </li>
                            <li>
                              <Link href="/gardenfurniture/gardensofa">
                                Garden Sofa Sets
                              </Link>
                            </li>
                            <li>
                              <Link href="/gardenfurniture/gardendining">
                                Garden Dining Sets
                              </Link>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title">
                              <a
                                href="/sofa/fabricsofa"
                                style={{ color: "#262884" }}
                              >
                                <b>Fabric Sofa</b>
                              </a>
                            </li>
                            <li>
                              <a href="/sofa/championsofa">Champion Sofa</a>
                            </li>
                            <li>
                              <Link href="/sofa/chicagosofa">Chicago Sofa</Link>
                            </li>
                          </ul>
                          <ul className="d-block">
                            <li className="title1">
                              <a
                                href="/allbed/leather-bed"
                                style={{ color: "#262884" }}
                              >
                                <b>Leather beds</b>
                              </a>
                            </li>
                            <li className="title1">
                              <a
                                href="/allbed/leather-bed"
                                style={{ color: "#262884" }}
                              >
                                <b>Nevada Beds</b>
                              </a>
                            </li>
                            <li className="title1">
                              <a
                                href="/allbed/storage-bed"
                                style={{ color: "#262884" }}
                              >
                                <b>Storage Bed</b>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html" style={{ color: "red" }}>
                        <b>Sale</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
