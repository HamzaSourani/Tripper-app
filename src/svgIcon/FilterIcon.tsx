import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const FilterIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        id="Path_1081"
        data-name="Path 1081"
        d="M24,0H0V24H24Z"
        opacity="0"
      />
      <path
        id="Path_1130"
        data-name="Path 1130"
        d="M5,4A1,1,0,0,0,3,4v7.268a2,2,0,0,0,0,3.464V16a1,1,0,0,0,2,0V14.732a2,2,0,0,0,0-3.464Zm6,0A1,1,0,0,0,9,4V5.268A2,2,0,0,0,9,8.732V16a1,1,0,0,0,2,0V8.732a2,2,0,0,0,0-3.464Zm5-1a1,1,0,0,1,1,1v7.268a2,2,0,0,1,0,3.464V16a1,1,0,0,1-2,0V14.732a2,2,0,0,1,0-3.464V4A1,1,0,0,1,16,3Z"
        transform="translate(2 2)"
      />
    </SvgIcon>
  );
};

export default FilterIcon;
