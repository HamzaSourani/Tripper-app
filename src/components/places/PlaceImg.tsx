import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import IconTextStack from "../../sharedComponents/IconTextStack";
import FavoriteIconContainer from "../../sharedComponents/FavoriteIconContainer";
type placeImgProps = {
  img: string;
  governorateName: string | undefined;
  isFavorite: boolean;
  rate: number;
};
const PlaceImg = ({
  img,
  governorateName,
  isFavorite,
  rate,
}: placeImgProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: "75%", md: "55%" },
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
          background: "linear-gradient(0deg,rgba(0,0,150,.5), transparent)",
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

      <IconTextStack bottom={20} right={{ xs: 90, md: 120 }}>
        <>
          <LocationOnIcon color="primary" />
          <Typography
            color={"GrayText"}
          >{`سورية، ${governorateName}`}</Typography>
        </>
      </IconTextStack>
      <IconTextStack bottom={20} right={{ xs: 10, md: 20 }}>
        <>
          <StarIcon sx={{ color: "var(--golden-color)" }} />
          <Typography color={"GrayText"}>{rate}</Typography>
        </>
      </IconTextStack>

      <FavoriteIconContainer />
    </Box>
  );
};

export default PlaceImg;
