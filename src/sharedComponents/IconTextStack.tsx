import React, { ReactNode } from "react";
import Stack from "@mui/material/Stack";
type iconTextStackProps = {
  children: ReactNode;
} & Partial<position>;
interface position {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
const isposition = (position: number | undefined) => {
  return position ? position : "";
};
const IconTextStack = ({
  children,
  right,
  left,
  bottom,
  top,
}: iconTextStackProps) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: isposition(bottom),
        left: isposition(left),
        right: isposition(right),
        top: isposition(top),
        borderRadius: "8px",
        backgroundColor: "rgba(255,255,255,.9)",
        p: "5px 10px",
        boxShadow: 3,
      }}
      spacing={1}
      direction={"row"}
      justifyContent={"center"}
      alignItems="center"
    >
      {children}
    </Stack>
  );
};

export default IconTextStack;
