import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import placesType from "../sharedType/placesType";
import statusType from "../sharedType/fetchDataStatusType";

export const fetchPlaces = createAsyncThunk(
  "places/fetchPlaces",
  async (filter?: string) => {
    const url = filter
      ? `http://tripper.dentatic.com/api/places${filter}`
      : "http://tripper.dentatic.com/api/places";
    const res = await axios({
      method: "get",
      url: url,
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.data.data;
  }
);
type stateType = {
  places: placesType;
  status: statusType;
};
const initialState: stateType = {
  places: [],
  status: "idle",
};
const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlaces.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.places = [...action.payload];
    });
    builder.addCase(fetchPlaces.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default placesSlice.reducer;
