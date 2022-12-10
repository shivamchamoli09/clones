import React from "react";
import { Divider, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DividerComponent: React.FC<any> = () => {
  return (
    <Divider
      sx={{
        "background-image":
          "linear-gradient(0deg,#181818 0,hsla(0,0%,9%,.7) 20%,hsla(0,0%,9%,.4) 30%,transparent 50%)",
        borderBottom: "2px solid #404040",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          maxHeight: "42px",
          maxWidth: "42px",
          minHeight: "32px",
          minWidth: "32px",
          backgroundColor: "rgba(42,42,42,.6)",
          borderColor: "hsla(0,0%,100%,.5)",
          borderWidth: "2px",
          border: "1px solid rgba(255, 255, 255, 0.7)",
          position: "absolute",
          top: "-20px",
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: "#FFF" }} />
      </IconButton>
    </Divider>
  );
};

export default DividerComponent;
