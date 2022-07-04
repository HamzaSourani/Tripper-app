import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useAnchorMenu from "../../customHooks/useAnchorMenu";
import userDataHandler from "../../sharedFunction/userDataHandler";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";
//import { logout } from "../features/UserAuthSlice";
const UserInfo = () => {
  const navigate = useNavigate();
  const userData = userDataHandler();
  const username = userData
    ? ` ${userData.first_name} ${userData.last_name}`
    : "";
  const [anchorEl, handleOpenMenu, handleCloseMenu] = useAnchorMenu();
  const dispatch = useAppDispatch();
  // const handleLogout = async () => {
  //   const res = await axios({
  //     method: "get",
  //     url: "http://tripper.dentatic.com/api/client/auth/logout",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   dispatch(logout);
  // };
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 0 }}>
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
          <Typography textAlign="center">{username}</Typography>
        </MenuItem>
        <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
        <MenuItem onClick={handleCloseMenu}>
          <Typography textAlign="center" onClick={() => navigate("/profile")}>
            ملف المستخدم
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Typography textAlign="center">تسجيل الخروج</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserInfo;
