/* eslint-disable @next/next/no-img-element */
import React from "react";
import Styles from "styles/commerce/order.module.scss";
import CommerceLayout from "components/admin/commerce/layout";
import {
  AddAccessoriesTabs,
  ListAccessoriesTabs,
} from "components/admin/product/accessories";
import accessoriesTabArray from "components/admin/product/accessories/tabarray";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * AddBedAccessories
 * @returns
 */
function AllAccessories() {
  const [activeTab, setActiveTab] = React.useState("Color");

  const onActiveTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    <CommerceLayout>
      <div className={Styles.rightsidebar}>
        {/* <DashboardHeader /> */}
        <main className={Styles.main}>
          <div className={Styles.containerbox}>
            <div className={Styles.mainheading}>Add {activeTab}</div>
            <div
              className={` ${Styles.tablebox} ${Styles.mt2} ${Styles.productuploadtabbox}`}
            >
              <ul className={Styles.productuploadtab}>
                {accessoriesTabArray.map(({ value }, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => onActiveTab(value)}
                      className={value === activeTab ? Styles.active : ""}
                    >
                      {value}
                    </li>
                  );
                })}
              </ul>
              <div className={Styles.tabbox}>
                <ListAccessoriesTabs tabName={activeTab} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </CommerceLayout>
  );
}

export default AllAccessories;
