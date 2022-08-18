import React from "react";
import Stack from "@mui/material/Stack";
import AddToFavorite from "./AddToFavorite";
import useAddToFavorite from "../customHooks/useAddToFavorite";
type favoriteIconContainerProps = {
  favorable_type: "journey" | "place";
  favorable_id: string;
  itIsFavorite: boolean;
};
const FavoriteIconContainer = ({
  favorable_type,
  favorable_id,
  itIsFavorite,
}: favoriteIconContainerProps) => {
  const [favorites, setFavorites] = React.useState<number>(0);
  const [addToFavorite, addToFavoriteHandler] = useAddToFavorite({
    data: {
      favorable_type: favorable_type,
      favorable_id: favorable_id,
      itIsFavorite: itIsFavorite,
    },
    setFavorites,
    favorites: favorites,
  });

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
      <AddToFavorite
        addToFavorite={addToFavorite}
        itIsFavorite={itIsFavorite}
      />
    </Stack>
  );
};

export default FavoriteIconContainer;
