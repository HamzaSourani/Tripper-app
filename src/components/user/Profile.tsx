import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../sharedComponents/UserImg";
import Tabs from "../../sharedComponents/tabs/Tabscomponent";
import { editUserProfile } from "../../sharedType/userType";
const Profile = () => {
  const userData: editUserProfile = JSON.parse(
    localStorage.getItem("userInfo")!
  );
  const { userName, email } = userData;

  return (
    <>
      <Outlet />
      <Grid
        sx={{
          minHeight: "70vh",
          my: 5,
        }}
        container
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid
          item
          xs={11}
          sx={{
            p: 4,
            border: "1px solid var(--golden-color)",
            borderRadius: "1rem",
            boxShadow: "0px 0px 4px  var(--golden-color)",
          }}
        >
          <Stack
            sx={{ p: 3, width: "100%" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <UserImg edit={true} />
            <Typography variant="h5">{userName}</Typography>
            <Typography color={"GrayText"}>{email}</Typography>
          </Stack>
          <Tabs
            tabsArray={[
              { arabic: "رحلاتي", english: "journey" },
              { arabic: "الأماكن", english: "place" },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
