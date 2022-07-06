import React from "react";
import Tab from "@mui/material/Tab";
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={{
        "&.MuiTab-root": {
          fontWeight: 800,
        },
        "&.Mui-selected": {},
      }}
      component="a"
      {...props}
    />
  );
}

export default LinkTab;
