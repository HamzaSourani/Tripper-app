import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps } from "react-multi-carousel/lib/types";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
type carouselprops = {
  children: ReactNode;
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
    arrows: true,
  },
  desktop: {
    breakpoint: { max: 1400, min: 900 },
    items: 3,
    arrows: true,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    arrows: false,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 90,
    arrows: false,
  },
};
const CustomRightArrow = ({ onClick }: ArrowProps) => {
  return (
    <IconButton
      sx={{
        display: { xs: "none", md: "flex" },
        position: "absolute",
        right: 20,
        color: "var(--golden-color)",
        boxShadow: 3,
        backgroundColor: "var(--primary-color)",
        opacity: 0.9,
        "&:hover": {
          boxShadow: 3,
          backgroundColor: "var(--primary-color)",
          opacity: 1,
        },
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};
const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <IconButton
      sx={{
        display: { xs: "none", md: "flex" },
        position: "absolute",
        left: 20,
        color: "var(--golden-color)",
        boxShadow: 3,
        backgroundColor: "var(--primary-color)",
        opacity: 0.9,
        "&:hover": {
          boxShadow: 3,
          backgroundColor: "var(--primary-color)",
          opacity: 1,
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};
const CarouselComponent = ({ children }: carouselprops) => {
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
