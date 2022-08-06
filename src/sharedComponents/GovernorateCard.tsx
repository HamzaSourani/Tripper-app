import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
type governorateCardProps = {
  name: string;
  img: string;

  onClick: () => void;
};
const GovernorateCard = ({ name, img, onClick }: governorateCardProps) => {
  return (
    <Box
      onClick={onClick}
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
        src={img}
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
      <Typography
        sx={{ position: "absolute", left: 20, bottom: 20 }}
        variant="h5"
        color="white"
      >
        {name}
      </Typography>
    </Box>
  );
};

export default GovernorateCard;
