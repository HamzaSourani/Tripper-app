import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import GovernorateCard from "../sharedComponents/GovernorateCard";
import TripCard from "../sharedComponents/TripCard";
import Carousel from "../sharedComponents/crarousel/Carousel";
import useFetchGovernorate from "../customHooks/useFetchGovernorates";
import Outline from "../sharedComponents/Outline";
import PlaceCard from "../sharedComponents/PlaceCard";
import useFetchPlaces from "../customHooks/useFetchPlaces";
import useViewSize from "../customHooks/useViewSize";
import useAnchorMenu from "../customHooks/useAnchorMenu";
import useFetchTrips from "../customHooks/useFetchTrips";
import InputFilter from "../sharedComponents/InputFilter";
import FilterMenu from "../sharedComponents/FilterMenu";
import { multiItem } from "../sharedData/carouselResponsive";
import Loading from "../sharedComponents/Loading";
import isLoading from "../sharedFunction/isLoading";

const Home = () => {
  const navigate = useNavigate();
  const [fetchGovernoratesStatus, governorates] = useFetchGovernorate();
  const [fetchTripsStatus, trips] = useFetchTrips();
  const [fetchPalceStatus, places] = useFetchPlaces();
  const viewSize = useViewSize({});
  const [anchorEl, handleOpenMenu, handleCloseMenu] = useAnchorMenu();
  const openFilterHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (viewSize) handleOpenMenu(e);
    else navigate("/filter");
  };
  console.log(localStorage.getItem("bearerToken"));
  // localStorage.clear();

  return (
    <div>
      {(isLoading(fetchGovernoratesStatus) ||
        isLoading(fetchPalceStatus) ||
        isLoading(fetchTripsStatus)) && <Loading />}
      <Outlet />

      <Grid container justifyContent={"center"}>
        {/* <Grid item xs={11} md={9}>
          <InputFilter onClick={openFilterHandler} />
        </Grid> */}
        <Grid item xs={11} lg={11.5}>
          <Outline title="المحافظات السورية" navigateTo="/governorates" />
        </Grid>
        <Grid item xs={11}>
          <Carousel responsive={multiItem}>
            {governorates.map((governorate) => {
              return (
                <GovernorateCard
                  key={governorate.id}
                  name={governorate.name}
                  img={governorate.media[0].original_url}
                  onClick={() => navigate(`/governorate/${governorate.id}`)}
                />
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={11} lg={11.5}>
          <Outline title="اشهر الرحلات" navigateTo={`/trips`} />
        </Grid>
        <Grid item xs={11}>
          <Carousel responsive={multiItem}>
            {trips.map((trip) => {
              return (
                <TripCard
                  key={trip.id}
                  props={trip}
                  canNotFavorite={false}
                  onClick={() => navigate(`/trip/${trip.id}`)}
                />
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={11} lg={11.5}>
          <Outline title="اشهر الأماكن" navigateTo={`/places`} />
        </Grid>
        <Grid item xs={11}>
          <Carousel responsive={multiItem}>
            {places.map((place, index) => {
              return (
                <PlaceCard
                  key={index}
                  props={place}
                  onClick={() => navigate(`/place/${place.id}`)}
                />
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
      <FilterMenu anchorEl={anchorEl} handleClose={handleCloseMenu} />
    </div>
  );
};

export default Home;
