import React from "react";
import { useParams, Outlet } from "react-router-dom";
import useFetchGovernorateDetails from "../../customHooks/useFetchGoveronrateDetails";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "../../sharedComponents/Carousel";
import Outline from "../../sharedComponents/Outline";
import { useAppSelector } from "../../app/hooks";
import PlaceImg from "./PlaceImg";
type paramsType = {
  placeId: string | undefined;
};
const PlaceDetails = () => {
  const { placeId } = useParams<paramsType>();
  const places = useAppSelector((state) => state.places);
  if (typeof placeId !== "undefined") {
    const place = places.find((place) => place.id === placeId);
    console.log(place);
    return (
      <>
        <Outlet />
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={11} md={9} lg={5.5}>
            <PlaceImg
              img={"/images/aleppo.jpg"}
              governorateName={place?.city}
              isFavorite={false}
              rate={4.2}
            />
          </Grid>
          <Grid item xs={11} md={9} lg={5.5}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Typography variant="h4">{place?.name}</Typography>
                <Typography
                  variant="h5"
                  color={"GrayText"}
                >{`(${place?.place_type})`}</Typography>
              </Stack>
              <Typography color={"GrayText"}>
                {
                  "lafa ldfal lfawf flaaaaaaaaaaaaaafa gflggggggggggggga  lagggggggggggggggg aglg lal gtlg agl lalgalg la llgal g"
                }
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </>
    );
  } else
    return (
      <>
        <Outlet />
      </>
    );
};

export default PlaceDetails;
