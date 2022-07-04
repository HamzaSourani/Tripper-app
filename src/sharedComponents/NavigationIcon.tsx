import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { handleOpenGOToSignup } from "../features/goToSignupSlice";
import { useAppDispatch } from "../app/hooks";
import userDataHandler from "../sharedFunction/userDataHandler";

const NavigationIcon = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const userData = userDataHandler();
  const activeLinkHandler = (path: string) => {
    return {
      color: pathname === path ? "var(--golden-color)" : "",
      border: pathname === path ? "1px solid var(--golden-color)" : "",
    };
  };
  const goToFavorite = () => {
    if (userData) navigate("/favorite");
    else dispatch(handleOpenGOToSignup());
  };

  return (
    <>
      <Tooltip title="الرئيسية">
        <IconButton
          color="primary"
          sx={{
            ...activeLinkHandler("/home"),
          }}
          onClick={() => navigate("/home")}
        >
          <HomeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="المدن">
        <IconButton
          color="primary"
          sx={{
            ...activeLinkHandler("/governorates"),
          }}
          onClick={() => navigate("/governorates")}
        >
          <LocationCityIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="الرحلات">
        <IconButton color="primary">
          <AirplanemodeActiveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="الأماكن">
        <IconButton
          color="primary"
          sx={{
            ...activeLinkHandler("/places"),
          }}
          onClick={() => navigate("/places")}
        >
          <LocationOnIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="المفضلة">
        <IconButton
          sx={{ ...activeLinkHandler("/favorite") }}
          color="primary"
          onClick={goToFavorite}
        >
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default NavigationIcon;
