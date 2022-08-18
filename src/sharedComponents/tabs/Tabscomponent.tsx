import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TabPanel from "./TabPanel";
import PlaceCard from "../PlaceCard";
import TripCard from "../TripCard";
import useFetchFavoriteJourneys from "../../customHooks/useFetchFavoriteJourneys";
import useFetchFavoritePlaces from "../../customHooks/useFetchFavoritePlaces";

type tabsProps = {
  tabsArray: { english: string; arabic: string }[];
};
const Tabscomponent = ({ tabsArray }: tabsProps) => {
  const [value, setValue] = React.useState(0);
  const favoriteUserPlaces = useFetchFavoritePlaces();
  const favoriteUserJourneys = useFetchFavoriteJourneys();
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabsArray.map((tab, index) => {
            return <Tab key={index} label={tab.arabic} />;
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {favoriteUserJourneys &&
          favoriteUserJourneys.map((trip) => {
            return (
              <Grid key={trip.id} item xs={11} md={6} lg={4}>
                <TripCard
                  props={trip}
                  canNotFavorite={false}
                  onClick={() => navigate(`/trip/${trip.id}`)}
                />
              </Grid>
            );
          })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {favoriteUserPlaces &&
          favoriteUserPlaces.map((place) => {
            return (
              <Grid key={place.id} item xs={11} md={6} lg={4}>
                <PlaceCard
                  props={place}
                  onClick={() => navigate(`/place/${place.id}`)}
                />{" "}
              </Grid>
            );
          })}
      </TabPanel>
    </Box>
  );
};

export default Tabscomponent;
