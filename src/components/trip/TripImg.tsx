import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconTextStack from "../../sharedComponents/IconTextStack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AvatarGroup from "../../sharedComponents/AvatarGroup";
const TripImg = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
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
          src={"/images/aleppo.jpg"}
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
        <IconTextStack bottom={20} right={{ xs: 10, md: 20 }}>
          <>
            <StarIcon sx={{ color: "var(--golden-color)" }} />
            <Typography color={"GrayText"}>{4.5}</Typography>
          </>
        </IconTextStack>

        <Stack
          sx={{
            position: "absolute",
            bottom: 20,
            left: { xs: 10, md: 20 },
            borderRadius: "50%",
            backgroundColor: "white",
            p: 1,
            boxShadow: 3,
          }}
          justifyContent={"center"}
          alignItems="center"
        >
          <FavoriteBorderIcon color="primary" />
        </Stack>
      </Box>
      <Stack direction={"row"} spacing={2} alignItems={"center"} sx={{ pl: 1 }}>
        <IconTextStack sx={{ position: "relative" }}>
          <Typography color={"text.primary"} variant="body1">
            15 نيسان
          </Typography>
          <DateRangeIcon color="primary" />
        </IconTextStack>

        <IconTextStack sx={{ position: "relative" }}>
          <Typography color={"text.primary"} variant="body1">
            يوم1
          </Typography>
          <AccessTimeIcon color="primary" />
        </IconTextStack>

        <AvatarGroup
          sx={{ position: "relative", flexGrow: 1 }}
          subscribers={[1, 2, 3, 4, 5]}
        >
          <Typography color={"primary"}>24/+14</Typography>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default TripImg;
