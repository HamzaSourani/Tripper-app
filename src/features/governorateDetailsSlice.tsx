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
  media: {
    id: number;
    model_type: "city";
    model_id: string;
    uuid: string;
    collection_name: "default";
    name: string;
    file_name: string;
    mime_type: string;
    disk: "public";
    conversions_disk: "public";
    size: string;
    manipulations: [];
    custom_properties: [];
    generated_conversions: [];
    responsive_images: [];
    order_column: 1;
    created_at: string;
    updated_at: string;
    original_url: string;
    preview_url: string;
  }[];
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
