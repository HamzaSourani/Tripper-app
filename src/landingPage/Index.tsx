import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Nav from "./components/navBar/Nav";
import Carousel from "../sharedComponents/crarousel/Carousel";
import TripCard from "../sharedComponents/TripCard";
import ProductCard from "../sharedComponents/ProductCard";
import Loading from "../sharedComponents/Loading";
import isLoading from "../sharedFunction/isLoading";
import { singleItem, multiItem } from "../sharedData/carouselResponsive";
import useFetchTrips from "../customHooks/useFetchTrips";

const Index = () => {
  const [fetchTripsStatus, trips] = useFetchTrips();
  return (
    <>
      {isLoading(fetchTripsStatus) && <Loading />}
      <Nav />

      <Grid
        container
        justifyContent={"center"}
        spacing={2}
        sx={{ minHeight: "80vh" }}
      >
        <Grid id="main" item xs={11} md={10}>
          <Box
            sx={{
              backgroundImage: "url(/images/landing-img.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: { xs: "40vh", md: "50Vh", lg: "65vh" },
              mb: 5,
              py: 5,
              px: 5,
              borderRadius: "1rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,.5)",
                backdropFilter: "blur(3px)",
                p: 2,
                maxWidth: "50ch",
                borderRadius: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 900,
                  my: 2,

                  maxWidth: "12ch",
                }}
              >
                إبدأ رحلتك بتجربة جديدة
              </Typography>
              <Typography
                variant="body2"
                color={"GrayText"}
                sx={{ my: 2, maxWidth: "40ch" }}
              >
                إبدأ رحلتك بتجربة جديدة إبدأ رحلتك بتجربة جديدة إبدأ رحلتك
                بتجربة جديدة إبدأ رحلتك بتجربة جديدة
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid id="trip" item xs={10} sm={9} md={7} lg={5}>
          <Typography
            sx={{
              fontSize: 23,
              fontWeight: 700,
              my: 2,
              textAlign: "center",
            }}
          >
            الرحلات الأكثر بحثاً
          </Typography>
          <Carousel responsive={singleItem}>
            {trips.map((trip) => {
              return (
                <TripCard
                  key={trip.id}
                  description={trip.description}
                  numberOfDays={trip.number_of_days}
                  canNotFavorite={true}
                />
              );
            })}
          </Carousel>
        </Grid>
        <Grid
          id="cities"
          item
          container
          xs={12}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                pt: "65%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "-webkit-fill-available",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  borderRadius: "inherit",
                }}
                component={"img"}
                src={"/images/explorer-cities-img.png"}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={8} md={4}>
            <Stack spacing={1} sx={{ pl: { xs: 8, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 700,

                  maxWidth: "16ch",
                }}
              >
                استكشف المدن الأكثر شهرة
              </Typography>
              <Typography
                variant="body2"
                color={"GrayText"}
                sx={{ maxWidth: "40ch" }}
              >
                استكشف المدن الأكثر شهرة استكشف المدن الأكثر شهرة استكشف المدن
                الأكثر شهرة استكشف المدن الأكثر شهرة
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography color={"primary"}>استكشف المزيد</Typography>
                <ArrowBackIcon color="primary" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid id="product" item xs={11}>
          <Typography
            sx={{
              fontSize: 23,
              fontWeight: 700,
              my: 2,
              textAlign: "center",
            }}
          >
            المنتجات الأكثر طلباً
          </Typography>
          <Carousel responsive={multiItem}>
            {[1, 2, 3, 4, 5].map((i) => {
              return <ProductCard key={i} />;
            })}
          </Carousel>
        </Grid>
        <Grid item xs={11}>
          <Stack spacing={2} justifyContent="center">
            <Box
              sx={{
                position: "relative",
                pt: "40%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "-webkit-fill-available",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  borderRadius: "inherit",
                }}
                component={"img"}
                src={"/images/filter-img.png"}
              ></Box>
            </Box>
            <Typography
              sx={{
                fontSize: 23,
                fontWeight: 700,
                my: 2,
                textAlign: "center",
              }}
            >
              تمتع بميزة الفلترة المتقدمة
            </Typography>
          </Stack>
        </Grid>
        <Grid
          id="downloadApp"
          item
          container
          xs={12}
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <Grid item xs={8} md={4}>
            <Stack spacing={1} sx={{ pl: { xs: 8, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 700,

                  maxWidth: "20ch",
                }}
              >
                حمل التطبيق و تمتع بتجربة كاملة جديدة
              </Typography>
              <Box
                component={"img"}
                src="/images/google-play.png"
                alt="google-play"
                maxWidth={300}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                pt: "80%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "-webkit-fill-available",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  borderRadius: "inherit",
                }}
                component={"img"}
                src={"/images/download-app-img.png"}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
