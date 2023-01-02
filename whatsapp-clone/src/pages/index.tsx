import HomeDefault from "@components/home_default";
import Header from "@components/layout/header";
import UserList from "@components/user_list";
import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import { UserContent, UserType } from "@types";
import { useRef, useState } from "react";
import Chat from "@components/chat/chat";
import { ChatWrapperContainerStyles } from "@styles/chat";
import { ProfileContainerStyles } from "@styles/components.styles";
import Profile from "@components/profile";

const Home: NextPage = () => {
  const [currentUser, setCurrentUser] = useState<Partial<UserContent>>({});
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const containerRef = useRef(null);

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

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
          <Grid
            item
            xs={12}
            md={4}
            position="relative"
            ref={containerRef}
            sx={{ overflow: "hidden" }}
          >
            {showProfile ? (
              <Profile
                goBack={() => {
                  setShowProfile(false);
                }}
                ref={containerRef}
              />
            ) : (
              <Header onProfileClick={handleProfileClick} />
            )}
            <UserList onUserClick={setCurrentUser} />
          </Grid>
          <Grid item xs={0} md={8} position="relative">
            {currentUser?.id ? (
              <Chat chatUser={currentUser} />
            ) : (
              <HomeDefault />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
