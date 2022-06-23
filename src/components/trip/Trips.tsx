import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import InputFilter from "../../sharedComponents/InputFilter";
import TripCard from "../../sharedComponents/TripCard";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
const Trips = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
            <OutlineGoBack title="أشهر الرحلات" />
          </Grid>
          <Grid item xs={11} md={9}>
            <InputFilter />
          </Grid>

          {[1, 2, 3, 4, 5].map((trip, index) => {
            return (
              <Grid item xs={11} sm={6} md={4}>
                <TripCard
                  onClick={() => navigate(`${pathname}/trip/${trip}`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Trips;
