import React, { createContext } from "react";
import { useParams, Outlet } from "react-router-dom";
import TripImg from "./TripImg";
import TripPath from "./TripPath";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Comments from "../../sharedComponents/Comments";
import useFetchTrips from "../../customHooks/useFetchTrips";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";

type paramsType = {
  tripId: string | undefined;
};

const TripDetails = () => {
  const { tripId } = useParams<paramsType>();
  const [fetchTripsStatus, trips] = useFetchTrips();

  if (typeof tripId !== "undefined") {
    const trip = trips.find((trip) => trip.id === tripId);
    if (typeof trip !== "undefined") {
      return (
        <>
          {}
          {isLoading(fetchTripsStatus) && <Loading />}
          <Outlet />
          <Grid container justifyContent={"center"} spacing={3}>
            <Grid item xs={11} md={9} lg={5.5}>
              <TripImg
                numberOfDays={trip.number_of_days}
                favorable_id={trip.id}
                itIsFavorite={
                  trip?.favorites_relation ? trip.favorites_relation.length : 0
                }
              />
            </Grid>
            <Grid item xs={11} md={9} lg={5.5}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "25px",
                      sm: "27Px",
                      md: "30px",
                      lg: "32px",
                    },
                    fontWeight: "700",
                  }}
                >
                  {trip.name}
                </Typography>
                <Typography variant="body2" color={"GrayText"}>
                  {trip.description}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  sx={{ textAlign: "center" }}
                >
                  <Stack spacing={1}>
                    <Typography variant="h6" component={"p"} fontWeight="bold">
                      نوع الرحلة
                    </Typography>
                    <Typography variant="body1" color={"GrayText"}>
                      {trip.type}
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="h6" component={"p"} fontWeight="bold">
                      نوع المشتركين
                    </Typography>
                    <Typography variant="body1" color={"GrayText"}>
                      مدري شخص
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                  <Typography variant="h4" color={"primary"}>
                    {trip.cost}
                  </Typography>
                  <Typography color={"GrayText"}>ل.س</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item container xs={11}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                >{`مسار رحلة ${trip.name}`}</Typography>
              </Grid>
              <Grid item xs={11} md={9} lg={6}>
                <TripPath stations={trip.stations} />
              </Grid>
            </Grid>
            <Grid item xs={11}>
              <Comments
                tripOrPlaceName={trip.name}
                reviews={trip.reviews}
                tripOrPlaceId={tripId}
                reviewableType={"journey"}
              />
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
  } else
    return (
      <>
        <Outlet />
      </>
    );
};

export default TripDetails;
