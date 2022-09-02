import React from "react";
import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { setSnackbarParam } from "../features/snackbarSlice";
import status from "../sharedType/fetchDataStatusType";
type params = {
  old_password: string;
  password: string;
  password_confirmation: string;
  handleClose: () => void;
};
const useEditPassword = ({
  old_password,
  password,
  password_confirmation,
  handleClose,
}: params) => {
  const [editPasswordStatus, setEditPasswordStatus] =
    React.useState<status>("idle");
  const dispatch = useAppDispatch();
  const editPasswordHandler = () => {
    if (password.length >= 8) {
      if (password === password_confirmation) editPassword();
      else
        dispatch(
          setSnackbarParam({
            alertMessage: "كلمة السر الجديدة و تأكيد كلمة السر غير متطابقان",
            alertType: "error",
          })
        );
    } else {
      dispatch(
        setSnackbarParam({
          alertMessage: "كلمة المرور يجب ان يوكن ثمانية محارف فما فوق ",
          alertType: "error",
        })
      );
    }
  };
  const editPassword = async () => {
    try {
      setEditPasswordStatus("loading");
      const response = await axios.put(
        "http://tripper.dentatic.com/api/client/reset-password",
        {},
        {
          params: {
            old_password,
            password,
            password_confirmation,
          },
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("bearerToken")!
            )}`,
          },
        }
      );
      console.log(response);
      if (response.data.message === "Operation succeeded.") {
        setEditPasswordStatus("succeeded");
        handleClose();
      }
    } catch (error) {
      setEditPasswordStatus("failed");
    }
  };
  React.useEffect(() => {
    if (editPasswordStatus === "succeeded")
      dispatch(
        setSnackbarParam({
          alertMessage: "تم تعديل كلمة المرور بنجاح",
          alertType: "success",
        })
      );
    else if (editPasswordStatus === "failed")
      dispatch(
        setSnackbarParam({
          alertMessage: "حدث خطاء ما في تعديل كلمة المرور ",
          alertType: "error",
        })
      );
  }, []);
  return editPasswordHandler;
};

export default useEditPassword;
