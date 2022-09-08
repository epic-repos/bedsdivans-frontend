import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "styles/commerce/order.module.scss";

import CommerceLayout from "components/admin/commerce/layout";
import DeleteIcon from "icons/delete";
import ViewIcon from "icons/view";
import EditIcon from "icons/edit";
// const [dropWDownload, dropWDownloadActive] = useState(false);

function CreateProduct() {
  const [activeTab, setActiveTab] = React.useState("General");

  const onActiveTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    <CommerceLayout>
      <div className={Styles.rightsidebar}>
        <div className={Styles.topheaderdashboard}>
          <div className={Styles.leftside}>
            <div className={Styles.topsearch}>
              <input type="text" placeholder="Type Hare...." />
              <button>
                <Image
                  src="/icons/search-line.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className={Styles.rightside}>
            <div className={Styles.dropdownaction}>
              <div className={Styles.userimagewithtext}>
                <div className={Styles.image}>
                  <Image
                    src="/icons/user-line.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={Styles.text}>Acme Inc.</div>
              </div>
              {/* <ul className="dropnav">
                  <li>
                    <Link href="#">
                      <a>
                        <span>Settings</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <span>Sign Out</span>
                      </a>
                    </Link>
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
        <main className={Styles.main}>
          <div className={Styles.containerbox}>
            <div className={Styles.mainheading}>Create Product</div>

            <div
              className={` ${Styles.tablebox} ${Styles.mt2} ${Styles.productuploadtabbox}`}
            >
              <ul className={Styles.productuploadtab}>
                {TabArray.map(({ value }, index) => {
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
              <div className={Styles.tabbox}>{activeTab}</div>
            </div>
          </div>
        </main>
      </div>
    </CommerceLayout>
  );
}

export default CreateProduct;

const TabArray = [
  {
    value: "General",
  },
  {
    value: "Size",
  },
  {
    value: "Color",
  },
  {
    value: "HeadBoard",
  },
  {
    value: "Storage",
  },
  {
    value: "Feet",
  },
  {
    value: "Mattress",
  },
];
