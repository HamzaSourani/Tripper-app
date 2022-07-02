import React from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Transition from "./Transition";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { chooseDirection } from "../features/transitonDirectionSlice";
import { RootState } from "../app/store";
import { handleCloseGOToSignup } from "../features/goToSignupSlice";

const GoToSignup = () => {
  const open = useAppSelector((state: RootState) => state.goToSignup.open);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(chooseDirection("down"));
  }, [dispatch]);
  const signupHandler = () => {
    navigate("/signup");
    dispatch(handleCloseGOToSignup());
  };
  const closeDialog = () => {
    dispatch(handleCloseGOToSignup());
  };
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      sx={{ "& .MuiDialog-paper": { p: { xs: 2, lg: 3 } } }}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>قم بتسجيل الدخول للتمتع بجميع ميزات الموقع</DialogTitle>
      <DialogActions sx={{ direction: "rtl" }}>
        <Button variant="text" onClick={closeDialog}>
          إلغاء
        </Button>
        <Button variant="contained" onClick={signupHandler}>
          إنشاء حساب
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GoToSignup;
