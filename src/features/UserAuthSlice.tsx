import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
interface userAuthState {
  data: {};
}

const initialState: userAuthState = {
  data: {},
};

// export const signup = createAsyncThunk(
//   "userAuth/signup",
//   async (userInfo: userInfoType) => {
//     const response = await axios({
//       method: "post",
//       url: "http://tripper.dentatic.com/api/client/auth/register",
//       data: userInfo,
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     return response.data;
//   }
// );
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,

  reducers: {
    signup(state, action) {
      state.data = action.payload;
    },
    login(state, action) {
      state.data = action.payload;
    },
    logout(state) {
      state.data = {};
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(signup.pending, (state, action) => {
  //     state.status = "loading";
  //   });
  //   builder.addCase(signup.fulfilled, (state, action) => {
  //     state.status = "succeeded";
  //     state.data = { ...action.payload };
  //   });
  //   builder.addCase(signup.rejected, (state, action) => {
  //     state.status = "failed";
  //     state.error = action.error.message;
  //   });
  // },
});
export const { signup, login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
