import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  React.useEffect(() => {
    document.body.classList.add("stop-scrolling");

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, []);

  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      sx={{
        position: "absolute",
        minWidth: "100vw",
        minHeight: "100vh",
        zIndex: "tooltip",
        backgroundColor: "rgba(0,0,255,.2)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems={"center"}
        sx={{ position: "relative" }}
      >
        <CircularProgress
          size={220}
          sx={{
            position: "absolute",
            bottom: -85,
            right: -50,
            zIndex: 1,
            color: "var(--golden-color)",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#0037ff",
            textShadow: " 1px 1px 6px white",
          }}
        >
          Tripper
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Loading;
