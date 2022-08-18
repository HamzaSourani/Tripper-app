import React, { useState, useEffect } from "react";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { mountComment, unMountComment } from "../features/PlaceAddCommentSlice";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import reviewType from "../sharedType/reviewType";
import useAddComment from "../customHooks/useAddComment";
import { editUserProfile } from "../sharedType/userType";
type commentsPropsType = {
  tripOrPlaceName: string;
  tripOrPlaceId: string;
  reviews: reviewType[];
  reviewableType: "place" | "journey";
};
const Comments = ({
  tripOrPlaceName,
  reviews,
  tripOrPlaceId,
  reviewableType,
}: commentsPropsType) => {
  const [commentValue, setCommentValue] = React.useState<string>("");
  const [mountTempComment, setMountTempComment] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userImg, setUserImg] = useState<string | null>("");
  const [mountComment, setMountComment] = useState<boolean>(false);
  const isUserAuth = useAppSelector(
    (state: RootState) => state.isUserAuthorized.state
  );

  const commentProps = {
    reviewableId: tripOrPlaceId,
    reviewableType: reviewableType,
    comment: commentValue,
    review: 1,
  };
  const [status, userReview, addComment] = useAddComment(commentProps);
  const mountAddCommentHandler = () => {
    const userEnfo: editUserProfile = JSON.parse(
      localStorage.getItem("userInfo")!
    );
    setMountComment(true);
    setUserImg(userEnfo.img);
    setUserName(userEnfo.name);
  };
  // const dispatch = useAppDispatch();
  // const commentStatus = useAppSelector(
  //   (state: RootState) => state.placeAddComment
  // );

  // const input = React.useRef<HTMLInputElement>(null);
  // console.log(commentStatus.focus);
  // if (commentStatus.focus) {
  //   input.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }

  // React.useEffect(() => {
  //   return () => {
  //     dispatch(unMountComment());
  //   };
  // }, [dispatch]);
  useEffect(() => {
    if (status === "succeeded") {
      setMountComment(false);
      setMountTempComment(true);
    }
  }, [status]);

  const sendCommentHandler = () => {
    // dispatch(unMountComment());
    addComment();
  };
  return (
    <>
      <Stack direction={"row"} alignItems="center" sx={{ my: 1 }}>
        <Typography
          sx={{
            flexGrow: 1,
            fontSize: { xs: "25px", sm: "27Px", md: "30px", lg: "32px" },
            fontWeight: { sx: "defualt", md: "700" },
          }}
        >
          التعليقات و التقيمات
        </Typography>
        {isUserAuth && (
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            color={"GrayText"}
            onClick={mountAddCommentHandler}
          >
            إضافة تعليق
          </Typography>
        )}
      </Stack>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {
          // commentStatus.addComment
          mountComment && (
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <TextField
                // focused={commentStatus.focus}
                fullWidth
                variant="outlined"
                multiline
                placeholder={`إضافة تعليق حول ${tripOrPlaceName}`}
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              />
              <Button variant="contained" onClick={sendCommentHandler}>
                تعليق
              </Button>
            </Stack>
          )
        }
        {mountTempComment && (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src={""} />
            </ListItemAvatar>
            <ListItemText primary={userName} secondary={userReview?.comment} />
            <ListItemIcon>
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
              >
                <StarIcon sx={{ color: "var(--golden-color)" }} />
                <Typography>{userReview?.review}</Typography>
              </Stack>
            </ListItemIcon>
          </ListItem>
        )}
        {reviews.map((review) => {
          return (
            <ListItem key={review.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="" src={review.user.img} />
              </ListItemAvatar>
              <ListItemText
                primary={review.user.name}
                secondary={review.comment}
              />
              <ListItemIcon>
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent={"center"}
                  spacing={1}
                >
                  <StarIcon sx={{ color: "var(--golden-color)" }} />
                  <Typography>{review.review}</Typography>
                </Stack>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Comments;
