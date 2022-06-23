import React, { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroupcomponent from "@mui/material/AvatarGroup";
type avatarGroupProps = {
  subscribers: number[];
  children: ReactNode;
} & Partial<position>;
interface position {
  left: {} | number;
  right: {} | number;
  top: {} | number;
  bottom: {} | number;
  sx: object;
}
const isposition = (position: {} | number | undefined) => {
  return position ? position : "";
};
const AvatarGroup = ({
  right,
  left,
  bottom,
  top,
  subscribers,
  children,
  sx,
}: avatarGroupProps) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: isposition(bottom),
        left: isposition(left),
        right: isposition(right),
        top: isposition(top),
        ...sx,
      }}
      direction={"row"}
      justifyContent="flex-end"
      alignItems={"center"}
      spacing={3}
    >
      {" "}
      {children}
      <AvatarGroupcomponent
        max={4}
        total={5}
        sx={{
          direction: "rtl",
          "& .MuiAvatar-root:first-child": {
            width: 0,
            height: 0,
          },
          "& .MuiAvatar-root:last-child": {
            ml: "-12px",
            width: 30,
            height: 30,
          },
          "& .MuiAvatar-root": {
            width: 30,
            height: 30,
            ml: "-12px",
          },
        }}
      >
        {subscribers.map((subscriber) => {
          return <Avatar alt="" src="" />;
        })}
      </AvatarGroupcomponent>
    </Stack>
  );
};

export default AvatarGroup;
