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
                <h2>
                  Buying that perfect bed can be confusing and exhaustive.
                </h2>
                <p>
                  Here at Beds Divans we make sure that you don’t have to wade
                  through numerous <strong>bed stores in London.</strong> Get
                  the best and the most fine-quality divan bed wood proportions,
                  structures and more with us. We make buying bed frame,{" "}
                  <strong>divan bed mattresses in London</strong> easy for you.
                  Also, are you looking for the best divan bed base and{" "}
                  <strong>divan beds in london</strong>? Then, Do drop by to
                  look at our collection and place order online, hassle-free.
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
                <h3>
                  We help you buy the best/Importance of buying the right bed
                </h3>
                <p>
                  In every modern London household, the right kind of furniture
                  adds to home aesthetics. And, it all begins with creating the
                  perfect blend of style and elegant furniture for every corner
                  of the home. We have a wide stock of Divan Beds,{" "}
                  <strong>Sleigh Beds,</strong>
                  Ottoman Beds, Mattresses, Headboards. From luxury beds to
                  budget-friendly divan beds in London and best{" "}
                  <strong>mattresses in London,</strong> we have it all. Beds
                  Divans collection is a treasure for you. So, come and explore
                  contemporary beds, luxury beds, divan beds and range of
                  mattress in London. We are also leading brand name selling
                  premium <strong>mattress shop in London.</strong>
                </p>
                <button>About Us</button>
              </div>
            </div>
            <div className={`${styles.mwfulles} col-6`}>
              <div className={styles.section24}>
                <h3>A wide range of divan beds</h3>
                <p>
                  We have years of experience in ideating and crafting beds that
                  resonate with our customers needs. So, if you are looking to
                  buy divan bed in London or <strong>divan bed base,</strong>{" "}
                  mattresses, and <strong>cheap bed in London</strong> just
                  reach out to us.
                </p>
                <h3>Free Mattresses With Bed Options</h3>
                <p>
                  Not merely Divan beds, we offer range of free mattresses in
                  London with a variety of bed options for you. Our customers
                  don’t have to search anywhere else once they come to us.
                  Because, we have different combinations of bed options like
                  luxury beds in London and also, next day beds in London.
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
