import React from "react";
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
type drawerProps = {
  open: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
};
type stackProps = {
  children: React.ReactElement;
};
const RowStack = ({ children }: stackProps) => {
  return (
    <Stack
      sx={{
        my: 1,
        "&:hover": {
          cursor: "pointer",
        },
      }}
      direction={"row"}
      alignItems="center"
      spacing={2}
    >
      {children}
    </Stack>
  );
};
const NavDrawr = ({ open, toggleDrawer, closeDrawer }: drawerProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={closeDrawer}
      sx={{
        "& .MuiPaper-root": {
          py: 8,
          px: 5,
          backgroundColor: "#2A2E43",
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
      <RowStack>
        <>
          <HomeIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الرئيسية</Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <LocationCityIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>المدن</Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <AirplanemodeActiveIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الرحلات</Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <LocationOnIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>الاماكن</Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <Inventory2Icon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>المنتجات</Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <FavoriteIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>المفضلة</Typography>
        </>
      </RowStack>
      <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
      <RowStack>
        <>
          <FeedIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>
            الشؤوط والاحكام
          </Typography>
        </>
      </RowStack>
      <RowStack>
        <>
          <InfoIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>
            عن التطبيق
          </Typography>
        </>
      </RowStack>
      <Divider sx={{ backgroundColor: "var(--golden-color)" }} />
      <RowStack>
        <>
          <LogoutIcon color="primary" />
          <Typography sx={{ color: "var(--gray-color)" }}>
            تسجيل الخروج
          </Typography>
        </>
      </RowStack>
    </Drawer>
  );
};

export default NavDrawr;
