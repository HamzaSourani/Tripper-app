import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import alertType from "../sharedType/alertType";
type stateType = {
  alertType: alertType;
  alertMessage: string;
  open: boolean;
};
const initialState: stateType = {
  alertType: "success",
  alertMessage: "",
  open: false,
};
const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    handleOpenSnackbar(state) {
      state.open = true;
    },
    handleCloseSnackbar(state) {
      state.open = false;
    },
    setSnackbarParam(
      state,
      action: PayloadAction<{ alertMessage: string; alertType: alertType }>
    ) {
      state.alertMessage = action.payload.alertMessage;
      state.alertType = action.payload.alertType;
      state.open = true;
    },
  },
});
export default snackbarSlice.reducer;
export const { handleOpenSnackbar, handleCloseSnackbar, setSnackbarParam } =
  snackbarSlice.actions;
