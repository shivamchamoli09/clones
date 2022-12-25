import { Box } from "@mui/material";
import { ChatBackgroundStyles } from "@styles/chat";
import React from "react";
import ChatFooter from "./chat_footer";
import ChatHeader from "./chat_header";
interface IChat {}

const Chat: React.FC<IChat> = (props) => {
  return (
    <Box>
      <ChatHeader />

      <Box sx={ChatBackgroundStyles}></Box>

      <ChatFooter />
    </Box>
  );
};

export default Chat;
