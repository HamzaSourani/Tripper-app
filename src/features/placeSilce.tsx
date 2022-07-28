import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import placeType from "../sharedType/placeType";
import statusType from "../sharedType/fetchDataStatusType";

export const fetchPlace = createAsyncThunk(
  "place/fetchPlace",
  async (placeId: string) => {
    const res = await axios({
      method: "get",
      url: `http://tripper.dentatic.com/api/places/${placeId}`,
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.data;
  }
);
type stateType = {
  place: placeType;
  status: statusType;
};
const initialState: stateType = {
  place: undefined,
  status: "idle",
};
const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlace.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPlace.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.place = { ...action.payload };
    });
    builder.addCase(fetchPlace.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default placeSlice.reducer;
