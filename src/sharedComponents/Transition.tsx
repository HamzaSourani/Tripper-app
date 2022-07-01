import React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  const direction = useAppSelector(
    (state: RootState) => state.transtionDirection.direction
  );
  return <Slide direction={direction} ref={ref} {...props} />;
});

export default Transition;
