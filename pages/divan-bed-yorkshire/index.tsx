/* eslint-disable @next/next/no-img-element */
import PerPageLayout from "layout/perpage";
import React from "react";
import Link from "next/link";
import PlusIcon from "icons/PlusIcon";
import MinusIcon from "icons/MinusIcon";
import GridWrapper from "components/grid-card";
import { BedWithImage } from "network-requests/types";
import ProductCard from "components/grid-card/card";
import styles from "styles/divanbedbirmingham/divanbedbirmingham.module.scss";
import Accordion from "components/accordion";
import { useRouter } from "next/router";
const DivanBedBirmingham = () => {
  return (
    <>
      <section className={styles.Birminghamsection}>
        <div className="container">
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.firstsection}>
                <img src="/image/6392974.png" alt="img" />
                <Link href="#">
                  <a>Buy Now</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.firstsection1}>
                <h2>Divan Beds Yorkshire</h2>
                <p>
                  Beautifully crafted wooden and engineered beds add to the
                  elegance of a home. When your interior decor needs something
                  special, we bring the best in{" "}
                  <strong>divan beds in Yorkshire.</strong> We at Divanbeds work
                  to manufacture world’s best bed options for you. Whether it is
                  Sleigh bed, basic bed, Ottoman bed, king size bed in
                  Yorkshire, we are the experts. Our customer can get best
                  quality <strong>beds for sale in Yorkshire.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Birminghamsection1}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Why Bed buying is better with us</h1>
              <div className={styles.section2}>
                <ul>
                  <li>
                    <div className={styles.section21}>
                      <ul>
                        <li>Widest variety of bed options</li>
                        <li>Work on customers-first motto</li>
                        <li>Sell only quality-assured products</li>
                      </ul>
                      <img src="/image/12.PNG" alt="icon" />
                    </div>
                  </li>
                  <li>
                    <div className={styles.section21}>
                      <ul>
                        <li>Ten years of expertise</li>
                        <li>Delivery in 4-5 business days</li>
                        <li>After-sale support</li>
                      </ul>
                      <img src="/image/123.PNG" alt="icon" />
                    </div>
                  </li>
                  <li>
                    <div className={styles.section21}>
                      <ul>
                        <li>Served millions of customers</li>
                        <li>Completely secure payments</li>
                        <li>All bed needs under one roof</li>
                      </ul>
                      <img src="/image/124.png" alt="icon" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Birminghamsection3}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.section22}>
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Birminghamsection2}>
        <div className={`${styles.mwfulls} container`}>
          <div className="row">
            <div className={`${styles.mwfull} col-6`}>
              <div className={styles.section23}>
                <h3>Importance of buying the right bed</h3>
                <p>
                  Finding the right kind of bed should be simple. A right bed is
                  equal to good sleep. When you are looking for basic beds, or
                  <strong>divan double bed in Yorkshire,</strong> our name
                  stands out. We are one of the leading bed{" "}
                  <strong>manufacturers in Yorkshire.</strong> It is also our
                  expertise to manufacture the best quality and{" "}
                  <strong>cheap beds in Yorkshire.</strong>
                </p>
                <button>About Us</button>
              </div>
            </div>
            <div className={`${styles.mwfulles} col-6`}>
              <div className={styles.section24}>
                <h3>A wide range of divan beds</h3>
                <p>
                  We offer variety in plenty. As special{" "}
                  <strong>divan crushed velvet bed manufacturer,</strong> our
                  years of experience in crafting bed options speaks for itself.
                  Our stock is not limited to a few options.
                </p>
                <h3>Countless Divan Beds Options to Suit your Needs</h3>
                <p>
                  We have a huge collection of{" "}
                  <strong>cheap divan bed base in Yorkshire</strong>
                  with many shapes, sizes, wood qualities, and aesthetic
                  appeals. So, what are you waiting for? Find the best of
                  <strong>Yorkshire beds</strong> with Divanbeds right now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faqsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
      </section>
      <Accordion />
      <section className={styles.contactsection2}>
        <div className="container">
          <div className="row">
            <div className={`${styles.mwfulles} col-6`}>
              <div className={styles.contact1}>
                <h3>Why buy beds from Bedsdivan.co.uk</h3>
                <p>
                  The answer is straightforward – We have years of experience in
                  creating the best quality divan beds in Yorkshire. Each
                  product goes through strict quality assurance checks. While
                  our customer support division is well equipped to respond to
                  customers, round the clock.
                </p>
                <h3>Attractive Divan Bed Options at Great Discounts</h3>
                <p>
                  The answer is straightforward – We have years of experience in
                  creating the best quality divan beds in Yorkshire. Each
                  product goes through strict quality assurance checks. While
                  our customer support division is well equipped to respond to
                  customers, round the clock.
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className={`${styles.mwfulles} col-6`}>
              <div className={styles.contactform}>
                <h3>Contact us for any Queries</h3>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="number" placeholder="Phone Number" />
                  <textarea rows={4} placeholder="Message"></textarea>
                  <button>submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.relatedsection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Latest Products</h2>
              <p>
                All you need to do is visit our website. Select from a wide
                variety of durable beds options and{" "}
                <strong>beds for sale</strong> with{" "}
                <strong>
                  <Link href="#">
                    <a>best mattress in London.</a>
                  </Link>{" "}
                </strong>
                Also, find the suitable divan bed,{" "}
                <strong>bed frames in London,</strong> sleigh bed or any other
                bed. After selecting the bed, you can easily place the
                <Link href="#">
                  <a> order </a>
                </Link>
                online within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.relatedproduct}>
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DivanBedBirmingham;

DivanBedBirmingham.getLayout = PerPageLayout;
