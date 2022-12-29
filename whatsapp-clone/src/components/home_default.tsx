import { Box, Typography } from "@mui/material";
import React from "react";
import { HomeDefaultContainerStyles } from "@styles";
import { DefaultHomeBackgroundSvg } from "@static";

interface IHomeDefault {}

const HomeDefault: React.FC<IHomeDefault> = (props) => {
  return (
    <Box sx={HomeDefaultContainerStyles}>
      <DefaultHomeBackgroundSvg />
      <Box id="text-container" mt={5}>
        <Typography variant="h1">WhatsApp Web</Typography>
        <Typography variant="body1" color={"secondary"} mt={2}>
          Send and receive messages without keeping your phone online.
        </Typography>
        <Typography variant="body1" color={"secondary"}>
          Use Whatsapp on up to 4 linked devices and 1 phone at the same time.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeDefault;
