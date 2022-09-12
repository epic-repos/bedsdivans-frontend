import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "styles/commerce/order.module.scss";

import CommerceLayout from "components/admin/commerce/layout";
import DeleteIcon from "icons/delete";
import ViewIcon from "icons/view";
import EditIcon from "icons/edit";
import Select from "components/admin/element/select";
import Input from "components/admin/element/input";
import Textarea from "components/admin/element/textarea";
import AddMoreButton from "components/admin/element/addmore";
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
              <div className={Styles.tabbox}>
                {/* {activeTab} */}
                <TabsRender tabName={activeTab} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </CommerceLayout>
  );
}

export default CreateProduct;

const TabsRender = ({ tabName }: any) => {
  switch (tabName) {
    case "General":
      return (
        <div className="tabcontantinner">
          <h1>General</h1>
          <div className="box">
            <ul>
              <li>
                <Input type="text" label={"Product Name"} />
              </li>
              <li>
                <Textarea label="Product Description" />
              </li>
              <li className="row">
                <Select
                  // multiple
                  options={[
                    { text: "Available Sizes", value: "" },
                    { text: "2 Feet", value: "Bye" },
                    { text: "3 Feet", value: "Bye" },
                    { text: "4 Feet", value: "Bye" },
                    { text: "5 Feet", value: "Bye" },
                    { text: "6 Feet", value: "Bye" },
                    { text: "9 Feet", value: "Bye" },
                  ]}
                  label={"Select Size"}
                />
                <Input type="file" label={"Featured Image"} accept="image/*" />
              </li>
              <li>
                <Select
                  // multiple
                  options={[
                    { text: "Select", value: "" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                  ]}
                  label={"Select Category"}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-md-6">
                    <Input type="text" label={"Base Price"} />
                  </div>
                  <div className="col-md-6">
                    <Input type="text" label={"Price"} />
                  </div>
                </div>
              </li>
            </ul>
            <div className={Styles.buttonsection}>
              <AddMoreButton title="Next" />
            </div>
          </div>
        </div>
      );
    // case "Size":
    //   return (
    //     <div className="tabcontantinner">
    //       <h1>Size</h1>
    //       <div className="box">
    //         <ul>
    //           <li>
    //             <Select
    //               // multiple
    //               options={[
    //                 { text: "Select", value: "" },
    //                 { text: "Hello", value: "Bye" },
    //                 { text: "Hello", value: "Bye" },
    //                 { text: "Hello", value: "Bye" },
    //                 { text: "Hello", value: "Bye" },
    //                 { text: "Hello", value: "Bye" },
    //               ]}
    //               label={"Select Category"}
    //             />
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   );
    case "Color":
      return (
        <div className="tabcontantinner">
          <h1>Color</h1>
          <div className="box">
            <ul>
              <li className="row">
                <Select
                  // multiple
                  options={[
                    { text: "Select", value: "" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                    { text: "Hello", value: "Bye" },
                  ]}
                  label={"Select Category"}
                />
                <Input type="file" label={"Featured Image"} accept="image/*" />
              </li>
            </ul>
          </div>
        </div>
      );
    case "HeadBoard":
      return (
        <div className="tabcontantinner">
          <h1>HeadBoard</h1>
        </div>
      );
    case "Storage":
      return (
        <div className="tabcontantinner">
          <h1>Storage</h1>
        </div>
      );
    case "Feet":
      return (
        <div className="tabcontantinner">
          <h1>Feet</h1>
        </div>
      );
    case "Mattress":
      return (
        <div className="tabcontantinner">
          <h1>Mattress</h1>
        </div>
      );

    default:
      return null;
  }
};

const TabArray = [
  {
    value: "General",
  },
  // {
  //   value: "Size",
  // },
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
