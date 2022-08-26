import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
const EditUserProfile = () => {
  const navigate = useNavigate();
  const editProfileHandler = () => {
    navigate("/edit-profile");
  };
  return (
    <Stack
      onClick={editProfileHandler}
      sx={{
        borderRadius: "50%",
        backgroundColor: "white",
        p: 1,
        boxShadow: 3,
      }}
      justifyContent={"center"}
      alignItems="center"
      component="span"
    >
      <EditIcon color="primary" />
    </Stack>
  );
};

export default EditUserProfile;
