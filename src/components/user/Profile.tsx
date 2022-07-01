import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../sharedComponents/UserImg";
import userDataHandler from "../../sharedFunction/userDataHandler";
import Tabs from "../../sharedComponents/tabs/Tabscomponent";
import extracingtUserData from "../../sharedFunction/extracingtUserData";
const Profile = () => {
  const userData = userDataHandler();

  const { _userName, _userEmail } = extracingtUserData();

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
            <Typography variant="h5">{_userName}</Typography>
            <Typography color={"GrayText"}>{_userEmail}</Typography>
          </Stack>
          <Tabs tabsArray={["رحلاتي", "الأماكن", "المدن"]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
