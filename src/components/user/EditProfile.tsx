import React, { useState } from "react";
import { setSnackbarParam } from "../../features/snackbarSlice";
import { useAppDispatch } from "../../app/hooks";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserImg from "../../sharedComponents/UserImg";

import InputText from "../../sharedComponents/InputText";
import InputSelect from "../../sharedComponents/InputSelect";
import useToggleEle from "../../customHooks/useToggleEle";
import useUpdataUserInfo from "../../customHooks/useUpdataUserInfo";
import { editUserProfile } from "../../sharedType/userType";
import genderTypes from "../../sharedData/genderTypes";
import governorates from "../../sharedData/governorates";
import OutlineGoBack from "../../sharedComponents/OutlineGoBack";
import LoadingButton from "../../sharedComponents/LoadingButton";
import EditPassoword from "./EditPassoword";

const EditProfile = () => {
  const userData: editUserProfile = JSON.parse(
    localStorage.getItem("userInfo")!
  );
  const [firstName, setFirstName] = useState<string>(userData.first_name);
  const [lastName, setLastName] = useState<string>(userData.last_name);
  const [name, setName] = useState<string>(userData.name);

  const [cityId, setCityId] = useState<string>(userData.city_id);
  const [gender, setGender] = useState<string>(userData.gender);
  const [responseMessage, setResponseMessage] = React.useState<string>("");
  const [open, handelOpen, handelClose] = useToggleEle();
  const dispatch = useAppDispatch();
  const userInfo = {
    first_name: firstName,
    last_name: lastName,
    name: name,
    gender,
    city_id: cityId,
  } as editUserProfile;
  const [updateUserInfoStatus, update] = useUpdataUserInfo(
    userInfo,
    setResponseMessage
  );

  React.useEffect(() => {
    if (responseMessage === "Operation succeeded.") {
      dispatch(
        setSnackbarParam({
          alertMessage: "تم تعديل الحساب بنجاح",
          alertType: "success",
        })
      );
      setResponseMessage("");
    } else if (updateUserInfoStatus === "failed") {
      dispatch(
        setSnackbarParam({
          alertMessage: "حدث خطاء ما عند عملية تعديل الحساب",
          alertType: "error",
        })
      );
    }
  }, [responseMessage, dispatch, updateUserInfoStatus]);

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

            <LoadingButton
              onClick={update}
              label="تعديل "
              loading={updateUserInfoStatus === "loading"}
              sx={{ display: "block", m: "15px auto", minWidth: "50%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <EditPassoword open={open} handleClose={handelClose} />
    </>
  );
};

export default EditProfile;
