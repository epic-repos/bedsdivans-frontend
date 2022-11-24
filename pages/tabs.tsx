import PerPageLayout from "layout/perpage";
import { useFetchBedBySlug } from "network-requests/queries";
import React from "react";
import Styles from "styles/product/page.module.scss";

// Description
// Reviews (258)
// Policy & Warranty
const TabsArray = [
  {
    name: "Description",
    value: "description",
  },
  {
    name: "Reviews",
    value: "reviews",
  },
  {
    name: "Policy & Warranty",
    value: "warranty",
  },
];

const Tabs = () => {
  const { data } = useFetchBedBySlug(`test-slug-hello`);
  console.log({ data });
  return (
    <section className={Styles.descriptiontabs}>
      <div className="container">
        <h1>Hello</h1>
      </div>
    </section>
  );
};

export default Tabs;
