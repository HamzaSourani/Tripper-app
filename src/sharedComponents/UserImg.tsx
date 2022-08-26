import React from "react";
import { useAppDispatch } from "../app/hooks";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditUserProfile from "./EditUserProfile";
import { setSnackbarParam } from "../features/snackbarSlice";
import getUserImage from "../sharedFunction/getUserImage";
import axios from "axios";

type userImgProps = Partial<{
  choose: boolean;
  edit: boolean;
}>;
const UserImg = ({ choose, edit }: userImgProps) => {
  const dispatch = useAppDispatch();
  const [imgSrc, setImgSrc] = React.useState<File | undefined>();
  // React.useEffect(() => {
  //   (async () => {
  //     const file = await getUserImage();
  //     setImgSrc(file);
  //   })();
  // }, []);

  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    setImgSrc(file);
  };

  // function setUserImage() {
  //   var reader = new FileReader();
  //   reader.onload = function (base64) {
  //     localStorage["userImage"] = base64;
  //   };
  //   reader.readAsDataURL(imgSrc!);
  // }
  const uploadUserImage = async () => {
    const formData = new FormData();
    formData.append("file", imgSrc!);

    try {
      const response = await axios.post(
        "http://tripper.dentatic.com/api/client/update-photo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("bearerToken")!
            )}`,
          },
        }
      );
      if (response.data.message === "Operation succeeded.") {
        dispatch(
          setSnackbarParam({
            alertMessage: "تم تعيين الصورة بنجاح",
            alertType: "success",
          })
        );
        // setUserImage();
      }

      console.log(response);
    } catch (error) {
      dispatch(
        setSnackbarParam({
          alertMessage: "حدث خطاء ما في تعيين الصورة الرجاء المحاولة من جديد",
          alertType: "error",
        })
      );
    }
  };
  return (
    <Stack justifyContent={"center"} spacing={2} className="container">
      <Box position={"relative"}>
        <Avatar
          src={imgSrc && window.URL.createObjectURL(imgSrc)}
          alt=""
          sx={{
            width: 160,
            height: 160,
            border: "1px solid #1976d27d",
            boxShadow: "0px 0px 4px #1976d27d",
          }}
        />

        {choose && (
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
                <CameraAltIcon sx={{ color: "var(--golden-color)" }} />
              </Stack>
            </label>
          </Box>
        )}
        {edit && (
          <Box position={"absolute"} bottom={15} left={1}>
            {" "}
            <EditUserProfile />
          </Box>
        )}
      </Box>
      {imgSrc && (
        <Button variant={"contained"} onClick={uploadUserImage}>
          {" "}
          تعيين الصورة
        </Button>
      )}
    </Stack>
  );
};

export default UserImg;
