import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import alertType from "../sharedType/alertType";
type snackbarProps = {
  open: boolean;
  handleClose: () => void;
  succeededMessage: string;
  alertType: alertType;
};

const SnackbarComponent = ({
  open,
  handleClose,
  succeededMessage,
  alertType,
}: snackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        severity={alertType}
        elevation={4}
        variant="filled"
        onClose={handleClose}
      >
        {succeededMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
