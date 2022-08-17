/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import NextSEO from "layout/nextseo";
import Style from "styles/HomePage/home.module.scss";
import styles from "styles/NewProductPage.module.scss";
import ProductDetailTab from "components/detailtab";
import AddIcon from "icons/add";

const BestSellingBeds = () => {
  const [tabName, setTabName] = useState("Overview");

  const renderContent = React.useMemo(() => {
    switch (tabName) {
      case `Overview`:
        return <Overview/>
      case `Dimensions`:
        return <Dimensions/>
      case `Reviews`:
        return <Reviews/>
      case `Terms & Conditions`:
        return <TermsConditions/>
      default:
        return null;
    }
  }, [tabName]);
  return (
    <div>
      <div className={styles.banner}>
        <Image
          src="/images/klarna-banner.png"
          width={1500}
          height={200}
          alt=""
          className={styles.bannerimage}
        />
      </div>

      <section className="tabsection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ProductDetailTab defaultTab={tabName} onTabClick={(value) => setTabName(value)} />
              <div>{renderContent}</div>
            </div>
          </div>
        </div>
      </section>


      <section  className="faqsection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h2>FAQ</h2>
            </div>
            <div className="col-md-12">
                {FAQArray.map((data, index) => (
                  <FAQList key={index} index={index} {...data} />
                ))}
              </div>
          </div>
        </div>
       
        
      </section>

      <section className={styles.productsimages}>
        <div className={`${styles.containers} container`}>
          <div className={styles.mainh2}>
            <h2>Best Selling Beds</h2>
          </div>
          <div className={styles.productcart}>
            <div className={styles.box1}>
              <img src="/img/gk.jpg" alt="img" width={258} height="210" />
              <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
              </h2>
              <div className={styles.trustpilot}>
                <img src="/image/tru.png" alt="img" />
              </div>
              <p className={styles.price}>
                £600.00<del>£800.00</del>
                <span>10%off</span>
              </p>
            </div>

            <div className={styles.box1}>
              <img src="/img/k.jpg" alt="img" width={258} height="210" />
              <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
              </h2>
              <div className={styles.trustpilot}>
                <img src="/image/tru.png" alt="img" />
              </div>
              <p className={styles.price}>
                £600.00<del>£800.00</del>
                <span>10%off</span>
              </p>
            </div>

            <div className={styles.box1}>
              <img src="/img/gk.jpg" alt="img" width={258} height="210" />
              <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
              </h2>
              <div className={Style.trustpilot}>
                <img src="/image/tru.png" alt="img" />
              </div>
              <p className={styles.price}>
                £600.00<del>£800.00</del>
                <span>10%off</span>
              </p>
            </div>

            <div className={styles.box1}>
              <img src="/img/gk.jpg" alt="img" width={258} height="210" />
              <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
              </h2>
              <div className={styles.trustpilot}>
                <img src="/image/tru.png" alt="img" />
              </div>
              <p className={styles.price}>
                £600.00<del>£800.00</del>
                <span>10%off</span>
              </p>
            </div>
            <div className={styles.box1}>
              <img src="/img/gk.jpg" alt="img" width={258} height="210" />
              <h2 className={styles.productname}>
                Pink Crushed Velvet single divan bed
              </h2>
              <div className={Style.trustpilot}>
                <img src="/image/tru.png" alt="img" />
              </div>
              <p className={styles.price}>
                £600.00<del>£800.00</del>
                <span>10%off</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellingBeds;
//   export { BestSellingBeds}


const Overview=()=>{
  return(
    <div className={styles.tabconatiner}>
    <h3 className={styles.heading}>Why choose this bed frame?</h3>
<ul>
<li>Sleigh style bed with scrolled headboard and foot end</li>
<li>2 large storage drawers, 14 cm deep (single has 1 drawer that can be placed on either side)</li>
<li>Upholstered in a choice of dark brown faux leather, or woven fabric in silver or dark grey</li>
<li> Sprung slat upgrade available for better shock absorption and cushioned support</li>
<li>Rest easy with our 1-year guarantee</li>
</ul>

    <p className={styles.tabcontent} >
    Our Lucia Upholstered Bed Frame is the ultimate in luxurious comfort and style. Its softly curved sleigh design is a modern twist on the classic shape. The Lucia is practical and space-saving too, thanks to its large storage drawers. You can keep spare bed linen hidden away and dust-free.
      </p>

      <h3 className={styles.heading}> Assembly details:</h3>
      <p> Instructions download: 3'0 single | 4'6 double And 5'0 king </p>
      <p>Build time: 3'0 single - 2 people - 40 minutes | : 4'6 double & 5'0 king - 2 people - 1 hour</p>
      <h3 className={styles.heading}>Additional information:</h3>
      <p>Matching bedside chest is available, as well as our Lucia / Wilson blanket box in silver to complete the look.</p>
      <p>The underbed drawer storage depth is 14cm and the space from the head end to the drawer opening – to accommodate a bedside table – is 52cm.</p>
      <p>For even more fabulous features to improve your sleep, why not consider our Sleepmotion offering for this bed which adjusts for your individual needs at the touch of a button.</p>
      <p>Mattresses available separately - start shopping our range of mattresses.</p>
      <p>For your peace of mind, our Bedcover Service Plan lets you rest easy about the looks, comfort and performance of your new mattress, bed or furniture with cover of up to 8 years.</p>


    </div>
  )
}
const Dimensions=()=>{
  return(
    <div className={styles.tabconatiner}>
      <br />
      <div className="row">
        <div className="col-md-6">
<div className="dimensionsbox">
  <img src="../product/Dim-images-16.png" height={295} width={480} />
</div>

        </div>
        <div className="col-md-6">
<div className="dimensionsboxtable">
  <table>
    <tbody>
      <tr>
        <th>A - Height</th>
        <td>37cm</td>
        <td>15inch</td>
      </tr>
      <tr>
        <th>B - Length	</th>
        <td>190cm</td>
        <td>75inch</td>
      </tr>
      <tr>
        <th>C - Width	</th>
        <td>135cm</td>
        <td>54inch</td>
      </tr>
    </tbody>
  </table>
</div>


        </div>
      </div>
    </div>
  )
}
const Reviews=()=>{
  return(
    <div className={styles.tabconatiner}>
      <h3 className={styles.heading}> Reviews </h3>
      <p className={styles.tabcontent}  >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sint odit explicabo ea saepe laudantium! Optio earum id dolorem aspernatur perferendis repudiandae laboriosam quae distinctio qui sint voluptates, eveniet quas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit itaque quia nisi alias minima non, molestias dolor nulla saepe? Nulla eligendi necessitatibus eveniet delectus nobis? Neque voluptatem aperiam dignissimos!
      </p>
    </div>
  )
}
const TermsConditions=()=>{
  return(
    <div className={styles.tabconatiner}>
     <h3 className={styles.heading}>Terms & Conditions</h3>
     <p className={styles.tabcontent}  >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sint odit explicabo ea saepe laudantium! Optio earum id dolorem aspernatur perferendis repudiandae laboriosam quae distinctio qui sint voluptates, eveniet quas?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ex aliquam atque maiores culpa odio provident voluptatem illum, ducimus vel quam nobis dolorem iste, fugit soluta ipsam eius eum est!
      </p>
    </div>
  )
}


const FAQList = ({ question, answer, index }:any) => {
  const [isOpen, setOpen] = React.useState(index === 0 || false);
  const onClickButton = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <ul onClick={onClickButton} >
        <li className="heading"> <div className="icon"><AddIcon
            style={{
              transform: `rotate(${isOpen ? "45deg" : "90deg"})`,
              transition: "all 150ms ease",
              fill: "#000000",
            }}
          /></div>
          <h4 >{question}</h4>
        </li>
        <li className="contanttext" style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "all 150ms ease",
          padding: 0,
          marginTop:"15px",
          color: "#838383",
        }}>
          <p>{answer}</p>
        
        </li>
      </ul>
       
    </React.Fragment>
  );
};


const FAQArray = [
  {
    question: `Do you offer a free trial?`,
    answer: `Yes, we do.`,
  },
  {
    question:
      "Do I need to have a registered company to sell on my own website?",
    get answer() {
      return "Yes, you should have registered company to create your digital catalog.";
    },
  },
  {
    question:
      "How long have you been an e-commerce product uploading service provider?",
    get answer() {
      return " OMRA Solutions are working on e-commerce product uploading from more than 2+ years.";
    },
  },
  {
    question: "What exposure we have with the e-commerce industry?",
    get answer() {
      return "It has been over four years  that we have been working in the e-commerce domain and know exactly what it takes to get it right and increase the online conversions.";
    },
  },
  {
    question: "Where do you have your client base?",
    get answer() {
      return "We have experience in successfully delivering e-commerce Catalog outsourcing services to our offshore clients spanning India & Dubai.";
    },
  },
];