import React from "react";
import { Link } from "react-router-dom";
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
const gender = ["ذكر", "انثى"];
const governorates = [
  "دمشق",
  "حلب",
  "الاذقية",
  "طرطوس",
  "ريف دمشق",
  "حمص",
  "حماه",
  "الحسكة",
  "دير الزور",
  "الرقة",
  "السويداء",
  "ادلب",
  "القنيطرة",
  "",
];
const Signup = () => {
  const [open, handelOpen, handelClose] = useToggleEle();
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
            <InputText label="الاسم الأول" type="text" />
            <InputText label="الاسم الأخير" type="text" />
            <InputText label="البريدالالكتروني" type="email" />
            <InputPassword label="كلمة المرور" />
            <InputPassword label="تأكيد كلمة المرور" />
            <InputSelect label="المدينة" items={governorates} />
            <InputSelect label="الجنس" items={gender} />
          </Stack>
          <Button
            variant="contained"
            sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
            onClick={handelOpen}
          >
            إنشاء حساب
          </Button>
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
