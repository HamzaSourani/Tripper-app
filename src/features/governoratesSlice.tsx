import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import statusType from "../sharedType/fetchDataStatusType";
import axios from "axios";
type governoratesType = {
  id: number;
  name: string;
  img: string | null;
  description: string | null;
  code: string | null;
  longitude: string | null;
  latitude: string | null;
  created_at: string;
  updated_at: string;
  country_id: number;
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
}[];
type stateType = {
  governorates: governoratesType | [];
  status: statusType;
};

export const fetchGovernorates = createAsyncThunk(
  "governorates/fetchGovernorates",
  async () => {
    const res = await axios({
      method: "get",
      url: "http://tripper.dentatic.com/api/countries/212/cities",
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.data;
  }
);
const initialState: stateType = {
  governorates: [],
  status: "idle",
};
const governoratesSlice = createSlice({
  name: "governorates",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGovernorates.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGovernorates.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.governorates = [...action.payload];
    });
    builder.addCase(fetchGovernorates.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default governoratesSlice.reducer;
