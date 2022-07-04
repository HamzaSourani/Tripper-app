import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RowStack from "./RowStack";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useAppDispatch } from "../app/hooks";
import { handleOpenGOToSignup } from "../features/goToSignupSlice";
import userDataHandler from "../sharedFunction/userDataHandler";
type navigationIconLargProps = {
  closeDrawer?: () => void;
};
const NavigationIconLarg = ({ closeDrawer }: navigationIconLargProps) => {
  const dispatch = useAppDispatch();
  const userData = userDataHandler();
  const goToFavorite = () => {
    if (userData) navigate("/favorite");
    else dispatch(handleOpenGOToSignup());
  };
  const closeDrawerHandler = closeDrawer ? closeDrawer : () => {};
  const navigateToHandler = (to: string) => navigate(to);
  const navigate = useNavigate();
  return (
    <Stack direction={{ xs: "column", lg: "row" }}>
      <RowStack
        onClick={() => navigateToHandler("/home")}
        closeDrawer={closeDrawerHandler}
      >
        <>
          <HomeIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الرئيسية</Typography>
        </>
      </RowStack>
      <RowStack
        onClick={() => navigateToHandler("/governorates")}
        closeDrawer={closeDrawerHandler}
      >
        <>
          <LocationCityIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>المدن</Typography>
        </>
      </RowStack>
      <RowStack
        onClick={() => navigateToHandler("/trips")}
        closeDrawer={closeDrawerHandler}
      >
        <>
          <AirplanemodeActiveIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الرحلات</Typography>
        </>
      </RowStack>

      <RowStack
        onClick={() => navigateToHandler("/places")}
        closeDrawer={closeDrawerHandler}
      >
        <>
          <LocationOnIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الاماكن</Typography>
        </>
      </RowStack>

      <RowStack onClick={goToFavorite} closeDrawer={closeDrawerHandler}>
        <>
          <FavoriteIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>المفضلة</Typography>
        </>
      </RowStack>
    </Stack>
  );
};

export default NavigationIconLarg;
