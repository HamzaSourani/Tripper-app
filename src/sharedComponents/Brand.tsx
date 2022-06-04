import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const Brand = () => {
  return (
    <Stack alignItems={"flex-end"} sx={{ flexGrow: { xs: 1, md: 0 } }}>
      <Box position={"relative"}>
        <Typography variant="h4" sx={{ fontWeight: 700 }} color={"primary"}>
          Tripper
        </Typography>
        <Box
          sx={{
            "&:hover": {
              transform: "scale(1.4)",
            },
            transition: "scale .25s ease-in-out",
            position: "absolute",
            top: 0,
            left: -20,
            width: 15,
            height: 15,
            border: "3px solid yellow",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
    </Stack>
  );
};

export default Brand;
