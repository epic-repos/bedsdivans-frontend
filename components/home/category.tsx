/* eslint-disable @next/next/no-img-element */
import { randomBytes } from "crypto";
import React from "react";
import styles from "styles/home.module.scss";

const CategoryContainer = () => {
  return (
    <section className={styles.qualityproducts}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.qualityheading}>
              <h2>Our Quality Products</h2>
              <p>Get up Refresh Every day</p>
            </div>
          </div>
        </div>
        <div className="row">
          {categoryArray.map((data, index) => {
            return (
              <div key={index} className="col-3">
                <div className={styles.box2}>
                  <img src={data.imageUrl} alt="image" />
                  <h3>Beds</h3>
                  <p>
                    Our range of beds come in single, double, king and super
                    king sizes are crafted with superior memory foam that
                    cradles your head and keeps your head and neck aligned even
                    while you sleep on your side and prevents the head from
                    sinking.
                  </p>
                  <button>Buy now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CategoryContainer;

const categoryArray = [
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Grey Linen Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/greylinen.png`,
    description: `  Our range of beds come in single, double, king and super
                        king sizes are crafted with superior memory foam that
                        cradles your head and keeps your head and neck aligned
                        even while you sleep on your side and prevents the head
                        from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Blue Plush Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blueplush.png`,
    description: `  Memory foam Mattress topper provides an additional cushioning
                    to your regular memory foam mattress. The topper is made from
                    one inch gel foam which is to be placed above the memory foam
                    mattress.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `DBZBeds Black Crushed Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/blackcrushed.png`,
    description: `  Our range of beds come in single, double, king and super king
                    sizes are crafted with superior memory foam that cradles your
                    head and keeps your head and neck aligned even while you sleep
                    on your side and prevents the head from sinking.`,
  },
  {
    id: randomBytes(8).toString("hex"),
    heading: `Cream Chanille Divan Bed Set With 3 Panel Headboard`,
    price: `179`,
    imageUrl: `/product/color4ft/creamchanille.png`,
    description: ` Our range of beds come in single, double, king and super king
                    sizes are crafted with superior memory foam that cradles your
                    head and keeps your head and neck aligned even while you sleep
                    on your side and prevents the head from sinking.`,
  },
];
