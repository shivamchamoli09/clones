import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";
import { PostType } from "@core/types";

interface IPostGridView {
  posts: Array<PostType>;
  onClick: (post: PostType) => void;
}

const PostGridView: React.FC<IPostGridView> = (props) => {
  const { posts } = props;
  return (
    <Grid container spacing={4}>
      {posts.map((post: PostType, i: number) => (
        <Grid item key={i} xs={6} md={4}>
          <Box
            onClick={() => {
              props.onClick(post);
            }}
            sx={{ cursor: "pointer" }}
          >
            <Image
              alt=""
              src={post.assets[0].url}
              width={500}
              height={500}
              objectFit="cover"
            />{" "}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostGridView;
