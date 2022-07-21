import React from "react";
import type { NextPage } from "next";
import Styles from "./headerstyle/topheader.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section className={Styles.headersection}>
        <div className={`${Styles.headermain1} container`}>
          <div className={`${Styles.headermain} row`}>
            <div className={Styles.topheader}>
              <div className={Styles.firstbox}>
                <p>Free Delivery over £40 to most of UK*</p>
              </div>
              <div className={Styles.secondbox}>
                <ul>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>9560321245</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.secondheader}>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className={Styles.mainlogo}>
                <img src="/image/1.png" alt="logo" />
              </div>
            </div>
            <div className={`${Styles.searchbar1}col-7`}>
              <div className={Styles.searchbar}>
                <input type="text" placeholder="search for products" />

                <select name="category" id="category">
                  <option value="Select">Select Category</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <button type="search-button">
                  <img src="/image/SEARCH.SVG" alt="" />
                </button>
              </div>
            </div>
            <div className="col-3">
              <div className={Styles.carticon}>
                <ul>
                  <li>
                    <div className={Styles.wishlist}>
                      <img src="/image/HEART.SVG" alt="icon" />
                      <span>2</span>
                    </div>
                  </li>
                  <li>
                    <div className={Styles.wishlist1}>
                      <img src="/image/CART.SVG" alt="icon" />
                      <span>2</span>
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
            <div className="col-12">
              <div className={Styles.mainmenu}>
                <ul>
                  <li>Beds</li>
                  <li>Mattresses</li>
                  <li>Wardrobes</li>
                  <li>Sofa Beds</li>
                  <li>Divan Beds</li>
                  <li>Kids</li>
                  <li>Furniture</li>
                  <li>Finance</li>
                  <li>Clearance</li>
                  <li>Help & Advice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
