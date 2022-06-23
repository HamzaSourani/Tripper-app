import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  focus: boolean;
  addComment: Boolean;
};
const initialState: stateType = {
  focus: false,
  addComment: false,
};
const placeAddCommentSlice = createSlice({
  name: "placeAddComment",
  initialState,
  reducers: {
    mountComment(state) {
      return { focus: true, addComment: true };
    },
    unMountComment(state) {
      return initialState;
    },
  },
});
export default placeAddCommentSlice.reducer;
export const { mountComment, unMountComment } = placeAddCommentSlice.actions;
