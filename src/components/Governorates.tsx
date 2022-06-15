import React from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SearchInput from "../sharedComponents/SearchInput";
import GovernorateCard from "../sharedComponents/GovernorateCard";
import OutlineGoBack from "../sharedComponents/OutlineGoBack";
const array = [1, 2, 3, 4, 5, 6];
const Governorates = () => {
  const governorates = useAppSelector((state) => state.governorate);
  return (
    <>
      <Outlet />
      <Container disableGutters>
        <Grid
          container
          justifyContent={{ xs: "center", lg: "flex-start" }}
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={11}>
            <OutlineGoBack title="المحافظات السورية" />
          </Grid>
          <Grid item xs={11} md={9}>
            <SearchInput />
          </Grid>

          {governorates.keys.length
            ? governorates.map((governorate) => {
                return (
                  <Grid item xs={11} sm={6} md={4}>
                    <GovernorateCard
                      key={governorate.id}
                      name={governorate.name}
                      img={governorate.img}
                    />
                  </Grid>
                );
              })
            : array.map((governorate) => {
                return (
                  <Grid item xs={11} sm={5.5} md={3.5} lg={4}>
                    <GovernorateCard img={null} name="حلب" key={governorate} />
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </>
  );
};

export default Governorates;
