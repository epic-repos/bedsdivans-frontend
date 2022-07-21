import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Style from "../../styles/Mattressess/Mattressess.module.scss";
const NewProductPage = () => {
  return (
    <div>
      <div className={Style.mtrsBannr}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={Style.mattresspage}>
                <b>
                  Save upto 56% with <br />
                  Mattressess
                </b>
                <div className={Style.mtresp}>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </p>
                </div>
                <div className={Style.ShopMobile}>
                  <button>
                    <b>SHOP NOW</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={Style.mtrs2Sction}>
                {/* <img src="/assets/imagges/mattressbanner/bnerimage.webp"  alt="BigCo Inc. logo"></img> */}
                <Image
                  width={600}
                  height={500}
                  className="responsiveImage"
                  src="/assets/images/mattressbanner/bnerimage.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewProductPage;
