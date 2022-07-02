import React from "react";
import { useAppDispatch } from "../app/hooks";
import { handleOpenGOToSignup } from "../features/goToSignupSlice";
import extracingtUserData from "../sharedFunction/extracingtUserData";
const useAddToFavorite = () => {
  const dispatch = useAppDispatch();
  const [addToFavorite, setAddToFavorite] = React.useState<boolean>(false);
  const userData = extracingtUserData();
  const addToFavoriteHandler = () => {
    if (userData) setAddToFavorite(!addToFavorite);
    else dispatch(handleOpenGOToSignup());
  };
  return [addToFavorite, addToFavoriteHandler] as const;
};

export default useAddToFavorite;
