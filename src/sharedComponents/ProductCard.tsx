import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import AvatarGroup from "./AvatarGroup";
const ProductCard = () => {
  return (
    <Stack
      sx={{ boxShadow: 3, pb: 1, borderRadius: ".5rem" }}
      justifyContent={"center"}
      alignItems={"start"}
      spacing={1}
    >
      <Box
        sx={{
          position: "relative",
          pt: "55%",
          width: "100%",
          borderRadius: ".5rem",
          "&:hover": {
            cursor: "pointer",
          },
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
          src="/images/aleppo.jpg"
        ></Box>
        <Stack
          sx={{
            position: "absolute",
            bottom: 20,
            left: { xs: 10, md: 20 },
            borderRadius: "50%",
            backgroundColor: "white",
            p: 1,
            boxShadow: 3,
          }}
          justifyContent={"center"}
          alignItems="center"
        >
          <FavoriteBorderIcon color="primary" />
        </Stack>

        <AvatarGroup
          right={{ xs: 10, md: 20 }}
          bottom={{ xs: 10, md: 20 }}
          subscribers={[1, 2, 3, 4, 5]}
        >
          <Typography color={"white"}>24/+14</Typography>
        </AvatarGroup>
      </Box>
      <Grid style={{ marginRight: "12px" }} container rowSpacing={1}>
        <Grid item xs={12}>
          <Typography variant="body1" color={"GrayText"}>
            {"مشروبات"}
          </Typography>
        </Grid>
        <Grid item xs={7.8} lg={8.4}>
          <Typography fontWeight={"bold"} variant="body1" color={"MenuText"}>
            {"عصير الليمون الطبيعي عمل بيت"}
          </Typography>
        </Grid>
        <Grid item xs={4.2} lg={3.6}>
          <Typography fontWeight={"bold"} variant="h5" color={"primary"}>
            {`${"500"}S.P`}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductCard;
