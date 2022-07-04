import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InfoIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import userDataHandler from "../../sharedFunction/userDataHandler";
import RowStack from "../../sharedComponents/RowStack";
import NavigationIcon from "../../sharedComponents/NavigationIconLarg";
import useToggleEle from "../../customHooks/useToggleEle";
import axios from "axios";

//import { logout } from "../../features/UserAuthSlice";
type drawerProps = {
  open: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
};

const NavDrawr = ({ open, toggleDrawer, closeDrawer }: drawerProps) => {
  const userData = userDataHandler();
  const navigate = useNavigate();

  const logInOut = userData ? "تسجيل الخروج" : "إنشاء حساب";
  const navigateToHandler = (to: string) => navigate(to);

  const handleLog = () => {
    if (userData) {
      (async () => {
        // const res = await axios({
        //   method: "get",
        //   url: "http://tripper.dentatic.com/api/client/auth/logout",
        //   headers: {
        //     Accept: "application/json",
        //   },
        // });
        // dispatch(logout);
      })();
    } else navigate("/signup");
  };
  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={closeDrawer}
        sx={{
          "& .MuiPaper-root": {
            py: 8,
            px: 5,
            backgroundColor: "var(--dark-gray-color)",
          },
        }}
      >
        <Stack sx={{ mr: 12, mb: 3 }} alignItems="center" spacing={1}>
          <Avatar src="" alt="" sx={{ width: 80, height: 80 }} />
          <Typography variant="h6" sx={{ color: "var(--gray-color)" }}>
            user name
          </Typography>
        </Stack>
        <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
        <NavigationIcon closeDrawer={closeDrawer} />
        <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
        <RowStack onClick={handleLog} closeDrawer={closeDrawer}>
          <>
            <FeedIcon color="primary" />
            <Typography sx={{ color: "var(--gray-color)" }}>
              الشؤوط والاحكام
            </Typography>
          </>
        </RowStack>
        <RowStack onClick={handleLog} closeDrawer={closeDrawer}>
          <>
            <InfoIcon color="primary" />
            <Typography sx={{ color: "var(--gray-color)" }}>
              عن التطبيق
            </Typography>
          </>
        </RowStack>
        <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
        <RowStack onClick={handleLog} closeDrawer={closeDrawer}>
          <>
            <LogoutIcon color="primary" />
            <Typography sx={{ color: "var(--gray-color)" }}>
              {logInOut}
            </Typography>
          </>
        </RowStack>
      </Drawer>
    </>
  );
};

export default NavDrawr;
