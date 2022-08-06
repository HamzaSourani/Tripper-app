import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import addToFavoriteParam from "../sharedType/addToFavoriteParam";
import favoritesType from "../sharedType/favoritesType";
type favoriteItem = {
  favorable_id: string;
  favorable_type: "place" | "journey";
  user_id: string;
  id: string;
};
type stateType = favoriteItem[];

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
  async (param: favoritesType) => {
    let url = (() => {
      if (param.journey)
        return `http://tripper.dentatic.com/api/client/favorites?favorable_type=${param.journey}`;
      else if (param.place)
        return `http://tripper.dentatic.com/api/client/favorites?favorable_type=${param.place}`;
    })();
    const response = await axios({
      method: "get",
      url,
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
const initialState: stateType = [];
const userFavorite = createSlice({
  name: "userFavorite",
  initialState,
  reducers: {
    removeFromFavorite(state, action: PayloadAction<string>) {
      state = state.filter((item) => item.favorable_id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchAddToFavorite.fulfilled,
      (state, action: PayloadAction<favoriteItem>) => {
        state.push(action.payload);
      }
    );
    builder.addCase(
      fetchUserFavorites.fulfilled,
      (state, action: PayloadAction<favoriteItem[]>) => {
        return action.payload;
      }
    );
  },
});
export default userFavorite.reducer;
export const { removeFromFavorite } = userFavorite.actions;
