import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { AttachmentIcon, SmileyIcon } from "@static";
import { ChatFooterContainerStyles, ChatInputStyles } from "@styles/chat";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AttachmentSpeedDial from "@components/attachment_speed_dial";
import EmojiInputBoard from "./emoji_inputboard";

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
  const [openEmojiBoard, setOpenEmojiBoard] = useState<boolean>(false);

  return (
    <Box sx={ChatFooterContainerStyles}>
      {openEmojiBoard && <EmojiInputBoard />}

      <Box display={"flex"} alignItems="center" sx={{ height: "65px" }}>
        <IconTemplate
          onClick={() => {
            setOpenEmojiBoard((prev) => !prev);
          }}
        >
          <SmileyIcon />
        </IconTemplate>

        {/* <IconTemplate> */}
        <AttachmentSpeedDial />
        {/* </IconTemplate> */}

        {/* <Box id="input-container"> */}
        <TextField fullWidth sx={ChatInputStyles} />

        <IconTemplate>
          <MicOutlinedIcon />
        </IconTemplate>
      </Box>
    </Box>
  );
};

export default ChatFooter;
