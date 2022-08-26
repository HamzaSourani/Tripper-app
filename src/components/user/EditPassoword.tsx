import React, { ReactNode, useState } from "react";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Transition from "../../sharedComponents/Transition";
import InputPassword from "../../sharedComponents/InputPassword";
import { useAppDispatch } from "../../app/hooks";
import { chooseDirection } from "../../features/transitonDirectionSlice";
import useEditPasswrod from "../../customHooks/useEditPasswrod";
type editPasswordProps = {
  open: boolean;
  handleClose: () => void;
};
const EditPassoword = ({ open, handleClose }: editPasswordProps) => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [oldPassword, setoldPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const editPassword = useEditPasswrod({
    password,
    password_confirmation: passwordConfirmation,
    old_password: oldPassword,
    handleClose,
  });
  React.useEffect(() => {
    dispatch(chooseDirection("up"));
  }, [dispatch]);

  return (
    <Dialog
      open={open}
      sx={{ "& .MuiDialog-paper": { p: { xs: 2, lg: 3 } } }}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>إعادة تعيين كلمة المرور</DialogTitle>
      <DialogContent>
        <Stack sx={{ mt: 2 }} spacing={1}>
          <InputPassword
            label="كلمة المرور القديمة"
            value={oldPassword}
            setValue={setoldPassword}
            width={"100%"}
          />

          <InputPassword
            label="كلمة المرور الجديدة"
            value={password}
            setValue={setPassword}
            width={"100%"}
          />
          <InputPassword
            label="تأكيد كلمة المرور الجديدة"
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            width={"100%"}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ direction: "rtl" }}>
        <Button variant="text" onClick={handleClose}>
          إلغاء
        </Button>
        <Button variant="contained" onClick={editPassword}>
          إعادة العتيين
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPassoword;
