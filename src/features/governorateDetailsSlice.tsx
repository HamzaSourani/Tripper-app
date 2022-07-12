import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import statusType from "../sharedType/fetchDataStatusType";
import axios from "axios";
type governorateDetails = {
  id: number;
  name: string;
  img: null;
  description: null;
  code: null;
  longitude: null;
  latitude: null;
  created_at: string;
  updated_at: string;
  country_id: 212;
};
type stateType = {
  governorateDetails: governorateDetails | undefined;
  status: statusType;
};

export const fetchGovernorateDetails = createAsyncThunk(
  "governorateDetails/fetchGovernorateDetails",
  async (id: number) => {
    const res = await axios({
      method: "get",
      url: `http://tripper.dentatic.com/api/countries/212/cities/${id}`,
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.data;
  }
);
const initialState: stateType = {
  governorateDetails: undefined,
  status: "idle",
};
const governorateDetailsSlice = createSlice({
  name: "governorateDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGovernorateDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGovernorateDetails.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.governorateDetails = { ...action.payload };
    });
    builder.addCase(fetchGovernorateDetails.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default governorateDetailsSlice.reducer;
