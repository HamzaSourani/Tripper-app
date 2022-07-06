import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

type carouselprops = {
  children: ReactNode;
  responsive: {};
};

const CarouselComponent = ({ children, responsive }: carouselprops) => {
  return (
    <Carousel
      rtl={true}
      partialVisible={true}
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-5-px"
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
