import PostGridView from "@components/user_posts/posts_grid_view";
import { posts } from "@core/seeds";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import SettingsIcon from "@svgs/settings";
import { NextPage } from "next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { PostType } from "@core/types";
import PostDetail from "@components/user_posts/post_detail";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Profile: NextPage = () => {
  const [value, setValue] = useState(0);
  const [activePost, setActivePost] = useState({} as PostType);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePostClick = (post: PostType) => {
    console.log(post);
    setActivePost(post);
  };
  return (
    <Box maxWidth={"900px"} margin="auto" textAlign={"center"}>
      <Box id="profile-detail" display="flex" mt={3}>
        <Box sx={{ width: "170px", height: "170px" }}>
          <Avatar src="/avatar1.jpg" sx={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          id="user-detail"
          marginLeft={"auto"}
          marginRight="auto"
          display="flex"
          flexDirection={"column"}
        >
          <Box
            id="username-container"
            display="flex"
            alignItems="center"
            mt={2}
          >
            <Typography variant="h2" fontWeight={"medium"}>
              shivam_chamoli9
            </Typography>
            <Button variant="outlined" sx={{ ml: 3, height: "30px" }}>
              Edit Profile
            </Button>

            <IconButton sx={{ ml: 1 }}>
              <SettingsIcon />
            </IconButton>
          </Box>

          <Box
            id="activity-details"
            display="flex"
            alignItems="center"
            mt={"auto"}
            mb="auto"
          >
            <Typography variant="body1">35 posts</Typography>
            <Typography variant="body1" sx={{ ml: "auto", mr: "auto" }}>
              119 followers
            </Typography>
            <Typography variant="h5">163 following</Typography>
          </Box>

          <Box id="user-details" display="flex" alignItems="center" mb={2}>
            <Typography variant="h5" fontWeight={"bold"}>
              Shivam Chamoli
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="posts" mt={10}>
        <Box sx={{ width: "100%" }} mb={2}>
          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs"
              sx={{
                display: "flex",
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                },
              }}
            >
              <Tab label="POSTS" {...a11yProps(0)} />
              <Tab label="SAVED" {...a11yProps(1)} />
              <Tab label="TAGGED" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>{" "}
        <PostGridView posts={posts} onClick={handlePostClick} />
        {activePost.id && <PostDetail post={posts[0]} />}
      </Box>
    </Box>
  );
};

export default Profile;
