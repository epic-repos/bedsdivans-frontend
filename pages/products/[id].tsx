/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import ArrowLeft from "icons/ArrowLeft";
import ArrowRight from "icons/ArrowRight";
import PerPageLayout from "layout/perpage";
import css from "styles/product/page.module.scss";

const bedStorageArray = [
  {
    text: "No Drawers",
    value: "no-drawers",
  },
  {
    text: "2 Drawers – £45",
    value: "2-drawers-45",
  },
];

const NewProductPage = () => {
  const imageRef = React.useRef(null);
  const src = "/grey-linen.jpeg";
  const [style, setStyle] = React.useState<React.CSSProperties>({
    backgroundSize: "cover",
    backgroundPosition: "0% 0%",
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
  });
  const handleMouseMove = React.useCallback(
    (e: any) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setStyle({
        ...style,
        backgroundPosition: `${x}% ${y}%`,
      });
    },
    [style]
  );

  return (
    <div>
      <div className="container">
        <div className={`${css["grid"]}`}>
          <div className={`${css["left"]}`}>
            <div className={css["product-image"]}>
              <figure
                ref={imageRef}
                style={style}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src="/grey-linen.jpeg"
                  alt="Grey-linen"
                  height={424}
                  width={600}
                />
              </figure>
            </div>
            <ImageCarousel
              selected={(value) => console.log(value)}
              imagesArray={[
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
                {
                  source: "/grey-linen.jpeg",
                },
              ]}
            />
            <div className={css.year_warranty}>
              <ul>
                <li>
                  <Image
                    src="/one-year-warranty-1.jpg"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/free-delivery2.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/made-in-britain3.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/trust-pilot4.png"
                    height={132}
                    width={132}
                    alt="short-image"
                  ></Image>
                </li>
              </ul>
              <p>1 Year Warranty * Made in Britain</p>
              <ul>
                <li>
                  <Image
                    src="/headboard1.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/2-drawers-1-either-side2.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/2-drawers-same-side3.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/4-drawers4.png"
                    height={79}
                    width={132}
                    alt="headboard"
                  ></Image>
                </li>
              </ul>
              <p>Headboard can be fixed on both ends of the beds</p>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["product-name"]}>
              <h1>
                Grey Linen Divan Bed Base or Set Headboard & Mattress Free Uk
                Delivery
              </h1>
            </div>
            <div className={css["trustpilot"]}>
              <a href="">
                <img
                  src="/Trustpilot-4.5-Stars-300x63.png"
                  alt="trustpilot"
                  height={26}
                  width={125}
                  style={{ marginLeft: "10px" }}
                />
                <span>(1175)</span>
                <img
                  src="/Trustpilotlogo-300x822nd.webp"
                  alt="trustpilot-logo"
                  height={34}
                  width={125}
                  style={{ marginLeft: "15px" }}
                />
              </a>
            </div>
            <div className={css["coupon"]}>
              <span>
                Get 10% off on all products minimum spend of £250 "Coupon
                Code:EXTRA10"
              </span>
            </div>
            <div className={css["price"]}>
              <p>
                <span>£</span>
                <span>89.00</span>
              </p>
            </div>
            <div className={css["product-options"]}>
              <div className={css["colors"]}>
                <label>
                  <span style={{ color: "red" }}>*</span>
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    Choose Colour
                  </span>
                </label>
                <div className={css["color-options"]}>
                  <ul>
                    <a>
                      <li>
                        <img
                          src="/images/grey-linen.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/silver-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/white-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/blue-plush.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/grey-suede.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/black-venice.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      {" "}
                      <li>
                        <img
                          src="/images/cream-chenille.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      {" "}
                      <li>
                        <img
                          src="/images/black-leather.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/black-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/champagne-crushed.webp"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                    <a>
                      <li>
                        <img
                          src="/images/pink-crushed.png"
                          alt="grey-linen"
                          height={33}
                          width={33}
                        ></img>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
              <SelectOption
                dataArray={bedStorageArray}
                label="Select Your Size"
              />
              <SelectOption
                dataArray={bedStorageArray}
                label="Storage Options"
              />
              <SelectOption
                dataArray={bedStorageArray}
                label="Select Your Feet"
              />
              <SelectOption
                dataArray={bedStorageArray}
                label="Select Your Headboard"
              />
              <SelectOption
                dataArray={bedStorageArray}
                label="Select Your Mattress"
              />
            </div>
            <div>
              <AddToBasket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductPage;

NewProductPage.getLayout = PerPageLayout;

interface SelectOptionProps extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  dataArray: {
    text: string;
    value: string;
  }[];
}

const SelectOption = (props: SelectOptionProps) => {
  const { label, dataArray, ...rest } = props;
  return (
    <div className={css["select-size"]}>
      <label>{props.label}</label>
      <div className={css["dropdown"]}>
        <select {...rest}>
          {dataArray.map((data, index) => {
            return (
              <option key={index} value={data.value}>
                {data.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

interface AddToBasketProps {}
const AddToBasket = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = React.useCallback(() => {
    setCount((i) => i + 1);
  }, []);
  const decreaseCount = React.useCallback(() => {
    if (count > 0) {
      setCount((i) => i - 1);
    }
  }, [count]);

  return (
    <div>
      <div className={css["basket-row"]}>
        <div className={css["basket-count"]}>
          <button onClick={decreaseCount}>-</button>
          <div className={css["input"]}>
            <input type={"number"} value={count} />
          </div>
          <button onClick={increaseCount}>+</button>
          <button className={css["addToBasket"]}>ADD TO BASKET</button>
        </div>
        <button className={css["size-guide"]}>SIZE GUIDE</button>
      </div>
    </div>
  );
};

interface ImageTypes {
  source: string;
  [K: string]: any;
}

interface ImageCarouselProps {
  imagesArray: ImageTypes[];
  selected: (value: ImageTypes) => void;
}

const ImageCarousel = ({ imagesArray, selected }: ImageCarouselProps) => {
  const containerRef = React.useRef<HTMLUListElement>(null);
  const gapping = 10;
  const imageWidth = 100;
  const totalScroll = imageWidth + gapping;

  const scrollLeft = React.useCallback(() => {
    containerRef.current?.scrollBy({
      behavior: "smooth",
      left: -totalScroll,
    });
  }, [totalScroll]);
  const scrollRight = React.useCallback(() => {
    containerRef.current?.scrollBy({
      behavior: "smooth",
      left: totalScroll,
    });
  }, [totalScroll]);

  const onSelectImage = React.useCallback(
    (data: ImageTypes) => {
      if (selected) {
        selected(data);
      }
    },
    [selected]
  );

  return (
    <div className={css["image-lists"]}>
      <span onClick={scrollLeft} className={css["arrow-left"]}>
        <ArrowLeft color="#fff" size={32} />
      </span>
      <ul ref={containerRef}>
        {imagesArray.map((data, index) => (
          <li key={index} onClick={() => onSelectImage(data)}>
            <img src={data.source} alt="" />
          </li>
        ))}
      </ul>
      <span onClick={scrollRight} className={css["arrow-right"]}>
        <ArrowRight color="#fff" size={32} />
      </span>
    </div>
  );
};
