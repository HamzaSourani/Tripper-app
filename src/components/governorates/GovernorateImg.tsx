import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconTextStack from "../../sharedComponents/IconTextStack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
type governorateImgProps = { img: string; governorateName: string };
const GovernorateImg = ({ img, governorateName }: governorateImgProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        pt: "55%",
        width: "100%",
        boxShadow: 2,
        borderRadius: ".5rem",
      }}
    >
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
        src={img ? img : "/images/aleppo.jpg"}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(0deg,rgb(9 0 150 / 28%), transparent)",
          borderRadius: "inherit",
        }}
      ></Box>
      <IconTextStack
        sx={{ display: { lg: "none" } }}
        _onClick={() => navigate(-1)}
        top={20}
        left={20}
      >
        <ArrowForwardIcon />
      </IconTextStack>
      <IconTextStack bottom={20} right={20}>
        <>
          <LocationOnIcon color="primary" />
          <Typography
            color={"GrayText"}
          >{`سورية، ${governorateName}`}</Typography>
        </>
      </IconTextStack>
    </Box>
  );
};

export default GovernorateImg;
