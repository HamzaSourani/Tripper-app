import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ArrowProps } from "react-multi-carousel/lib/types";
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

export default CustomRightArrow;
