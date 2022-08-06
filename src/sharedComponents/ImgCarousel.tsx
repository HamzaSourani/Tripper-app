import React, { useState } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type imgCrouselProps = {
  imgSrcs: string[];
};
const ImgCrousel = ({ imgSrcs }: imgCrouselProps) => {
  const [imgSrc, setImgSrc] = React.useState<string>();
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [hideArrowBackButton, setHideArrowBackButton] = useState<boolean>(
    imgSrcs.length >= 3 ? true : false
  );
  const [hideArrowForwardButton, setHideArrowForwardButton] =
    useState<boolean>(false);
  React.useEffect(() => {
    setImgSrc(imgSrcs[carouselIndex]);
  }, [imgSrcs, carouselIndex]);
  React.useEffect(() => {
    if (imgSrcs.length >= 3) {
      if (carouselIndex > imgSrcs.length - 2) setHideArrowForwardButton(true);
      else if (carouselIndex < 1) setHideArrowBackButton(true);
      else {
        setHideArrowForwardButton(false);
        setHideArrowBackButton(false);
      }
    }
  }, [carouselIndex, imgSrcs.length]);

  const handleGoBack = () => {
    setCarouselIndex(carouselIndex - 1);
  };
  const handleGoForward = () => {
    setCarouselIndex((carouselIndex) => carouselIndex + 1);
  };
  console.log(carouselIndex);
  return (
    <>
      {" "}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "-webkit-fill-available",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          borderRadius: "inherit",
        }}
        component={"img"}
        src={imgSrc}
      ></Box>
      <Box
        onClick={handleGoBack}
        sx={{
          position: "absolute",
          display: hideArrowBackButton ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          right: "8%",
          width: 40,
          height: 40,
          backgroundColor: "rgba(255,255,255,.5)",
          backdropFilter: "blur(8px)",
          borderRadius: "50%",
          boxShadow: 3,
          p: 1,
        }}
      >
        <ArrowBackIosNewIcon color={"primary"} />
      </Box>
      <Box
        onClick={handleGoForward}
        sx={{
          position: "absolute",
          display: hideArrowForwardButton ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "8%",
          width: 40,
          height: 40,
          backgroundColor: "rgba(255,255,255,.5)",
          backdropFilter: "blur(8px)",
          borderRadius: "50%",
          boxShadow: 3,
          p: 1,
        }}
      >
        <ArrowForwardIosIcon color={"primary"} />
      </Box>
    </>
  );
};

export default ImgCrousel;
