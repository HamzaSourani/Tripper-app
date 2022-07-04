import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
type linkProps = {
  to: string;
  text: string;
};
const LinkComponent = ({ to, text }: linkProps) => {
  return (
    <Box
      sx={{
        mx: { xs: ".5rem", sm: "1rem" },
        my: "1rem",
        color: "var(--primary-color)",
        display: { xs: "inline", sm: "block", lg: "inline" },
      }}
    >
      <Link to={to} style={{ color: "inherit" }}>
        {text}
      </Link>
    </Box>
  );
};

export default LinkComponent;
