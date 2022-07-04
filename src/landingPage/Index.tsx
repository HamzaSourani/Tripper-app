import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Nav from "./components/navBar/Nav";
import Carousel from "../sharedComponents/Carousel";
import TripCard from "../sharedComponents/TripCard";
const index = () => {
  return (
    <>
      <Nav />
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/images/landing-img.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: { xs: "40vh", md: "50Vh", lg: "55vh" },
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
                mx: "auto",
                maxWidth: "12ch",
              }}
            >
              إبدأ رحلتك بتجربة جديدة
            </Typography>
            <Typography
              variant="body2"
              color={"GrayText"}
              sx={{ my: 2, maxWidth: "40ch", mx: "auto" }}
            >
              إبدأ رحلتك بتجربة جديدة إبدأ رحلتك بتجربة جديدة إبدأ رحلتك بتجربة
              جديدة إبدأ رحلتك بتجربة جديدة
            </Typography>
          </Box>
        </Box>
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
        <Carousel>
          {[1, 2, 3, 4, 5].map((i) => {
            return <TripCard key={i} canNotFavorite={true} />;
          })}
        </Carousel>
      </Container>
    </>
  );
};

export default index;
