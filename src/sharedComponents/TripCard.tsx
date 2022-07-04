import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import IconTextStack from "./IconTextStack";
import AvatarGroup from "./AvatarGroup";
import AddToFavorite from "../sharedComponents/AddToFavorite";
import useAddToFavorite from "../customHooks/useAddToFavorite";

type tripCardProps = {
  onClick?: () => void;
  canNotFavorite?: boolean;
};
const TripCard = ({ onClick, canNotFavorite }: tripCardProps) => {
  const [addToFavorite, addToFavoriteHandler] = useAddToFavorite();
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
          onClick={onClick}
          component={"img"}
          src="/images/aleppo.jpg"
        ></Box>

        {!canNotFavorite && (
          <Stack
            sx={{
              position: "absolute",
              bottom: 20,
              left: { xs: 10, md: 20 },
              borderRadius: "50%",
              backgroundColor: "white",
              p: 1,
              boxShadow: 3,
              zIndex: "tooltip",
            }}
            justifyContent={"center"}
            alignItems="center"
            onClick={addToFavoriteHandler}
          >
            <AddToFavorite addToFavorite={addToFavorite} />
          </Stack>
        )}
        <IconTextStack right={{ xs: 10, md: 20 }} top={{ xs: 10, md: 20 }}>
          <Typography color={"text.primary"} variant="body1">
            يوم1
          </Typography>
          <AccessTimeIcon color="primary" />
        </IconTextStack>
        <IconTextStack left={{ xs: 10, md: 20 }} top={{ xs: 10, md: 20 }}>
          <Typography color={"text.primary"} variant="body1">
            15 نيسان
          </Typography>
          <DateRangeIcon color="primary" />
        </IconTextStack>
        <AvatarGroup
          right={{ xs: 10, md: 20 }}
          bottom={{ xs: 10, md: 20 }}
          subscribers={[1, 2, 3, 4, 5]}
        >
          <Typography color={"white"}>24/+14</Typography>
        </AvatarGroup>
      </Box>
      <Typography
        style={{ marginRight: "12px" }}
        variant="body1"
        color={"GrayText"}
      >
        ghgrheh hearh h erharhrf{" "}
      </Typography>
    </Stack>
  );
};

export default TripCard;
