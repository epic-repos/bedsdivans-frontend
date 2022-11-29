import React from "react";
import Image from "next/image";
import Style from "styles/footer/footer.module.scss";
import Link from "next/link";
import visaicon from "icons/visaicon";
import PhoneIcon from "icons/PhoneIcon";
import MailIcon from "icons/MailIcon";
import PayPal from "icons/paypalicon";
import FacebookIcon from "icons/facebook";
import InstagramIcon from "icons/instagram";
import MasterCard from "icons/mastercard";
import TwitterIcon from "icons/twittericon";
import VisaIcon from "icons/visaicon";

const Footer = () => {
  return (
    <footer>
      <section className={Style.mainfooter}>
        <div className="container">
          <div className="row">
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer1}>
                <ul>
                  <li>
                    <img src="/image/wplogo.webp" alt="logo" />
                  </li>
                  <li>
                    <img src="/image/yell.webp" alt="logo" />
                  </li>
                </ul>
                <div className={Style.footer1s}>
                  <ul>
                    <li>
                      <MailIcon size={25} color="#fff" />
                      Unit 8A Stag Industrial Estate Oxford Street Bilston WV14
                      7HZ
                    </li>
                    <li>
                      <PhoneIcon size={25} color="#fff" />
                      <Link href="#">
                        <a>01902 405535</a>
                      </Link>
                    </li>
                    <li>
                      <MailIcon size={25} color="#fff" />
                      <Link href="#">
                        <a>info@bedsdivans.co.uk</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={Style.footer1es}>
                  <ul>
                    <li>
                      <VisaIcon size={50} color="#fff" />
                    </li>
                    <li>
                      <MasterCard size={45} color="#fff" />
                    </li>
                    <li>
                      <PayPal size={40} color="#fff" />
                    </li>
                    <li>
                      <MailIcon size={45} color="#fff" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>USEFUL LINKS</h3>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Divan Beds</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Suede Fabric Divan Bed</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a> Headboards</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Mattresses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Crushed Velvet Beds</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Sleigh Beds</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>ADDITIONAL LINKS</h3>
                <ul>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/return-policy">
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy-warranty">
                      <a>Policy & Warranty</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/divan-bed-birmingham">
                      <a>Divan Bed Birmingham</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/divan-bed-yorkshire">
                      <a>Divan Beds Yorkshire</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/divan-bed-london">
                      <a>Divan Bed London</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${Style.mwfull} col-3`}>
              <div className={Style.footer2}>
                <h3>LATEST BLOGS</h3>
                <ul>
                  <li>
                    <Link href="#">
                      <a>
                        Who Are People Sleeping With? UK’s Most Popular Podcasts
                        To Fall Asleep To (2022)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>UK’s Top Interior Design Turn Ons & Turn Offs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Types of Beds That You Need To Know</a>
                    </Link>
                  </li>
                </ul>
                <div className={Style.footer2s}>
                  <ul>
                    <li>
                      <FacebookIcon size={25} color="#fff" />
                    </li>
                    <li>
                      <TwitterIcon size={25} color="#fff" />
                    </li>
                    <li>
                      <InstagramIcon size={25} color="#fff" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Style.mainlastfooter}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                You may not reproduce or communicate any of the content on this
                website, including files downloadable from this website, without
                the permission of the copyright owner, all contents and images
                on our website are owned and copyrighted by DBZKHAN LTD
                Bedsdivans 2022
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
