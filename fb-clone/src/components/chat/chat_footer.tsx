import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { AttachmentIcon, SmileyIcon } from "@static";
import { ChatFooterContainerStyles, ChatInputStyles } from "@styles/chat";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

interface IChatFooter {}

const IconTemplate = ({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick?: () => void;
}) => {
  return <IconButton onClick={onClick}>{children}</IconButton>;
};

const ChatFooter: React.FC<IChatFooter> = (props) => {
  return (
    <Box display={"flex"} sx={ChatFooterContainerStyles}>
      <IconTemplate>
        <SmileyIcon />
      </IconTemplate>

      <IconTemplate>
        <AttachmentIcon />
      </IconTemplate>

      {/* <Box id="input-container"> */}
      <TextField fullWidth sx={ChatInputStyles} />

      <IconTemplate>
        <MicOutlinedIcon />
      </IconTemplate>
    </Box>
  );
};

export default ChatFooter;
