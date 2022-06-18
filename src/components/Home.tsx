import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Grid from "@mui/material/Grid";
import GovernorateCard from "../sharedComponents/GovernorateCard";
import TripCard from "../sharedComponents/TripCard";
import Carousel from "../sharedComponents/Carousel";
import useFetchGovernorate from "../customHooks/useFetchGovernorate";
import Outline from "../sharedComponents/Outline";
import PlaceCard from "../sharedComponents/PlaceCard";
import useFetchPlaces from "../customHooks/useFetchPlaces";
const array = [1, 2, 3, 4, 5, 6];
const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [responseStatus] = useFetchGovernorate();
  const [palceStatus] = useFetchPlaces();
  const governorates = useAppSelector((state) => state.governorate);
  const places = useAppSelector((state) => state.places);
  return (
    <div>
      <Outlet />
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} lg={11.5}>
          <Outline title="المحافظات السورية" navigateTo="/governorates" />
        </Grid>
        <Grid item xs={11}>
          <Carousel>
            {governorates.map((governorate) => {
              return (
                <GovernorateCard
                  key={governorate.id}
                  name={governorate.name}
                  img={governorate.img}
                  id={governorate.id}
                  onClick={() =>
                    navigate(`${pathname}/governorate/${governorate.id}`)
                  }
                />
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={11} lg={11.5}>
          <Outline title="اشهر الرحلات" navigateTo="/governorates" />
        </Grid>
        <Grid item xs={11}>
          <Carousel>
            {[1, 2, 3, 4, 5].map((i) => {
              return <TripCard key={i} />;
            })}
          </Carousel>
        </Grid>
        <Grid item xs={11} lg={11.5}>
          <Outline title="اشهر الأماكن" navigateTo="/places" />
        </Grid>
        <Grid item xs={11}>
          <Carousel>
            {places.map((place, index) => {
              return (
                <PlaceCard
                  key={index}
                  props={place}
                  onClick={() => navigate(`${pathname}/place/${place.id}`)}
                />
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
