import React from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import useFetchGovernorateDetails from "../../customHooks/useFetchGoveronrateDetails";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Carousel from "../../sharedComponents/crarousel/Carousel";
import Outline from "../../sharedComponents/Outline";
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

  const istherePlace = typeof placeId !== "undefined" ? placeId : "";
  const [fetchPalceStatus, place] = useFetchPlace(istherePlace);

  const [fetchTripsStatus, trips] = useFetchTrips(
    `?filter[place_id]=${placeId}`
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (typeof placeId !== "undefined") {
    return (
      <>
        {(isLoading(fetchTripsStatus) || isLoading(fetchPalceStatus)) && (
          <Loading />
        )}
        <Outlet />
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={11} md={9} lg={5.5}>
            <PlaceImg
              media={place?.media}
              governorateName={place?.city}
              rate={place?.review}
              favorable_id={placeId}
              itIsFavorite={
                place?.favorites_relation ? place.favorites_relation.length : 0
              }
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
                  return (
                    <Typography
                      key={hashTag.tag.id}
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
                    props={trip}
                    canNotFavorite={false}
                    onClick={() => navigate(`/trip/${trip.id}`)}
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
            {place?.specs && (
              <Carousel responsive={multiItem}>
                {place?.specs.map((spec) => {
                  return (
                    <Paper key={spec.id} sx={{ p: 2, minHeight: 150 }}>
                      <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                          <Typography fontWeight={"bold"} variant={"h6"}>
                            {spec.name}
                          </Typography>
                        </Grid>
                        <>
                          {place.specs_place.map((spec_place) => {
                            return (
                              <>
                                {spec_place.specs_id === spec.id &&
                                  spec_place.options.map((option) => (
                                    <Grid key={option.id} item xs={6}>
                                      -{option.name}
                                    </Grid>
                                  ))}
                              </>
                            );
                          })}
                        </>
                      </Grid>
                    </Paper>
                  );
                })}
              </Carousel>
            )}
          </Grid>
          {place?.products.length && (
            <>
              <Grid item xs={11} lg={11}>
                <Outline
                  title={`المنتجات ضمن  ${place?.name}`}
                  navigateTo="/governorates"
                />
              </Grid>
              <Grid item xs={11}>
                <Carousel responsive={multiItem}>
                  {place?.products.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                  })}
                </Carousel>
              </Grid>
            </>
          )}
          <Grid item xs={11}>
            <Comments
              tripOrPlaceName={place ? place.name : ""}
              reviews={place ? place.reviews : []}
              tripOrPlaceId={placeId}
              reviewableType={"place"}
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
};

export default PlaceDetails;
