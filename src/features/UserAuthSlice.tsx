import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
import { userAuthState, userLogin, userSignup } from "../sharedType/userType";

const initialState: userAuthState = {};

export const login = createAsyncThunk(
  "userAuth/login",
  async (userInfo: userLogin) => {
    const response = await axios({
      method: "post",
      url: "http://www.tripper.dentatic.com/api/client/auth/login",
      data: userInfo,
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  }
);
export const signup = createAsyncThunk(
  "userAuth/signup",
  async (userInfo: userSignup) => {
    const response = await axios({
      method: "post",
      url: "http://tripper.dentatic.com/api/client/auth/register",
      data: userInfo,
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  }
);
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(signup.fulfilled, (state, action) => {
      return action.payload.data;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return action.payload.data;
    });
  },
});

export default userAuthSlice.reducer;
