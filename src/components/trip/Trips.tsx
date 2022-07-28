import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import InputFilter from "../../sharedComponents/InputFilter";
import TripCard from "../../sharedComponents/TripCard";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
import useFetchTrips from "../../customHooks/useFetchTrips";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";
const Trips = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [fetchTripsStatus, trips] = useFetchTrips();
  return (
    <>
      <Outlet />
      {isLoading(fetchTripsStatus) && <Loading />}
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
            {/* <InputFilter /> */}
          </Grid>
          {trips.map((trip) => {
            return (
              <Grid item xs={11} sm={6} md={4}>
                <TripCard
                  key={trip.id}
                  description={trip.description}
                  numberOfDays={trip.number_of_days}
                  canNotFavorite={true}
                />{" "}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Trips;
