import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowProps } from "react-multi-carousel/lib/types";
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

export default CustomLeftArrow;
