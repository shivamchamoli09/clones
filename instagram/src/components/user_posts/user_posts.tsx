import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { CommentIcon, LikeIcon, SavePostIcon, ShareIcon } from "@svgs";
import { Carousel, CarouselItem } from "@shivamchamoli1997/carousel";
import PostDetail from "./post_detail";
import PostReaction from "./post_reaction";
import { posts } from "@core/seeds";
import { PostType } from "@core/types";
import { Message } from "@components/inputs";

interface IUserPosts {
  post: PostType;
}

const UserPosts: React.FC<IUserPosts> = (props) => {
  const { post } = props;
  const [viewComments, setViewComments] = useState(false);

  return (
    <Card sx={{ border: "1px solid rgb(219, 219, 219)", mt: 2 }}>
      <CardContent sx={{ p: 0, paddingBottom: "0!important" }}>
        <Box display={"flex"} alignItems="center" sx={{ padding: "10px" }}>
          <Avatar />
          <Typography variant="body1" ml={1}>
            {post.fullName}
          </Typography>
          <IconButton sx={{ ml: "auto" }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>

        <Carousel
          infiniteSlide={false}
          autoSlide={false}
          autoSlideInterval={1000}
          pauseOnHover={true}
          indicatorPosition={"1"}
          allowSwipe={true}
          showIndicators={true}
          tansition={0.5}
        >
          {post.assets.map((asset: any) => (
            <CarouselItem key={asset.id}>
              <img
                src={asset.url}
                width="100%"
                height={"100%"}
                style={{ marginTop: "0px" }}
              />
            </CarouselItem>
          ))}
        </Carousel>

        <PostReaction />

        <Box id="review-section" sx={{ padding: "10px" }}>
          <Box id="like-section">
            <Typography variant="body1" fontWeight={"bold"}>
              {post.likesCount} likes
            </Typography>
          </Box>
          <Box id="caption-section" mt={1.2} display="flex">
            <Typography variant="body1">
              <b>{post.username}</b>&nbsp; {post.caption}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            mt={1.5}
            gutterBottom
            onClick={() => {
              setViewComments(!viewComments);
            }}
            sx={{ cursor: "pointer" }}
          >
            View all comments
          </Typography>
          <Typography variant="caption" mt={1}>
            {post.timeStamp}
          </Typography>
        </Box>
        <Message
          containerStyles={{
            borderRadius: "0",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none",
          }}
        />

        {viewComments && (
          <PostDetail
            post={post}
            onClose={() => {
              setViewComments(false);
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default UserPosts;
