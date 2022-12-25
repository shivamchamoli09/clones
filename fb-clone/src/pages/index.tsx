import HomeDefault from "@components/home_default";
import Header from "@components/layout/header";
import UserList from "@components/user_list";
import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import { UserContent, UserType } from "@types";
import { useState } from "react";
import Chat from "@components/chat/chat";
import { ChatWrapperContainerStyles } from "@styles/chat";

const Home: NextPage = () => {
  const [currentUser, setCurrentUser] = useState<Partial<UserContent>>({});

  return (
    <Box sx={{ background: "#cccc" }}>
      <Box
        sx={{
          backgroundColor: "#00a884",
          position: "fixed",
          top: "0",
          width: "100%",
          height: "127px",
          content: "''",
        }}
      ></Box>
      <Box sx={ChatWrapperContainerStyles}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} md={4}>
            <Header />
            <UserList onUserClick={setCurrentUser} />
          </Grid>
          <Grid item xs={0} md={8} position="relative">
            {currentUser?.id ? <Chat /> : <HomeDefault />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
