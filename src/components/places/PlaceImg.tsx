import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import IconTextStack from "../../sharedComponents/IconTextStack";
import FavoriteIconContainer from "../../sharedComponents/FavoriteIconContainer";
import { media } from "../../sharedType/placeType";
import ImgCrousel from "../../sharedComponents/ImgCarousel";
type placeImgProps = {
  media?: media[];
  governorateName: string | undefined;
  rate?: number | null;
  favorable_id: string;
  itIsFavorite?: number | null;
};
const PlaceImg = ({
  media,
  governorateName,
  rate,
  favorable_id,
  itIsFavorite,
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
      <ImgCrousel
        imgSrcs={media ? media.map((i) => i.original_url) : ["!", "2", "3"]}
      />

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
          <Typography color={"GrayText"}>{String(rate)}</Typography>
        </>
      </IconTextStack>

      <FavoriteIconContainer
        favorable_type="place"
        favorable_id={favorable_id}
        itIsFavorite={Boolean(itIsFavorite)}
      />
    </Box>
  );
};

export default PlaceImg;
