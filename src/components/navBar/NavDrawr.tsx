import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import RowStack from "../../sharedComponents/RowStack";
import NavigationIcon from "../../sharedComponents/NavigationIconLarg";
import useUserLogout from "../../customHooks/useUserLogout";
import { Login } from "@mui/icons-material";
type drawerProps = {
  open: boolean;
  closeDrawer: () => void;
};

const NavDrawr = ({ open, closeDrawer }: drawerProps) => {
  const navigate = useNavigate();
  const isUserAuthorized = useAppSelector(
    (state: RootState) => state.isUserAuthorized.state
  );
  const [logoutStatus, handleUserLogout] = useUserLogout();
  const logInOut = isUserAuthorized ? "تسجيل الخروج" : "إنشاء حساب";
  const navigateToHandler = (to: string) => navigate(to);
  const userNameHandler = () => {
    if (localStorage.getItem("userInfo") !== null) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
      return userInfo.name;
    } else return "user name";
  };
  const handleLogout = () => {
    if (isUserAuthorized) handleUserLogout();
    else navigate("/login");
  };
  const handleLog = () => {
    if (!isUserAuthorized) navigate("/signup");
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
            {userNameHandler()}
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
            {isUserAuthorized ? (
              <LogoutIcon color="primary" />
            ) : (
              <Login color="primary" />
            )}
            {logoutStatus !== "loading" && (
              <Typography
                onClick={handleLogout}
                sx={{ color: "var(--gray-color)" }}
              >
                {logInOut}
              </Typography>
            )}
          </>
        </RowStack>
      </Drawer>
    </>
  );
};

export default NavDrawr;
