import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setSnackbarParam } from "../../features/snackbarSlice";
import { RootState } from "../../app/store";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useAnchorMenu from "../../customHooks/useAnchorMenu";
import useUserLogout from "../../customHooks/useUserLogout";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUserAuthorized = useAppSelector(
    (state: RootState) => state.isUserAuthorized.state
  );

  const userNameParagraph = React.useRef<HTMLParagraphElement>(null!);

  if (isUserAuthorized && userNameParagraph.current !== null)
    userNameParagraph.current.innerHTML = JSON.parse(
      localStorage.getItem("userInfo")!
    ).name;

  const [anchorEl, handleOpenMenu, handleCloseMenu] = useAnchorMenu();
  const [logoutStatus, handleUserLogout] = useUserLogout();
  React.useEffect(() => {
    if (logoutStatus === "succeeded")
      dispatch(
        setSnackbarParam({
          alertMessage: "تم تسجيل الخروج بنجاح",
          alertType: "success",
        })
      );
    else if (logoutStatus === "failed")
      dispatch(
        setSnackbarParam({
          alertMessage: "حدث خطاء في عملية تسجيل الخروج",
          alertType: "error",
        })
      );
  }, [dispatch, logoutStatus]);
  const handleLogout = () => {
    handleUserLogout();
    if (logoutStatus === "succeeded") handleCloseMenu();
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexGrow: 0,
      }}
    >
      <Tooltip title="إعدادت المستخدم">
        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
          <Avatar alt="" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Typography ref={userNameParagraph} textAlign="center"></Typography>
        </MenuItem>
        <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
        <MenuItem onClick={handleCloseMenu}>
          <Typography textAlign="center" onClick={() => navigate("/profile")}>
            ملف المستخدم
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">تسجيل الخروج</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserInfo;
