import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
import placeTypeType from "../sharedType/PlaceTypeType";
type stateType = {
  placeTypes: placeTypeType[];
  status: statusType;
};
export const fetchPlaceType = createAsyncThunk(
  "placeType/fetchPlaceType",
  async () => {
    const res = await axios({
      method: "get",
      url: "http://tripper.dentatic.com/api/place-types",
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.data;
  }
);
const initialState: stateType = {
  placeTypes: [],
  status: "idle",
};
const placeTypeSlice = createSlice({
  name: "placeType",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlaceType.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPlaceType.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.placeTypes = [...action.payload];
    });
    builder.addCase(fetchPlaceType.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default placeTypeSlice.reducer;
