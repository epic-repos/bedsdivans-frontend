import React from "react";
import ArrowLeft from "icons/ArrowLeft";
import ArrowRight from "icons/ArrowRight";
import css from "styles/product/page.module.scss";

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
        {imagesArray.map((data: any, index) => (
          <li key={index} onClick={() => onSelectImage(data)}>
            <img src={data} alt="image-carousel" />
          </li>
        ))}
      </ul>
      <span onClick={scrollRight} className={css["arrow-right"]}>
        <ArrowRight color="#fff" size={32} />
      </span>
    </div>
  );
};

export default ImageCarousel;
