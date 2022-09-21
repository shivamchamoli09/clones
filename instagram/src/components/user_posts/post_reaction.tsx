import { Box, IconButton } from "@mui/material";
import { LikeIcon, CommentIcon, ShareIcon, SavePostIcon } from "@svgs";
import React from "react";

interface IPostReaction {}

const PostReaction: React.FC<IPostReaction> = () => {
  return (
    <Box id="user-reaction-container" display="flex">
      <IconButton>
        <LikeIcon />
        {/* <FavoriteBorderIcon sx={{ fontSize: "30px" }} /> */}
      </IconButton>
      <IconButton sx={{ ml: 0.4 }}>
        <CommentIcon />
        {/* <MapsUgcIcon sx={{ fontSize: "30px" }} /> */}
      </IconButton>
      <IconButton sx={{ ml: 0.4 }}>
        <ShareIcon />
      </IconButton>

      <IconButton sx={{ ml: "auto" }}>
        <SavePostIcon />
      </IconButton>
    </Box>
  );
};

export default PostReaction;
