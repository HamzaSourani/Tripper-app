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
import formatDate from "../sharedFunction/formatDate";
import tripsType from "../sharedType/tripsType";
type tripCardProps = {
  onClick: () => void;
  canNotFavorite?: boolean;
  props: tripsType;
};
const TripCard = ({ onClick, canNotFavorite, props }: tripCardProps) => {
  const [favorites, setFavorites] = React.useState<number>(0);
  const [addToFavorite, addToFavoriteHandler] = useAddToFavorite({
    data: {
      favorable_type: "journey",
      favorable_id: props.id,
      itIsFavorite: Boolean(
        props.favorites_relation ? props.favorites_relation.length : 1
      ),
    },
    setFavorites,
    favorites: favorites,
  });
  const { mounth, day } = formatDate(props.started_at);
  const descriptionEllipses =
    props.description.length > props.description.slice(0, 110).length
      ? `${props.description.slice(0, 110)}...`
      : props.description;
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
            }}
            justifyContent={"center"}
            alignItems="center"
            onClick={addToFavoriteHandler}
          >
            <AddToFavorite
              addToFavorite={addToFavorite}
              itIsFavorite={Boolean(
                props.favorites_relation ? props.favorites_relation.length : 1
              )}
            />
          </Stack>
        )}
        <IconTextStack right={{ xs: 10, md: 20 }} top={{ xs: 10, md: 20 }}>
          <Typography color={"text.primary"} variant="body1">
            يوم{props.number_of_days}
          </Typography>
          <AccessTimeIcon color="primary" />
        </IconTextStack>
        <IconTextStack left={{ xs: 10, md: 20 }} top={{ xs: 10, md: 20 }}>
          <Typography color={"text.primary"} variant="body1">
            {mounth + " " + day}
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
        {descriptionEllipses}
      </Typography>
    </Stack>
  );
};

export default TripCard;
