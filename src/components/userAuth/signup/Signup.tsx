import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { signup } from "../../../features/UserAuthSlice";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../../sharedComponents/UserImg";
import InputPassword from "../../../sharedComponents/InputPassword";
import InputText from "../../../sharedComponents/InputText";
import InputSelect from "../../../sharedComponents/InputSelect";
import useToggleEle from "../../../customHooks/useToggleEle";
import Interests from "./Interests";
import axios from "axios";
const genderTypes = [
  { ui: "ذكر", server: "male" },
  { ui: "مؤنث", server: "female" },
];
const governorates = [
  { ui: "دمشق", server: "1" },
  { ui: "حلب", server: "2" },
  { ui: "الاذقية", server: "3" },
  { ui: "طرطوس", server: "4" },
  { ui: "ريف دمشق", server: "5" },
  { ui: "حمص", server: "6" },
  { ui: "حماه", server: "7" },
  { ui: "الحسكة", server: "8" },
  { ui: "دير الزور", server: "9" },
  { ui: "الرقة", server: "10" },
  { ui: "السويداء", server: "11" },
  { ui: "القنيطرة", server: "12" },
  { ui: "ادلب", server: "13" },
];
type statusType = "idle" | "loading" | "succeeded" | "failed";
const Signup = () => {
  const [open, handelOpen, handelClose] = useToggleEle();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [cityId, setCityId] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [authStatus, setAuthStatus] = useState<statusType>("idle");
  const [authError, setAuthError] = useState<string>("");
  const [userData, setUserData] = useState<{}>({});
  const dispatch = useAppDispatch();
  const userInfo = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    password_confirmation: passwordConfirmation,
    gender,
    city_id: cityId,
  };
  const temp = {
    first_name: "hamza",
    last_name: "sorany",
    email: "199899@gmail.com",
    password: "123123123",
    password_confirmation: "123123123",
    gender: "male",
    city_id: "1",
  };
  const canSendData = [
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    gender,
    cityId,
  ].every(Boolean);
  const handlepostUserAuth = async () => {
    try {
      setAuthStatus("loading");
      setAuthError("");
      const res = await axios({
        method: "post",
        url: "http://tripper.dentatic.com/api/client/auth/register",
        data: canSendData ? userInfo : temp,
        headers: {
          Accept: "application/json",
        },
      });
      setAuthStatus("succeeded");
      setUserData(res.data);
    } catch (error) {
      setAuthStatus("failed");
      const _error = error as {
        response: {
          data: {
            message: string;
          };
        };
      };
      setAuthError(_error!.response.data.message);
    }
  };

  useEffect(() => {
    if (authStatus === "succeeded") {
      dispatch(signup(userData));
      setCityId("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setGender("");
      setPassword("");
      setPasswordConfirmation("");
      handelOpen();
    }
  }, [authStatus, handelOpen, dispatch, userData]);

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
            <UserImg />
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
          {/* {canSendData && ( */}
          <Button
            variant="contained"
            sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
            onClick={handlepostUserAuth}
            disabled={authStatus === "loading"}
          >
            إنشاء حساب
          </Button>
          {/* )} */}
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
