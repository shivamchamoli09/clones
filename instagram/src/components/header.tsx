import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  InstagramHeader,
  HomeIcon,
  ChatIcon,
  NewPostIcon,
  CompassIcon,
  ActivityFeedIcon,
} from "@svgs";
import { CreatePost } from "./user_posts";
import { menuDropdownItems, userSeed } from "@core/seeds";
import NotificationMenu from "./notification_menu";
import { useRouter } from "next/router";

const HEADER_CONTENT: Array<any> = [
  {
    icon: <HomeIcon />,
    name: "home",
    link: "/",
  },
  {
    icon: <ChatIcon />,
    name: "Chat",
    link: "/inbox",
  },
  {
    icon: <NewPostIcon />,
    name: "newPost",
    type: "MODAL",
  },
  {
    icon: <CompassIcon />,
    name: "compass",
    link: "/explore",
  },
  {
    icon: <ActivityFeedIcon />,
    name: "activity",
    link: "#",
    type: "MENU",
  },
];

interface IHeader {}
const Header: React.FC<IHeader> = (props) => {
  const [newPost, setNewPost] = React.useState<Boolean>(false);
  const router = useRouter();
  const handleAction = (content: any) => {
    switch (content.name) {
      case "newPost":
        setNewPost(true);
        break;
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeToProfile = () => {
    setAnchorEl(null);
    router.push("/profile");
  };

  return (
    <Box>
      <Grid container display={"flex"} p={1.5} alignItems="center">
        <Grid item xs={3} textAlign="end" alignSelf="end">
          <Link href="/">
            <InstagramHeader />
          </Link>
        </Grid>

        <Grid item xs={4} textAlign="end">
          <TextField
            placeholder="Search"
            sx={{
              background: "rgb(239, 239, 239)",
              borderRadius: "8px",
              "&.MuiTextField-root": {
                height: "36px",
              },
              ".MuiInputBase-root": {
                height: "36px",
                borderRadius: "8px",
                padding: "0 16px",
              },
            }}
          >
            Search
          </TextField>
        </Grid>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={3.5} textAlign="left">
          {HEADER_CONTENT.map(
            (content: typeof HEADER_CONTENT[0], i: number) => (
              <>
                <Link
                  href={content.link}
                  onClick={(event: any) => {
                    content.type === "MENU" ? handleClick(event) : {};
                  }}
                  key={i}
                >
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() => {
                      if (content.type === "MODAL") handleAction(content);
                    }}
                  >
                    {content.icon}
                  </IconButton>
                </Link>
                {content.type === "MENU" && (
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{ maxHeight: "500px" }}
                  >
                    <MenuItem>
                      <Box
                        display="flex"
                        alignItems={"center"}
                        onClick={routeToProfile}
                      >
                        <Avatar />
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ ml: 1 }}
                        >
                          {userSeed.name}
                        </Typography>
                      </Box>
                    </MenuItem>
                    <Box
                      sx={{ borderBottom: "1px solid rgb(219, 219, 219)" }}
                    ></Box>
                    <NotificationMenu
                      menus={menuDropdownItems}
                      handleClose={handleClose}
                    />
                  </Menu>
                )}
              </>
            )
          )}
        </Grid>
      </Grid>
      {newPost && (
        <CreatePost
          onClose={() => {
            setNewPost(false);
          }}
        />
      )}
      <Divider />
    </Box>
  );
};

export default Header;
