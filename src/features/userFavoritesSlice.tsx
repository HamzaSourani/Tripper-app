import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import addToFavoriteParam from "../sharedType/addToFavoriteParam";

import placeCardsType from "../sharedType/placeCardsType";
import tripsType from "../sharedType/tripsType";

type stateType = {
  favorites: tripsType[] | placeCardsType[];
  favoritesType: "place" | "journey";
};

export const fetchAddToFavorite = createAsyncThunk(
  "userFavorite/addToFavorite",
  async (param: addToFavoriteParam) => {
    const response = await axios({
      method: "post",
      url: "http://tripper.dentatic.com/api/client/favorites/add",
      data: param.data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${param.bearerToken}`,
      },
    });
    return response.data.data;
  }
);
export const fetchUserFavorites = createAsyncThunk(
  "userFavorite/fetchUserFavorites",
  async (param: string) => {
    const response = await axios({
      method: "get",
      url: `http://tripper.dentatic.com/api/client/favorites?favorable_type=${param}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("bearerToken")!
        )}`,
      },
    });
    return response.data.data;
  }
);
const initialState: stateType = { favorites: [], favoritesType: "journey" };
const userFavorite = createSlice({
  name: "userFavorite",
  initialState,
  reducers: {
    changeFavoritesType(state, action: PayloadAction<"place" | "journey">) {
      state.favoritesType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserFavorites.fulfilled, (state, action) => {
      state.favorites = [...action.payload];
    });
  },
});
export default userFavorite.reducer;
export const { changeFavoritesType } = userFavorite.actions;
