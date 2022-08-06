import React from "react";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import InputFilter from "../../sharedComponents/InputFilter";
import TripCard from "../../sharedComponents/TripCard";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
import useFetchTrips from "../../customHooks/useFetchTrips";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";
type paramsType = Partial<{
  governorateId: string;
  placeId: string;
}>;
const Trips = () => {
  const { governorateId, placeId } = useParams<paramsType>();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [fetchTripsStatus, trips] = useFetchTrips(
    governorateId
      ? `filter[city_id]=${governorateId}`
      : `filter[place_id]=${placeId}`
  );
  console.log(placeId);
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
              <Grid key={trip.id} item xs={11} sm={6} md={4}>
                <TripCard key={trip.id} props={trip} canNotFavorite={true} />{" "}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Trips;
