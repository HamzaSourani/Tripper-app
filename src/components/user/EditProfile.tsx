import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../sharedComponents/UserImg";
import InputPassword from "../../sharedComponents/InputPassword";
import InputText from "../../sharedComponents/InputText";
import InputSelect from "../../sharedComponents/InputSelect";
import useToggleEle from "../../customHooks/useToggleEle";
import { editUserProfile } from "../../sharedType/userType";
import genderTypes from "../../sharedData/genderTypes";
import governorates from "../../sharedData/governorates";
import extracingtUserData from "../../sharedFunction/extracingtUserData";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
import EditPassoword from "./EditPassoword";

const EditProfile = () => {
  const { _firstName, _lastName, _userEmail, _gender, _cityId } =
    extracingtUserData();

  const [open, handelOpen, handelClose] = useToggleEle();

  const [firstName, setFirstName] = useState<string>(_firstName);
  const [lastName, setLastName] = useState<string>(_lastName);
  const [email, setEmail] = useState<string>(_userEmail);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [cityId, setCityId] = useState<string>(_cityId);
  const [gender, setGender] = useState<string>(_gender);

  const userInfo = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    password_confirmation: passwordConfirmation,
    gender,
    city_id: cityId,
  } as editUserProfile;
  const canSendData = [
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    gender,
    cityId,
  ].every(Boolean);
  return (
    <>
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
            <OutlineGoBack title="" />
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
              <Typography
                variant="h6"
                color={"primary"}
                onClick={handelOpen}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                إعادة تعيين كلمة المرور
              </Typography>
            </Stack>

            {/* {authStatus === "failed" && (
        <Box sx={{ color: "red", textAlign: "center", my: 3 }}>
          {authError}
        </Box>
      )}
      {canSendData && (
        <Button
          variant="contained"
          sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
          onClick={handleUserAuth}
          disabled={authStatus === "loading"}
        >
         حفظ التغيرات
        </Button>
      )} */}
          </Box>
        </Grid>
      </Grid>
      <EditPassoword open={open} handelClose={handelClose}>
        <Stack spacing={1}>
          <InputPassword
            label="كلمة المرور القديمة"
            value={password}
            setValue={setPassword}
            width={"100%"}
          />
          <InputPassword
            label="كلمة المرور الجديدة"
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            width={"100%"}
          />
          <InputPassword
            label="تأكيد كلمة المرور الجديدة"
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            width={"100%"}
          />
        </Stack>
      </EditPassoword>
    </>
  );
};

export default EditProfile;
