import React from "react";
import axios from "axios";
import tripsType from "../sharedType/tripsType";
const useFetchFavoriteJourneys = () => {
  const [favoriteUserJourneys, setFavoriteUserJourneys] =
    React.useState<tripsType[]>();
  React.useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: `http://tripper.dentatic.com/api/client/favorites?favorable_type=journey`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("bearerToken")!
          )}`,
        },
      });
      setFavoriteUserJourneys(response.data.data as tripsType[]);
    })();
  }, []);
  return favoriteUserJourneys;
};

export default useFetchFavoriteJourneys;
