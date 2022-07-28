import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "../../sharedComponents/Brand";
import NavigationIcon from "../../sharedComponents/NavigationIcon";
import useToggleEle from "../../customHooks/useToggleEle";
import useViewSize from "../../customHooks/useViewSize";
import UserInfo from "./UserInfo";
import Drawer from "./NavDrawr";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, handelOpen, handelClose] = useToggleEle();
  const viewSize = useViewSize({ _innerWidth: 900, _viewSize: false });
  const isUserAuthorized = useAppSelector(
    (state: RootState) => state.isUserAuthorized.state
  );
  return (
    <>
      <Box flexGrow={1} mb={5}>
        <AppBar
          sx={{ backgroundColor: "#fff", direction: "ltr" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              onClick={handelOpen}
              color="primary"
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {!viewSize && <Drawer open={open} closeDrawer={handelClose} />}
            {!isUserAuthorized && (
              <Button
                variant="contained"
                sx={{ display: { xs: "none", md: "flex" } }}
                onClick={() => navigate("/login")}
                endIcon={<LoginIcon />}
              >
                تسجيل الدخول
              </Button>
            )}
            {isUserAuthorized && <UserInfo />}{" "}
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              spacing={3}
              sx={{ m: "auto", display: { xs: "none", md: "flex" } }}
            >
              <NavigationIcon />
            </Stack>
            <Stack alignItems={"flex-end"} sx={{ flexGrow: { xs: 1, md: 0 } }}>
              <Brand
                brandColor="var(--primary-color)"
                circleColor="var(--golden-color)"
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
