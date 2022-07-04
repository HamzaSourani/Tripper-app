import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type brandProps = {
  brandColor: string;
  circleColor: string;
};
const Brand = ({ brandColor, circleColor }: brandProps) => {
  return (
    <Box position={"relative"}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: brandColor }}>
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
          border: `3px solid ${circleColor}`,
          borderRadius: "50%",
        }}
      ></Box>
    </Box>
  );
};

export default Brand;
