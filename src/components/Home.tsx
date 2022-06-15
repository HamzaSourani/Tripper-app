import React from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GovernorateCard from "../sharedComponents/GovernorateCard";
import TripCard from "../sharedComponents/TripCard";
import Carousel from "../sharedComponents/Carousel";
import useFetchGovernorate from "../customHooks/useFetchGovernorate";
import Outline from "../sharedComponents/Outline";
const array = [1, 2, 3, 4, 5, 6];
const Home = () => {
  const [responseStatus] = useFetchGovernorate();
  const governorates = useAppSelector((state) => state.governorate);
  console.log(governorates);
  return (
    <div>
      <Outlet />
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} lg={11.5}>
          <Outline title="المحافظات السورية" navigateTo="/governorates" />
        </Grid>
        <Grid item xs={11}>
          <Carousel>
            {governorates.keys.length
              ? governorates.map((governorate) => {
                  return (
                    <GovernorateCard
                      key={governorate.id}
                      name={governorate.name}
                      img={governorate.img}
                    />
                  );
                })
              : array.map((governorate) => {
                  return (
                    <GovernorateCard img={null} name="حلب" key={governorate} />
                  );
                })}
          </Carousel>
        </Grid>
        <Grid item xs={11} lg={12}></Grid>
      </Grid>
    </div>
  );
};

export default Home;
