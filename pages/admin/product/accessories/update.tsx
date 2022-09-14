/* eslint-disable @next/next/no-img-element */
import React from "react";
import Styles from "styles/commerce/order.module.scss";
import CommerceLayout from "components/admin/commerce/layout";
import { UpdateAccessoriesTabs } from "components/admin/product/accessories";
import accessoriesTabArray from "components/admin/product/accessories/tabarray";

/**
 * AddBedAccessories
 * @returns
 */
function AddBedAccessories() {
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
            <div className={Styles.mainheading}>Update {activeTab}</div>
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
                <UpdateAccessoriesTabs tabName={activeTab} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </CommerceLayout>
  );
}

export default AddBedAccessories;
