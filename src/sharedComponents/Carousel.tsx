import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
type carouselprops = {
  children: ReactNode;
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 90,
  },
};
const CarouselComponent = ({ children }: carouselprops) => {
  return (
    <Carousel
      rtl={true}
      arrows={false}
      partialVisible={true}
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-5-px"
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
