import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import media from "../../sharedType/mediaType";
type journeyPlaceProps = {
  description: string;
  media: media[];
};
const JourneyPlace = ({ description, media }: journeyPlaceProps) => {
  return (
    <Stack
      sx={{ boxShadow: 3, pb: 1, borderRadius: ".5rem" }}
      justifyContent={"center"}
      alignItems={"start"}
      spacing={1}
    >
      <Box
        sx={{
          position: "relative",
          pt: "55%",
          width: "100%",
          borderRadius: ".5rem",
          "&:hover": {
            cursor: "pointer",
          },
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
          src={media[0].original_url}
        ></Box>
      </Box>
      <Typography
        sx={{
          px: 1,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",

          marginRight: "12px",
          height: 48,
          overflow: "hidden",

          WebkitLineClamp: 2,
        }}
        variant="body1"
        color={"GrayText"}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default JourneyPlace;
