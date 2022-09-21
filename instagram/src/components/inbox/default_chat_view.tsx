import { Box, Typography, Button } from "@mui/material";
import InboxIcon from "@svgs/inbox";
import React from "react";

interface IDefaultChatView {}

const DefaultChatView: React.FC<IDefaultChatView> = () => {
  return (
    <Box
      textAlign={"center"}
      display="table-cell"
      sx={{ verticalAlign: "middle" }}
    >
      <InboxIcon />
      <Typography variant="h2" gutterBottom>
        Your messages
      </Typography>
      <Typography variant="body2" gutterBottom>
        Send private photos and messages to a friend or group
      </Typography>
      <Button variant="contained" sx={{ mt: 1 }}>
        Send message
      </Button>
    </Box>
  );
};

export default DefaultChatView;
