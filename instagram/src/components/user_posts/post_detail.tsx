import { Message } from "@components/inputs";
import {
  Avatar,
  Backdrop,
  Box,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { Carousel, CarouselItem } from "@shivamchamoli1997/carousel";
import { ModalWrapper } from "hoc";
import Image from "next/image";
import React from "react";
import PostReaction from "./post_reaction";

interface IPostDetail {
  post: any;
  onClose?: () => void;
}

interface IComments {
  username: string;
  comment: string;
  likesCount: number;
  timeStamp: string;
}

const Comments = (props: IComments) => {
  return (
    <Box id="comment-container" mt={3}>
      <Box id="comment" display={"flex"}>
        <Avatar sx={{ width: "24px", height: "24px" }} />
        <Typography variant="body1" sx={{ ml: 1 }}>
          <b>{props.username}</b>
          &nbsp; {props.comment}
        </Typography>
      </Box>
      <Box id="reactions" display={"flex"} pl={4} mt={0.3}>
        <Typography variant="caption">{props.timeStamp}</Typography>
        <Typography variant="caption" sx={{ pl: 1 }}>
          {props.likesCount} likes
        </Typography>
        <Typography variant="caption" sx={{ pl: 1 }}>
          Reply
        </Typography>
      </Box>
    </Box>
  );
};

const PostDetail: React.FC<IPostDetail> = (props) => {
  const { post, onClose } = props;
  return (
    <ModalWrapper onClose={onClose}>
      <Grid container>
        <Grid item xs={6}>
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
            {post.assets.map((asset: any, i: number) => (
              <CarouselItem key={i}>
                <img src={asset.url} width="100%" height="100%" alt="Post" />
              </CarouselItem>
            ))}
          </Carousel>
        </Grid>

        <Grid item xs={6} display="flex" flexDirection={"column"}>
          <Box
            height={"70px"}
            display="flex"
            alignItems="center"
            sx={{
              padding: "0 14px",
            }}
          >
            <Avatar
              sx={{ width: "24px", height: "24px" }}
              src={post.avatarUrl}
            />
            <Typography variant="body1" sx={{ ml: 1 }} fontWeight="bold">
              {post.username}
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "14px",
              overflowY: "scroll",
              height: "100%",
              border: "1px solid rgb(239,239,239)",
            }}
          >
            <Box id="post-content" display={"flex"}>
              <Avatar sx={{ width: "24px", height: "24px" }} />
              <Typography variant="body1" sx={{ ml: 1 }}>
                <b>{post.username}</b>
                &nbsp; {post.caption}
              </Typography>
            </Box>

            {post.comments.length ? (
              post.comments.map((comment: any, i: number) => (
                <Comments key={i} {...comment} />
              ))
            ) : (
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                height={"100%"}
              >
                <Box textAlign={"center"}>
                  <Typography variant="h3" fontWeight={"bold"}>
                    No comments yet.
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Start the conversation.
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          <Box
            id="post-reaction"
            sx={{
              padding: "0 14px",
              mt: "auto",
              pb: 1,
              borderBottom: "1px solid rgb(239,239,239)",
            }}
          >
            <PostReaction />
            <Typography variant="body2" fontWeight={"bold"} pl={1}>
              {post.likesCount} likes
            </Typography>
            <Typography variant="caption" pl={1}>
              {post.timeStamp}
            </Typography>
            <Message />
          </Box>
        </Grid>
      </Grid>
    </ModalWrapper>
  );
};

export default PostDetail;
