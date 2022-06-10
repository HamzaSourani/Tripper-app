import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputPassword from "../../sharedComponents/InputPassword";
import InputText from "../../sharedComponents/InputText";
import Brand from "../../sharedComponents/Brand";
const Login = () => {
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
            justifyContent="space-evenly"
            alignItems={"center"}
            sx={{ my: 2 }}
            spacing={2}
          >
            <Brand />
            <Typography color="primary">
              تعرف أكثر على سوريا،خلي ترتيب الرحلة علينا
            </Typography>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
            <InputText label="البريدالالكتروني" type="email" />
            <InputPassword label="كلمة المرور" />
          </Stack>
          <Button
            variant="contained"
            sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
          >
            تسجيل الدخول
          </Button>
          <Stack direction={"row"} justifyContent="center" spacing={1}>
            <Typography>ليس لديك حساب؟</Typography>
            <Link to="/signup">إنشاء حساب</Link>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
