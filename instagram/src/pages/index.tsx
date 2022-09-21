import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { UserPosts, UserStories } from "@components";
import UserAccount from "@components/user_posts/account";
import { posts } from "@core/seeds";
import { PostType } from "@core/types";

const SuggestionsList = (props: any) => {
  const Suggestion = () => {
    return (
      <Box id="suggestion-container" display={"flex"} mt={2}>
        <Box id="user-profile-container" display={"flex"} alignItems="center">
          <Avatar sx={{ maxWidth: "30px", maxHeight: "30px" }} />
          <Box ml={1}>
            <Typography variant="h6" lineHeight={1.3} fontWeight={"bold"}>
              Shivam
            </Typography>
            <Typography variant="body2" fontSize={12} lineHeight={1}>
              Followed by himanshu + 5...
            </Typography>
          </Box>
        </Box>
        <Box id="action-container" ml="auto">
          <Link color="primary" sx={{ cursor: "pointer" }}>
            <Typography variant="body2">Follow</Typography>
          </Link>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <Box display={"flex"} alignItems="center">
        <Typography variant="h5">Suggestions for you</Typography>
        <Typography variant="subtitle1" ml="auto">
          See All
        </Typography>
      </Box>

      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Grid container pt={5} spacing={5}>
      <Grid item md={6.5} xs={12}>
        <Box maxWidth={470} marginLeft="auto">
          <UserStories />

          {posts.map((post: PostType, i: number) => (
            <UserPosts key={i} post={post} />
          ))}
        </Box>
      </Grid>
      <Grid item md={5.5} xs={0}>
        <Box maxWidth={300}>
          <UserAccount />
          <Box mt={5}>
            <SuggestionsList />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
