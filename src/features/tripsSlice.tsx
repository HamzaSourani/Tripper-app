import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import statusType from "../sharedType/fetchDataStatusType";
import tripsType from "../sharedType/tripsType";
type stateType = {
  trips: tripsType;
  status: statusType;
};
export const fetchTrips = createAsyncThunk(
  "trips/fetchTrips",
  async (filter?: string) => {
    const url = filter
      ? `http://tripper.dentatic.com/api/journeys${filter}`
      : "http://tripper.dentatic.com/api/journeys";
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
const initialState: stateType = {
  trips: [],
  status: "idle",
};
const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrips.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.trips = [...action.payload];
    });
    builder.addCase(fetchTrips.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default tripsSlice.reducer;
