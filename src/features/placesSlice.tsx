import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import placesType from "../sharedType/placesType";

export const fetchPlaces = createAsyncThunk("places/fetchPlaces", async () => {
  const res = await axios({
    method: "get",
    url: `http://tripper.dentatic.com/api/places`,
    headers: {
      Accept: "application/json",
    },
  });
  return res.data.data.data as placesType;
});
const initialState: placesType = [];
const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      return [...action.payload];
    });
  },
});
export default placesSlice.reducer;
