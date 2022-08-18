import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}
const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Grid container spacing={2} sx={{ p: 3 }}>
          {children}
        </Grid>
      )}
    </div>
  );
};

export default TabPanel;
