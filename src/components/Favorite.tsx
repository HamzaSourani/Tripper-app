import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Tabs from "../sharedComponents/tabs/Tabscomponent";
import SearchInput from "../sharedComponents/SearchInput";
const Favorite = () => {
  return (
    <>
      <Outlet />
      <Grid container justifyContent={"center"} alignItems="center">
        <Grid item xs={11} md={9}>
          <SearchInput />
        </Grid>
        <Grid item xs={12}>
          <Tabs tabsArray={["الرحلات", "الأماكن"]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Favorite;
