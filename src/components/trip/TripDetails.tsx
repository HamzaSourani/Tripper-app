import React from "react";
import { useParams, Outlet } from "react-router-dom";
import TripImg from "./TripImg";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Comments from "../../sharedComponents/Comments";
type paramsType = {
  tripId: string | undefined;
};

const TripDetails = () => {
  const { tripId } = useParams<paramsType>();
  if (typeof tripId !== "undefined") {
    return (
      <>
        <Outlet />
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={11} md={9} lg={5.5}>
            <TripImg />
          </Grid>
          <Grid item xs={11} md={9} lg={5.5}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "27Px", md: "30px", lg: "32px" },
                  fontWeight: "700",
                }}
              >
                رحلات إلى مدينة مدري مين لزيارة مدري شو
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                رحلات إلى مدينة مدري مين لزيارة مدري شو رحلات إلى مدينة مدري مين
                لزيارة مدري شورحلات إلى مدينة مدري مين لزيارة مدري شو
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
                    مدري نوع
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
                  1000,00
                </Typography>
                <Typography color={"GrayText"}>ل.س</Typography>
              </Stack>
            </Stack>
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

export default TripDetails;
