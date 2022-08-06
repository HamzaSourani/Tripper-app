import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenGOToSignup } from "../features/goToSignupSlice";
import { fetchAddToFavorite } from "../features/userFavoritesSlice";
import addToFavoriteType from "../sharedType/favoriteType";
import useRemoveFavoriteItem from "../customHooks/useRemoveFavoriteItem";
type propsType = {
  data: addToFavoriteType;
  favorites: number;
  setFavorites: (favorites: number) => void;
};
const useAddToFavorite = ({ data, setFavorites, favorites }: propsType) => {
  const dispatch = useAppDispatch();
  const [addToFavorite, setAddToFavorite] = React.useState<boolean>();
  const isUserAuthorized = useAppSelector(
    (state) => state.isUserAuthorized.state
  );
  const [removeItemFromFavorite, removeSucceed] = useRemoveFavoriteItem({
    id: data.favorable_id,
    bearerToken: JSON.parse(localStorage.getItem("bearerToken")!),
  });

  // React.useEffect(() => {
  //  setAddToFavorite(data.itIsFavorite)
  // }, [data])

  const addToFavoriteHandler = async () => {
    if (isUserAuthorized) {
      if (addToFavorite === undefined) {
        if (data.itIsFavorite === false) {
          try {
            setFavorites(favorites++);
            setAddToFavorite(true);
            await dispatch(
              fetchAddToFavorite({
                data: data,
                bearerToken: JSON.parse(localStorage.getItem("bearerToken")!),
              })
            ).unwrap();
          } catch (error) {
            setFavorites(favorites - 1);
            setAddToFavorite(false);
          }
        } else if (data.itIsFavorite === true) {
          removeItemFromFavorite();
          if (removeSucceed) {
            setFavorites(favorites - 1);
            setAddToFavorite(false);
          }
        }
      }
      if (addToFavorite !== undefined) {
        if (addToFavorite === false) {
          try {
            setFavorites(favorites++);
            setAddToFavorite(true);
            await dispatch(
              fetchAddToFavorite({
                data: data,
                bearerToken: JSON.parse(localStorage.getItem("bearerToken")!),
              })
            ).unwrap();
          } catch (error) {
            setFavorites(favorites - 1);
            setAddToFavorite(false);
          }
        } else if (addToFavorite === true) {
          removeItemFromFavorite();
          if (removeSucceed) {
            setFavorites(favorites - 1);
            setAddToFavorite(false);
          }
        }
      }
    } else dispatch(handleOpenGOToSignup());
  };
  return [addToFavorite, addToFavoriteHandler] as const;
};
export default useAddToFavorite;
