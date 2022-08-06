import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { checkUserStatus } from "../../../features/isUserAuthorizedSlice";
import { setSnackbarParam } from "../../../features/snackbarSlice";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../../sharedComponents/UserImg";
import InputPassword from "../../../sharedComponents/InputPassword";
import InputText from "../../../sharedComponents/InputText";
import InputSelect from "../../../sharedComponents/InputSelect";
import LoadingButton from "../../../sharedComponents/LoadingButton";
import Snackbar from "../../../sharedComponents/SnackbarComponent";
import useToggleEle from "../../../customHooks/useToggleEle";
import useUserSignup from "../../../customHooks/useUserSignup";
import Interests from "./Interests";
import { userSignup } from "../../../sharedType/userType";
import genderTypes from "../../../sharedData/genderTypes";
import governorates from "../../../sharedData/governorates";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [cityId, setCityId] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [open, handelOpen, handelClose] = useToggleEle();

  const dispatch = useAppDispatch();

  const userInfo = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    password_confirmation: passwordConfirmation,
    gender,
    city_id: cityId,
  } as userSignup;

  const [authError, authStatus, handleUserAuth] = useUserSignup(userInfo);
  const canSendData = [
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    gender,
    cityId,
  ].every(Boolean);

  useEffect(() => {
    if (authStatus === "succeeded") {
      dispatch(checkUserStatus());
      dispatch(
        setSnackbarParam({
          alertMessage: "تم إنشاء الحساب بنجاح",
          alertType: "success",
        })
      );
      setCityId("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setGender("");
      setPassword("");
      setPasswordConfirmation("");
      handelOpen();
    } else if (authStatus === "failed") {
      dispatch(
        setSnackbarParam({
          alertMessage: "حدث خطاء ما عند عملية إنشاء الحساب",
          alertType: "error",
        })
      );
    }
  }, [authStatus, handelOpen, dispatch]);

  return (
    <Grid
      sx={{
        minHeight: "70vh",
        my: 5,
      }}
      container
      justifyContent={"center"}
      alignItems="center"
    >
      <Grid item xs={11} sm={10} md={8} lg={6}>
        <Box
          sx={{
            p: 4,
            border: "1px solid var(--golden-color)",
            borderRadius: "1rem",
            boxShadow: "0px 0px 4px  var(--golden-color)",
          }}
        >
          <Stack
            sx={{ p: 3, width: "100%" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <UserImg choose={true} />
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
            <InputText
              label="الاسم الأول"
              type="text"
              value={firstName}
              setValue={setFirstName}
            />
            <InputText
              label="الاسم الأخير"
              type="text"
              value={lastName}
              setValue={setLastName}
            />
            <InputText
              label="البريدالالكتروني"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <InputPassword
              label="كلمة المرور"
              value={password}
              setValue={setPassword}
            />
            <InputPassword
              label="تأكيد كلمة المرور"
              value={passwordConfirmation}
              setValue={setPasswordConfirmation}
            />
            <InputSelect
              label="المدينة"
              items={governorates}
              value={cityId}
              setValue={setCityId}
            />
            <InputSelect
              label="الجنس"
              items={genderTypes}
              value={gender}
              setValue={setGender}
            />
          </Stack>
          {authStatus === "failed" && (
            <Box sx={{ color: "red", textAlign: "center", my: 3 }}>
              {authError}
            </Box>
          )}
          {canSendData && (
            <LoadingButton
              onClick={handleUserAuth}
              label="إنشاء حساب"
              loading={authStatus === "loading"}
              sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
            />
          )}
          <Interests open={open} handelClose={handelClose} />
          <Stack direction={"row"} justifyContent="center" spacing={1}>
            <Typography>لديك حساب مسبق؟</Typography>
            <Link to="/login">تسجيل الدخول</Link>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
