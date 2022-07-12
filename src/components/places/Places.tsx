import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import InputFilter from "../../sharedComponents/InputFilter";
import PlaceCard from "../../sharedComponents/PlaceCard";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";

const Places = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const places = useAppSelector((state) => state.places.places);
  return (
    <>
      <Outlet />
      <Container>
        <Grid
          container
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={11}>
            <OutlineGoBack title="أشهر الأماكن" />
          </Grid>
          <Grid item xs={11} md={9}>
            {/* <InputFilter /> */}
          </Grid>

          {places.map((place, index) => {
            return (
              <Grid item xs={11} sm={6} md={4}>
                <PlaceCard
                  key={index}
                  props={place}
                  onClick={() => navigate(`${pathname}/place/${place.id}`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Places;
