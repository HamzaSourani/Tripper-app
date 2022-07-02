import { createSlice } from "@reduxjs/toolkit";
type stateType = {
  open: boolean;
};
const initialState: stateType = {
  open: false,
};
const goToSignupSlice = createSlice({
  name: "goToSignup",
  initialState,
  reducers: {
    handleOpenGOToSignup(state) {
      state.open = true;
    },
    handleCloseGOToSignup(state) {
      state.open = false;
    },
  },
});
export default goToSignupSlice.reducer;
export const { handleCloseGOToSignup, handleOpenGOToSignup } =
  goToSignupSlice.actions;
