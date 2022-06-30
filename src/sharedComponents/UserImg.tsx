import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
type userImgProps = Partial<{
  choose: boolean;
  edit: boolean;
}>;
const UserImg = ({ choose, edit }: userImgProps) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = React.useState<string>("");
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = window.URL.createObjectURL(e.target.files[0]);
    setImgSrc(file);
  };
  const editProfileHandler = () => {
    if (edit) navigate("/edit");
  };
  return (
    <Box onClick={editProfileHandler} position={"relative"}>
      <Avatar src={imgSrc} alt="" sx={{ width: 160, height: 160 }} />
      <Box position={"absolute"} bottom={15} left={1}>
        {" "}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={handleImgUpload}
        />
        <label htmlFor="raised-button-file">
          <Stack
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
            {choose && <CameraAltIcon sx={{ color: "var(--golden-color)" }} />}
            {edit && <EditIcon color="primary" />}
          </Stack>
        </label>
      </Box>
    </Box>
  );
};

export default UserImg;
