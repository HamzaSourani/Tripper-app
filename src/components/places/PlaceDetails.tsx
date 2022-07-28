import React from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import useFetchGovernorateDetails from "../../customHooks/useFetchGoveronrateDetails";
import { RootState } from "../../app/store";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Carousel from "../../sharedComponents/crarousel/Carousel";
import Outline from "../../sharedComponents/Outline";
import { useAppSelector } from "../../app/hooks";
import PlaceImg from "./PlaceImg";
import TripCard from "../../sharedComponents/TripCard";
import ProductCard from "../../sharedComponents/ProductCard";
import Comments from "../../sharedComponents/Comments";
import useFetchTrips from "../../customHooks/useFetchTrips";
import { multiItem } from "../../sharedData/carouselResponsive";
import Loading from "../../sharedComponents/Loading";
import isLoading from "../../sharedFunction/isLoading";
import useFetchPlace from "../../customHooks/useFetchPlace";
type paramsType = {
  placeId: string | undefined;
};

const PlaceDetails = () => {
  const { placeId } = useParams<paramsType>();
  const [fetchPalceStatus, place] = useFetchPlace(placeId!);
  const [fetchTripsStatus, trips] = useFetchTrips(
    `?filter[place_id]=${placeId}`
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (typeof placeId !== "undefined") {
    return (
      <>
        <Outlet />
        {(isLoading(fetchTripsStatus) || isLoading(fetchPalceStatus)) && (
          <Loading />
        )}
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={11} md={9} lg={5.5}>
            <PlaceImg
              img={"/images/aleppo.jpg"}
              governorateName={""}
              isFavorite={true}
              rate={4.2}
            />
          </Grid>
          <Grid item xs={11} md={9} lg={5.5}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Typography variant="h4">{place?.name}</Typography>
                <Typography variant="h5" color={"GrayText"}>{``}</Typography>
              </Stack>
              <Typography color={"GrayText"}>{place?.description}</Typography>
              <Stack direction={"row"} justifyContent={"center"} spacing={3}>
                {place?.place_type_tag.map((hashTag) => {
                  console.log(hashTag.tag.name);
                  return (
                    <Typography
                      color={"GrayText"}
                      sx={{ px: 1, py: 0.5, boxShadow: 3 }}
                    >{`${hashTag.tag.name}#`}</Typography>
                  );
                })}
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h5" fontWeight={"bold"}>
                  نوع الزبائن
                </Typography>
                <Typography color={"GrayText"}>
                  {"يمنع اصطحاب الاطفال"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={11} lg={11}>
            <Outline
              title={`الرحلات إلى ${place?.name}`}
              navigateTo={`${pathname}/trips`}
            />
          </Grid>
          <Grid item xs={11}>
            <Carousel responsive={multiItem}>
              {trips.map((trip) => {
                return (
                  <TripCard
                    key={trip.id}
                    description={trip.description}
                    numberOfDays={trip.number_of_days}
                    canNotFavorite={false}
                  />
                );
              })}
            </Carousel>
          </Grid>
          <Grid item xs={11} lg={11}>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "27Px", md: "30px", lg: "32px" },
                fontWeight: { sx: "defualt", md: "700" },
              }}
            >
              {`خصائص ${place?.name}`}
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Carousel responsive={multiItem}>
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <Paper key={i} sx={{ p: 2 }}>
                    <Grid container rowSpacing={2}>
                      <Grid item xs={12}>
                        <Typography fontWeight={"bold"} variant={"h6"}>
                          طاولة
                        </Typography>
                      </Grid>
                      <>
                        {" "}
                        {[1, 2, 3, 4].map((spac) => {
                          return (
                            <Grid key={spac} item xs={6}>
                              -{"2 شخص"}
                            </Grid>
                          );
                        })}
                      </>
                    </Grid>
                  </Paper>
                );
              })}
            </Carousel>
          </Grid>
          <Grid item xs={11} lg={11}>
            <Outline
              title={`المنتجات ضمن  ${place?.name}`}
              navigateTo="/governorates"
            />
          </Grid>
          <Grid item xs={11}>
            <Carousel responsive={multiItem}>
              {[1, 2, 3, 4, 5].map((i) => {
                return <ProductCard key={i} />;
              })}
            </Carousel>
          </Grid>
          <Grid item xs={11}>
            <Comments />
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

export default PlaceDetails;
