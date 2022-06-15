import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const OutlineGoBack = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} spacing={1} alignItems="center">
      <ArrowForwardIcon
        fontSize="large"
        onClick={() => navigate(-1)}
        color="primary"
        sx={{ display: { md: "none" }, "&:hover": { cursor: "pointer" } }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default OutlineGoBack;
