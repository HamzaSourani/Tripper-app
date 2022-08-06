import React from "react";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { handleCloseSnackbar } from "../features/snackbarSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarComponent = () => {
  const dispatch = useAppDispatch();
  const snackbarState = useAppSelector((state: RootState) => state.snackbar);
  const handleClose = () => {
    dispatch(handleCloseSnackbar());
  };
  return (
    <Snackbar
      open={snackbarState.open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        severity={snackbarState.alertType}
        elevation={4}
        variant="filled"
        onClose={handleClose}
      >
        {snackbarState.alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
