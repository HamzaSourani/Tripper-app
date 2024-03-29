import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { mountComment } from "../features/PlaceAddCommentSlice";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconTextStack from "./IconTextStack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AvatarGroup from "./AvatarGroup";
import CommentIcon from "@mui/icons-material/Comment";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import AddToFavorite from "../sharedComponents/AddToFavorite";
import useAddToFavorite from "../customHooks/useAddToFavorite";
import placeCardsType from "../sharedType/placeCardsType";
type placeType = {
  props: placeCardsType;
  onClick: () => void;
};
const PlaceCard = ({ onClick, props }: placeType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [favorites, setFavorites] = React.useState<number>(props.favorites);
  const addCommentHandler = () => {
    dispatch(mountComment());
    navigate(`/place/${props.id}`);
  };
  const [addToFavorite, addToFavoriteHandler] = useAddToFavorite({
    data: {
      favorable_type: "place",
      favorable_id: props.id,
      itIsFavorite: Boolean(
        props.favorites_relation ? props.favorites_relation.length : 1
      ),
    },
    setFavorites: setFavorites,
    favorites: favorites,
  });

  const handlerAddToFavorite = () => {
    addToFavoriteHandler();
  };
  return (
    <Stack
      sx={{ boxShadow: 3, pb: 1, borderRadius: ".5rem" }}
      justifyContent={"center"}
      alignItems={"start"}
      spacing={1}
    >
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
          src={props.media[0] ? props.media[0].original_url : ""}
        ></Box>

        <IconTextStack left={{ xs: 10, md: 20 }} top={{ xs: 10, md: 20 }}>
          <>
            <LocationOnIcon color="primary" />
            <Typography color={"GrayText"}>{`سورية، ${props.city}`}</Typography>
          </>
        </IconTextStack>
        <AvatarGroup
          right={{ xs: 10, md: 20 }}
          bottom={{ xs: 10, md: 20 }}
          subscribers={[1, 2, 3, 4, 5]}
        >
          <Typography color={"white"}>24/+14</Typography>
        </AvatarGroup>
      </Box>
      <Stack
        sx={{ pl: 1 }}
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
      >
        <Typography color={"MenuText"}>{props.name}</Typography>
        <Typography color={"GrayText"}>{`(${props.place_type})`}</Typography>
      </Stack>
      <Grid container alignItems={"center"} sx={{ pl: 1 }}>
        <Grid item xs={3}>
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={1}
            onClick={handlerAddToFavorite}
          >
            <AddToFavorite
              addToFavorite={addToFavorite}
              itIsFavorite={Boolean(
                props.favorites_relation ? props.favorites_relation.length : 1
              )}
            />
            <Typography>{favorites}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            onClick={addCommentHandler}
            direction={"row"}
            alignItems="center"
            spacing={1}
          >
            <CommentIcon
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              color="primary"
            />
            <Typography>{props.comment}</Typography>
          </Stack>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end">
          <Grid item xs={6} sm={5}>
            <Stack direction={"row"} alignItems="center" spacing={1}>
              <StarIcon sx={{ color: "var(--golden-color)" }} />
              <Typography>{props.review}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PlaceCard;
