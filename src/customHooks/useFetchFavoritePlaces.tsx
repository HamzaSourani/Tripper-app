import React from "react";
import axios from "axios";
import placeCardType from "../sharedType/placeCardsType";
const useFetchFavoritePlaces = () => {
  const [favoriteUserPlaces, setFavoriteUserPlaces] =
    React.useState<placeCardType[]>();
  React.useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: `http://tripper.dentatic.com/api/client/favorites?favorable_type=place`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("bearerToken")!
          )}`,
        },
      });
      setFavoriteUserPlaces(response.data.data as placeCardType[]);
    })();
  }, []);
  return favoriteUserPlaces;
};

export default useFetchFavoritePlaces;
