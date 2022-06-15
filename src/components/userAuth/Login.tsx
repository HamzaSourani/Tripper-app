import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputPassword from "../../sharedComponents/InputPassword";
import InputText from "../../sharedComponents/InputText";
import Brand from "../../sharedComponents/Brand";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/UserAuthSlice";
import axios from "axios";
type statusType = "idle" | "loading" | "succeeded" | "failed";
const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [authStatus, setAuthStatus] = useState<statusType>("idle");
  const [authError, setAuthError] = useState<string>("");
  const [userData, setUserData] = useState<{}>({});
  const dispatch = useAppDispatch();
  const userInfo = {
    email,
    password,
  };
  const canSendData = [email, password].every(Boolean);
  const handlepostUserAuth = async () => {
    try {
      setAuthStatus("loading");
      setAuthError("");
      const res = await axios({
        method: "post",
        url: "https://www.tripper.dentatic.com/api/client/auth/login",
        data: userInfo,
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

  React.useEffect(() => {
    if (authStatus === "succeeded") {
      dispatch(login(userData));
      setEmail("");
      setPassword("");
    }
  }, [authStatus, dispatch, userData]);

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
          </Stack>
          {authStatus === "failed" && (
            <Box sx={{ color: "red", textAlign: "center", my: 3 }}>
              {authError}
            </Box>
          )}
          {canSendData && (
            <Button
              variant="contained"
              sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
              onClick={handlepostUserAuth}
              disabled={authStatus === "loading"}
            >
              تسجيل الدخول
            </Button>
          )}
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
