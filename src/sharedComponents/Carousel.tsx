import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
type carouselprops = {
  children: ReactNode;
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 60,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};
const CarouselComponent = ({ children }: carouselprops) => {
  return (
    <Carousel
      rtl={true}
      arrows={false}
      partialVisible={true}
      responsive={responsive}
      itemClass="carousel-item-padding-5-px"
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
