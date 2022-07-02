import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import FavoriteIconContainer from "./FavoriteIconContainer";
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
        <FavoriteIconContainer />

        <AvatarGroup
          right={{ xs: 10, md: 20 }}
          bottom={{ xs: 10, md: 20 }}
          subscribers={[1, 2, 3, 4, 5]}
        >
          <Typography color={"white"}>24/+14</Typography>
        </AvatarGroup>
      </Box>
      <Stack spacing={1} sx={{ p: 1, width: "100%" }}>
        <Typography variant="body1" color={"GrayText"}>
          {"مشروبات"}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Typography
            sx={{ flexGrow: 1 }}
            fontWeight={"bold"}
            variant="body1"
            color={"MenuText"}
          >
            {"عصير الليمون الطبيعي عمل بيت"}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0, sm: 0.5 }}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: { xs: 25, sm: 28, md: 30, lg: 32 } }}
              color={"primary"}
              fontWeight="bold"
            >
              5000
            </Typography>
            <Typography color={"GrayText"}>ل.س</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
