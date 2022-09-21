import { Message } from "@components/inputs";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import AudioCallIcon from "@svgs/audio_call";
import ThreadDetailIcon from "@svgs/thread_detail";
import VideoCallIcon from "@svgs/video_call";
import React from "react";
import { MessageInputBoxContainer } from "styles";

interface IChatComponent {
  user: any;
}

const ChatComponent: React.FC<IChatComponent> = (props) => {
  const { user } = props;
  return (
    <>
      <Box
        height="50px"
        sx={{
          borderBottom: "1px solid #cccc",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Box id="user-detail" display="flex" alignItems={"center"}>
          <Avatar sx={{ width: "24px", height: "24px", ml: 2 }} />
          <Typography variant="h5" fontWeight={"bold"} sx={{ ml: 1 }}>
            {user.name}
          </Typography>
        </Box>

        <Box id="action-container" display="flex" ml="auto">
          <IconButton>
            <AudioCallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <ThreadDetailIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        id="chat-container"
        sx={MessageInputBoxContainer}
      >
        <Message />
      </Box>
    </>
  );
};

export default ChatComponent;
