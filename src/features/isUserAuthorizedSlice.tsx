import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  state: boolean;
};
const initialState: stateType = {
  state: false,
};
const isUserAuthorized = createSlice({
  name: "isUserAuthorized",
  initialState,
  reducers: {
    checkUserStatus(state) {
      if (localStorage.getItem("bearerToken") !== null)
        if (localStorage.getItem("bearerToken")?.length !== 0)
          state.state = true;
        else state.state = false;
      else state.state = false;
    },
  },
});
export default isUserAuthorized.reducer;
export const { checkUserStatus } = isUserAuthorized.actions;
