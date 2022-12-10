import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface IBanner {}

const Banner: React.FC<IBanner> = (props) => {
  return (
    <Box id="image-container" sx={{ position: "relative" }}>
      <img src="/home.webp" width={"100%"} height={"100%"} />
      <Box
        id="secondary-image-container"
        sx={{
          position: "absolute",
          bottom: "35%",
          left: "60px",
          width: "35%",
        }}
      >
        <img src="/home2.webp" />
        <Box id="info-container">
          <Typography variant="h5" sx={{ color: "#FFF" }}>
            Season 2 coming on 14 October
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            After a disastrous set-up by their families, two teens strike up a
            tentative friendship at their summer program — but deeper feelings
            aren’t far behind.
          </Typography>
        </Box>
        <Box id="action-container" display="flex">
          <Button
            variant="contained"
            sx={{ background: "#FFF", color: "#000", fontWeight: 600 }}
          >
            Play
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              background: "rgba(109, 109, 110, 0.7)",
              color: "#FFF",
              fontWeight: 600,
            }}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
