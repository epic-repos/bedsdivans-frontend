import React from "react";
import Style from "styles/header/header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <section className="MenuForDesktop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className={`${Style.mainHeader} col-md-10`}>
              <p>Free Delivery over £40 to most of UK*</p>
              <div className={Style.cnt_us}>
                <div className={`${Style.header_top_content}`}>
                  <a href="/contactus">
                    <button> Contact Us </button>
                  </a>
                </div>
                <div className={`${Style.header_top_content}`}>
                  <a href="/contactus">
                    <button> About Us </button>
                  </a>
                </div>
                <div className={`${Style.header_top_content}`}>
                  <a href="/contactus">
                    <button> 09189898789 </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
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
          <div
            className="col-7 align-self-center"
            style={{ marginTop: "10px" }}
          ></div>
        </div>
      </section>
    </div>
  );
};
export default Header;
