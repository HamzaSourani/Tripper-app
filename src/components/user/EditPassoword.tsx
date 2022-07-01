import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Transition from "../../sharedComponents/Transition";
import { useAppDispatch } from "../../app/hooks";
import { chooseDirection } from "../../features/transitonDirectionSlice";
type editPasswordProps = {
  open: boolean;
  handelClose: () => void;
  children: ReactNode;
};
const EditPassoword = ({ open, handelClose, children }: editPasswordProps) => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(chooseDirection("up"));
  }, [dispatch]);
  return (
    <Dialog
      open={open}
      sx={{ "& .MuiDialog-paper": { p: { xs: 2, lg: 3 } } }}
      onClose={handelClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>إعادة تعيين كلمة المرور</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ direction: "rtl" }}>
        <Button variant="text" onClick={handelClose}>
          إلغاء
        </Button>
        <Button variant="contained" onClick={handelClose}>
          إعادة العتيين
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPassoword;
