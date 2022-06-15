import React, { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroupcomponent from "@mui/material/AvatarGroup";
type avatarGroupProps = {
  subscribers: number[];
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
const AvatarGroup = ({
  right,
  left,
  bottom,
  top,
  subscribers,
  children,
}: avatarGroupProps) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: isposition(bottom),
        left: isposition(left),
        right: isposition(right),
        top: isposition(top),
      }}
      direction={"row"}
      justifyContent="center"
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
          },
          "& .MuiAvatar-root": {
            width: 35,
            height: 35,
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
