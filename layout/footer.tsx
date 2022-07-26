import React from "react";
import Image from "next/image";
import Style from "styles/footer/footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div>




      <div className={Style.ftrBackgrd}>
        <div className="">
          <div className="">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                   <ul>
                    <li>
                      <div className={Style.footerimage}>
                         <img src="/image/1.png" alt="img" />
                      </div>
                    </li>
                    <li>
                      <div className={Style.footerimage2}>
                         <img src="/img/err.png" alt="img" />                         
                         <img src="/image/5star.jpeg" alt="img" />
                      </div>
                    </li>
                   </ul>
                  </div>
                <div
                  className="col-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className={Style.single_wedge}>
                    <h4>USEFUL LINKS</h4>
                    <div className="footer-links">
                      <div className="footer-row">
                        <ul className="align-items-left">
                          <li>
                            <Link
                              className={Style.ftr_links}
                              href="/product/divanbed"
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/divanbed/suede-Fabric-Divan-Beds"
                            >
                              Our Blog 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/product/headboard"
                            >
                             Careers 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/product/Mattressess"
                            >
                             Corporate Governance 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/divanbed/velvet-Fabric-Divan-Beds"
                            >
                             Pepperfry In the News 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/allbed/sleigh-beds"
                            >
                             Find A Studio 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/allbed/sleigh-beds"
                            >
                             Gift Cards 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/allbed/sleigh-beds"
                            >
                             Brands 
                            </Link>
                          </li>
                          <li className="li">
                            <Link
                              className="single-link"
                              href="/allbed/sleigh-beds"
                            >
                            Customer Reviews
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className={Style.single_wedge}>
                    <h4>Partners </h4>
                    <div className="footer-links">
                      <div className="footer-row">
                        <ul className="align-items-center">
                          <li className="li">
                            <a href="/about" className="single-link">
                            Sell With Us
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/product/shop">
                            Become a Franchisee 
                            </a>
                          </li>
                          <li className="li">
                            <a href="/contact" className="single-link">
                            Design For Us 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/ReturnPolicy">
                            Pepperfry Marketplace Policies 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/PrivacyPolicy">
                            Login to Your Merchant 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="checkout.html">
                            Dashboard 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="checkout.html">
                            Important : GST and You 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="checkout.html">
                            Corporate Enquiries
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className={Style.single_wedge}>
                    <h4>Need Help? </h4>
                    <div className="footer-links">
                      <div className="footer-row">
                        <ul className="align-items-center">
                          <li className="li">
                            <a href="/about" className="single-link">
                            Contact Us 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/product/shop">
                            Returns & Refund 
                            </a>
                          </li>
                          <li className="li">
                            <a href="/contact" className="single-link">
                            Track Your Order 
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/ReturnPolicy">
                            FAQs
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="/PrivacyPolicy">
                            Buy on Phone
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
          <div className="hrzntal_rw">
            <hr />
          </div>
         <section className={Style.lastfooter}>
              <div className="container"> 
                <div className="row">
                   <div className="col-4">
                    <p>Copyright by@dbz all right reserved</p>
                   </div>
                   <div className="col-4">
                    <div className={Style.centerfooter}>
                    <p>Keep in touch</p>
                    <ul>
                      <li>
                        <img src="/image/fa.png" alt="img" />
                      </li>
                      <li> 
                        <img src="/image/twi.png" alt="img" />
                        </li>
                      <li>
                      <img src="/image/ins.png" alt="img" />
                      </li>
                    </ul>
                    </div>                 
                   </div>
                   <div className="col-4">
                    <ul>
                      <li>
                      <img src="/image/upi.png" alt="img" />
                      </li>
                      <li>
                      <img src="/image/mas.png" alt="img" />
                      </li>
                    </ul>
                   </div>
                </div>
              </div>
         </section>
        </div>
      </div>


      </div>
  );
};
export default Footer;
