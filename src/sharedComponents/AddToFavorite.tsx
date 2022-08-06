import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
type addToFavoriteProps = {
  addToFavorite?: boolean;
  itIsFavorite: boolean;
};
const AddToFavorite = ({ addToFavorite, itIsFavorite }: addToFavoriteProps) => {
  return (
    <>
      {addToFavorite || itIsFavorite ? (
        <FavoriteIcon
          sx={{
            color: "red",
            filter: "drop-shadow(0px 0px 2px  rgba(255,0,0,.5) )",
          }}
        ></FavoriteIcon>
      ) : (
        <FavoriteBorderIcon
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          color="primary"
        />
      )}
    </>
  );
};

export default AddToFavorite;
