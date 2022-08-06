import React, { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useFetchGovernorateDetails from "../../customHooks/useFetchGoveronrateDetails";
import GovernorateImg from "./GovernorateImg";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "../../sharedComponents/crarousel/Carousel";
import Outline from "../../sharedComponents/Outline";
import TripCard from "../../sharedComponents/TripCard";
import PlaceCard from "../../sharedComponents/PlaceCard";
import useFetchTrips from "../../customHooks/useFetchTrips";
import useFetchPlaces from "../../customHooks/useFetchPlaces";
import useFetchPlacesType from "../../customHooks/useFetchPlacesType";
import { multiItem } from "../../sharedData/carouselResponsive";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";
import placeCardsType from "../../sharedType/placeCardsType";
type paramsType = {
  governorateId: string | undefined;
};

const GovernorateDetails = () => {
  const { governorateId } = useParams<paramsType>();
  const navigate = useNavigate();

  const placeTypes = useAppSelector(
    (state: RootState) => state.placeType.placeTypes
  );
  const [section, setSection] = React.useState<string>("أماكن أثرية");
  const [specificPlaces, setSpecificPlaces] = React.useState<
    placeCardsType[] | []
  >([]);

  const isthereGover =
    typeof governorateId !== "undefined" ? Number(governorateId) : 1;
  const [fetchGovernorateDetailsStatus, governorateDetails] =
    useFetchGovernorateDetails(isthereGover);

  const [fetchTripsStatus, trips] = useFetchTrips(
    `filter[city_id]=${governorateId}`
  );
  const [fetchPlacesStatus, places] = useFetchPlaces(
    `filter[city_id]=${governorateId}`
  );

  useEffect(() => {
    let _specificPlaces = places.filter(
      (place) => place.place_type === section
    );
    setSpecificPlaces(_specificPlaces as placeCardsType[] | []);
  }, [places, section]);

  if (
    typeof governorateId !== "undefined" &&
    typeof governorateDetails !== "undefined"
  ) {
    return (
      <>
        <Outlet />
        {(isLoading(fetchTripsStatus) ||
          isLoading(fetchPlacesStatus) ||
          isLoading(fetchGovernorateDetailsStatus)) && <Loading />}
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={11} md={9} lg={5.5}>
            <GovernorateImg
              img={governorateDetails.media[0].original_url}
              governorateName={governorateDetails.name}
            />
          </Grid>
          <Grid item xs={11} md={9} lg={5.5}>
            <Stack spacing={2}>
              <Typography variant="h4">{`مدينة ${governorateDetails.name}`}</Typography>
              <Typography color={"GrayText"}>
                {governorateDetails.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={11}>
            <Outline
              title={`الرحلات ضمن مدينة ${governorateDetails.name}`}
              navigateTo={`/governorate/${governorateId}/trips`}
            />
            <Carousel responsive={multiItem}>
              {trips.map((trip) => {
                return (
                  <TripCard key={trip.id} props={trip} canNotFavorite={false} />
                );
              })}
            </Carousel>
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "30Px", md: "35px", lg: "40px" },
                fontWeight: { sx: "defualt", md: "700" },
              }}
            >
              اقسام المدينة
            </Typography>
            <Stack
              sx={{ my: 2 }}
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
            >
              {placeTypes.map((_section, index) => {
                return (
                  <Button
                    key={_section.id}
                    variant={section === _section.name ? "outlined" : "text"}
                    sx={{ boxShadow: 2 }}
                    onClick={() => setSection(_section.name)}
                  >
                    {_section.name}
                  </Button>
                );
              })}
            </Stack>
            <Grid
              container
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems="center"
              spacing={2}
            >
              {specificPlaces.map((place, index) => {
                return (
                  <Grid key={place.id} item xs={11} sm={6} md={4}>
                    <PlaceCard
                      key={index}
                      props={place}
                      onClick={() => navigate(`/place/${place.id}`)}
                    />
                  </Grid>
                );
              })}
            </Grid>
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

export default GovernorateDetails;
