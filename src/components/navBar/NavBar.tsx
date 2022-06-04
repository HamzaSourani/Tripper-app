import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CastleIcon from "@mui/icons-material/Castle";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "../../sharedComponents/Brand";
import useToggleDrawer from "../../customHooks/useToggleDrawer";
import UserInfo from "./UserInfo";
import Drawer from "./NavDrawr";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, toggleDrawer, closeDrawer] = useToggleDrawer();
  return (
    <Box flexGrow={1}>
      <AppBar
        sx={{ backgroundColor: "#fff", direction: "ltr" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            color="primary"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={open}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
          />
          <Button
            variant="contained"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            تسجيل الدخول
          </Button>
          {false && <UserInfo />}
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            spacing={3}
            sx={{ m: "auto", display: { xs: "none", md: "flex" } }}
          >
            <Tooltip title="">
              <IconButton color="primary">
                <AirplanemodeActiveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="">
              <IconButton color="primary">
                <LocationCityIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="">
              <IconButton color="primary">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="">
              <IconButton color="primary">
                <RestaurantMenuIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="">
              <IconButton color="primary">
                <CastleIcon />
              </IconButton>
            </Tooltip>
          </Stack>

          <Brand />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
