import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type governorateState =
  | {
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
    }[]
  | [];
export const fetchGovernorate = createAsyncThunk(
  "governorate/fetchGovernorate",
  async () => {
    const res = await axios({
      method: "git",
      url: "http://tripper.dentatic.com/api/countries/212/cities",
      headers: {
        Accept: "application/json",
      },
    });
    return res.data;
  }
);
const initialState: governorateState = [];
const governorateSlice = createSlice({
  name: "governorate",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGovernorate.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
export default governorateSlice.reducer;
