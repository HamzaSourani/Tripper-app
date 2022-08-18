import React from "react";
import axios from "axios";
type propsType = { id: string; bearerToken: string };
const useRemoveFavoriteItem = ({ id, bearerToken }: propsType) => {
  const [removeSucceed, setRemoveSucceed] = React.useState<boolean>(false);
  const removeItemFromFavorite = async () => {
    try {
      const response = await axios({
        method: "delete",
        url: `http://tripper.dentatic.com/api/client/favorites/remove?favorable_id=${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      if (response.data.message === "Operation succeeded.") {
        // dispatch(removeFromFavorite(id));
        setRemoveSucceed(true);
      }
    } catch (error) {}
  };
  return [removeItemFromFavorite, removeSucceed] as const;
};

export default useRemoveFavoriteItem;
