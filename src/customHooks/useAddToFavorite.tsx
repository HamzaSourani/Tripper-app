import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleOpenGOToSignup } from "../features/goToSignupSlice";

const useAddToFavorite = () => {
  const dispatch = useAppDispatch();
  const [addToFavorite, setAddToFavorite] = React.useState<boolean>(false);
  const isUserAuthorized = useAppSelector(
    (state) => state.isUserAuthorized.state
  );
  const addToFavoriteHandler = () => {
    if (isUserAuthorized) setAddToFavorite(!addToFavorite);
    else dispatch(handleOpenGOToSignup());
  };
  return [addToFavorite, addToFavoriteHandler] as const;
};

export default useAddToFavorite;
