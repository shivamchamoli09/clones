import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import GalleryIcon from "@svgs/gallery";
import { ActivityFeedIcon } from "@svgs";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { MessageInputContainer } from "styles";

interface IMessage {
  containerStyles?: object;
}

const Message: React.FC<IMessage> = (props) => {
  const { containerStyles = {} } = props;
  return (
    <Paper
      component="form"
      sx={{
        ...MessageInputContainer,
        ...containerStyles,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <InsertEmoticonIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Message..."
        inputProps={{ "aria-label": "Message..." }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="gallery">
        <GalleryIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <ActivityFeedIcon />
      </IconButton>
    </Paper>
  );
};

export default Message;
