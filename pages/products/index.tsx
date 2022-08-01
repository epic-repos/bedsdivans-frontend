import NextSEO from "layout/nextseo";
import Image from "next/image";
import React from "react";
import styles from "styles/NewProductPage.module.scss";
import { Tab, Tabs, Row, Col, Nav, Button } from "react-bootstrap";
import ScaleIcon from "icons/scale";
import BestSellingBeds from "./demo";

const NewProductPage = () => {
  const [tabs, setTabs] = React.useState("BedSize");

  const RenderTabsArray = [
    {
      title: "BedSize",
      component: BedSize,
    },
    {
      title: "Color",
      component: BedColor,
    },
    {
      title: "HeadBoard",
      component: BedHeadBoard,
    },
    {
      title: "Storage",
      component: BedStorage,
    },
    {
      title: "Feet",
      component: BedFeet,
    },
    {
      title: "Mattress",
      component: BedMattress,
    },
  ];

  const RenderTabs = () => {
    switch (tabs) {
      case "BedSize":
        return <BedSize />;
      case "Color":
        return <BedColor />;
      case "HeadBoard":
        return <BedHeadBoard />;
      case "Storage":
        return <BedStorage />;
      case "Feet":
        return <BedFeet />;
      case "Mattress":
        return <BedMattress />;
      default:
        return null;
    }
  };

  const onTabSelect = React.useCallback(
    (value: string) => {
      setTabs(value);
    },
    [tabs]
  );

  const [tabIndex, settabIndex] = React.useState(
    RenderTabsArray.findIndex((data) => data.title === tabs)
  );
  const onClickNext = () => {
    // console.log(index)
    if (tabIndex < RenderTabsArray.length) {
      settabIndex((i) => i + 1);
      setTabs(RenderTabsArray[tabIndex].title);
    }

    // console.log(RenderTabsArray[index+1].title)
  };
  return (
    <React.Fragment>
      <div>
        <NextSEO title={"Dbz beds "} />
        {/* Gufran  */}
        <div className={styles.imageContainer}>
          <img src="/images/bed.png" className={styles.image} />
          <div className={styles.container}>
            <div className={styles.item1}>
              <div className={styles.left}>
                {RenderTabsArray.map((data, index) => (
                  <React.Fragment>
                    <TabButton
                      key={index}
                      onClick={() => onTabSelect(data.title)}
                      title={data.title}
                      isactive={data.title === tabs}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.right}>
                <ContentHeader
                  title={
                    RenderTabsArray.find((data) => data.title === tabs)?.title
                  }
                  onClickNext={onClickNext}
                />
                <RenderTabs />
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.summary}>
                <div className={styles.priceitemsummary}>
                  <div>
                    <h5>Total Price</h5>
                    <span>£450.00</span>
                  </div>
                  <div className={styles.numberaddcard}>
                    <div>
                      <input
                        type="number"
                        className={styles.numbertextarea}
                      ></input>
                    </div>
                    <div>
                      <Button className={styles.addcart}> Add the cart</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERE */}
    <BestSellingBeds/>
    </React.Fragment>
  );
};
export default NewProductPage;

interface ContentHeaderProps {
  title?: string;
  onClickNext?: () => void;
}

const ContentHeader = ({ title, onClickNext }: ContentHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.headertitle}>
        <h1>{title}</h1>
      </div>
      <div>
        <Button onClick={onClickNext} className={styles.btn}>
          Next
        </Button>
      </div>
    </div>
  );
};

const BedSize = () => {
  return (
    <React.Fragment>
      <div className={styles.color}>
        <ul className={styles.texture}>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
const BedColor = () => {
  return (
    <React.Fragment>
      <div className={styles.color}>
        <div>
          <div className={styles.heading}>
            <span>plush velvet</span>
          </div>

          <div className={styles.colorimage}>
            <ul className={styles.texture2}>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.heading}>
            <span>Malham Weave</span>
          </div>

          <div className={styles.colorimage}>
            <ul className={styles.texture2}>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.heading}>
            <span>Firenza Velour</span>
          </div>

          <div className={styles.colorimage}>
            <ul className={styles.texture2}>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
              <li>
                <Image
                  src="/images/berry.jpg"
                  width={60}
                  height={60}
                  alt=""
                  className={styles.imagestyle2}
                />
                <span className={styles.name}> 3ft single </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const BedHeadBoard = () => {
  return (
    <React.Fragment>
      <div className={styles.color}>
        <ul className={styles.texture}>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>

          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>
              {" "}
              3ft single
              <span className={styles.price}> £400.00</span>
            </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
const BedStorage = () => {
  return (
    <React.Fragment>
      <div>
        <ul className={styles.texture}>
          <li>
            <Image src="/images/bed1.jpg" width={100} height={56} alt="" />
            <span className={styles.name}>Front lift</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
const BedFeet = () => {
  return (
    <React.Fragment>
      <div className={styles.summary}>
        <h3>How its looking?</h3>
        <ul className={styles.chooseitemdetail}>
          <li>Bed Size : 3ft Single £400.00</li>
          <li>Fabric : Saxon Twill - Grey +£50.00</li>
          <li>Headboard : Garland</li>
        </ul>
        <div className={styles.priceitemsummary}>
          <div>
            <h5>Total Price</h5>
            <span>£450.00</span>
          </div>
          <div className={styles.numberaddcard}>
            <div>
              <input type="number" className={styles.numbertextarea}></input>
            </div>
            <div>
              <Button className={styles.addcart}> Add the cart</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const BedMattress = () => {
  return (
    <React.Fragment>
      <div>Mattress</div>
    </React.Fragment>
  );
};

interface TabButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  isactive?: boolean;
}
const TabButton = (props: TabButtonProps) => {
  const styleActive = {
    background: props.isactive ? "#fff" : "#0e3f70",
  };
  const color = props.isactive ? "#000" : "#fff";
  return (
    <div style={styleActive} className={styles.imageicon} {...props}>
      <ScaleIcon fill={color} />
      <span style={{ color: color }}>{props.title}</span>
    </div>
  );
};




