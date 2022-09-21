import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { posts } from "@core/seeds";
import { PostImageStyles } from "@styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { PostType } from "@core/types";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const colCount = 3;

const Explore: NextPage = () => {
  const [hoverPostId, setHoverPostId] = useState<number | any>(null);
  const [allPosts, setAllPosts] = useState<PostType[]>(posts);
  const [col1, setCol1] = useState<PostType[]>([]);
  const [col2, setCol2] = useState<PostType[]>([]);
  const [col3, setCol3] = useState<PostType[]>([]);

  useEffect(() => {
    setCol1(allPosts.slice(0, parseInt(`${allPosts?.length / colCount}`)));
  }, [allPosts]);

  useEffect(() => {
    if (col1.length && allPosts.length) {
      let diffCount = allPosts.length - col1.length;
      setCol2(allPosts.slice(col1.length, diffCount / 2 + col1.length));
    }
  }, [col1]);

  useEffect(() => {
    if (col2.length && allPosts.length) {
      setCol3(allPosts.slice(col1.length + col2.length, allPosts.length));
    }
  }, [col2]);

  const PostIconType = ({ post }: { post: PostType }) => {
    switch (post.type) {
      case "VIDEO":
        return <PlayArrowIcon sx={{ color: "#FFF" }} />;
      case "IMAGE":
        return <CollectionsIcon sx={{ color: "#FFF" }} />;
    }
    return <></>;
  };

  const handlePostMouseHover = (id: string | undefined) => {
    setHoverPostId(id);
  };

  const handlePostMouseLeave = (id: string | undefined) => {
    setHoverPostId(null);
  };

  const PostTemplate = ({ colPosts }: { colPosts: PostType[] }) => {
    return (
      <>
        {colPosts.map((post: PostType) => (
          <Box
            position={"relative"}
            sx={{}}
            key={post.id}
            onMouseEnter={() => handlePostMouseHover(post.id)}
            onMouseLeave={() => handlePostMouseLeave(post.id)}
            mt={1}
          >
            <img
              src={post.assets[0].url}
              style={{
                ...PostImageStyles,
                cursor: "pointer",
                filter:
                  post.id === hoverPostId
                    ? "brightness(70%)"
                    : "brightness(100%)",
              }}
            />
            <Box position={"absolute"} top={5} right={5}>
              <PostIconType post={post} />
            </Box>
            {post.id === hoverPostId && (
              <Box position={"absolute"} top="40%" left="18%">
                <IconButton>
                  <FavoriteIcon sx={{ color: "#FFF" }} />
                  <Typography variant="h5" sx={{ color: "#FFF", ml: 1 }}>
                    {post.likesCount}{" "}
                  </Typography>
                </IconButton>
                <IconButton sx={{ ml: 0.4 }}>
                  <InsertCommentIcon sx={{ color: "#FFF" }} />
                  <Typography variant="h5" sx={{ color: "#FFF", ml: 1 }}>
                    {post.commentsCount}{" "}
                  </Typography>
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </>
    );
  };

  return (
    <Grid container maxWidth={830} margin="auto" spacing={3} p={2}>
      <Grid item xs={12} md={4}>
        <PostTemplate colPosts={col1} />
      </Grid>
      <Grid item xs={12} md={4}>
        <PostTemplate colPosts={col2} />
      </Grid>
      <Grid item xs={12} md={4}>
        <PostTemplate colPosts={col3} />
      </Grid>
    </Grid>
  );
};

export default Explore;
