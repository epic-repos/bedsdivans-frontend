import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import style from "../tabs/tabs.module.scss";

function DynamicTabs() {
  return (
    <div className={style.tabs}>
      {/* New tabs start */}
      <Tabs>
        <div className="container pt-2 pb-6">
          <div className="row tab-inner-sofa-row">
            <TabList>
              <Tab>
                <div className="tab-inner-sofa">
                  <Image
                    src="/assets/images/banner/Group 611.png"
                    width={50}
                    height={50}
                  />
                  <p>Divan bed</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  {" "}
                  <Image
                    src="/assets/images/banner/Group 686.svg"
                    width={50}
                    height={50}
                  />
                  <p>Mattress</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  <Image
                    src="/assets/images/banner/Group 688.svg"
                    width={50}
                    height={50}
                  />
                  <p>Headboard</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  <Image
                    src="/assets/images/banner/Group 687.svg"
                    width={50}
                    height={50}
                  />
                  <p>Garden Furniture</p>
                </div>
              </Tab>
            </TabList>
          </div>
        </div>

        <TabPanel>
          <div className="row">
            <h1>tab1</h1>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "3px", marginBottom: "-30px" }}
          >
            <button
              className="ShopMobile"
              style={{
                color: "#ffffff",
                backgroundColor: "rgb(38, 40, 132)",
                borderRadius: "6px",
                fontSize: "15px",
                padding: "12px 20px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                marginTop: "",
                marginBottom: "",
              }}
            >
              <b>VIEW ALL PRODUCT</b>
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <h1>tab 2</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <h1>tab 3</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <h1>tab4</h1>
          </div>
        </TabPanel>
      </Tabs>
      {/* New tabs end */}
    </div>
  );
}

export default DynamicTabs;
