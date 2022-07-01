import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import {} from '../app/store'
type directionType = "left" | "right" | "up" | "down";
type stateType = {
  direction: directionType;
};

const initialState: stateType = {
  direction: "left",
};

const transitionDirectionSlice = createSlice({
  name: "transtionDirection",
  initialState,
  reducers: {
    chooseDirection(state, action: PayloadAction<directionType>) {
      state.direction = action.payload;
    },
  },
});
export default transitionDirectionSlice.reducer;
export const { chooseDirection } = transitionDirectionSlice.actions;
