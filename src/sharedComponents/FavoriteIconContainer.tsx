import React from "react";
import Stack from "@mui/material/Stack";
import AddToFavorite from "./AddToFavorite";
import useAddToFavorite from "../customHooks/useAddToFavorite";

const FavoriteIconContainer = () => {
  const [addToFavorite, addToFavoriteHandler] = useAddToFavorite();
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: 20,
        left: { xs: 10, md: 20 },
        borderRadius: "50%",
        backgroundColor: "white",
        p: 1,
        boxShadow: 3,
      }}
      justifyContent={"center"}
      alignItems="center"
      onClick={addToFavoriteHandler}
    >
      <AddToFavorite addToFavorite={addToFavorite} />
    </Stack>
  );
};

export default FavoriteIconContainer;
