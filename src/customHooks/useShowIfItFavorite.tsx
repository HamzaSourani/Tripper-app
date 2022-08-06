import React from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import addToFavoriteType from "../sharedType/favoriteType";

const useShowIfItFavorite = (data: addToFavoriteType) => {
  const favorites = useAppSelector((state: RootState) => state.userFavorite);
  const [isItFavorite, setIsItFavorite] = React.useState<boolean>(false);
  React.useEffect(() => {
    const favorite = favorites.find(
      (item) =>
        item.favorable_id === data.favorable_id &&
        item.favorable_type === data.favorable_type
    );
    setIsItFavorite(Boolean(favorite));
  }, [data.favorable_id, data.favorable_type, favorites]);

  return isItFavorite;
};

export default useShowIfItFavorite;
