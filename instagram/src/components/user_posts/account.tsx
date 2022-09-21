import store from "@core/store";
import { Avatar, Box, Link, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

interface IAccount {}

const UserAccount: React.FC<IAccount> = (props) => {
  const { userStore } = useSelector(() => store.getState());
  return (
    <Box
      id="suggestion-container"
      display={"flex"}
      mt={2.5}
      alignItems="center"
    >
      <Box id="user-profile-container" display={"flex"} alignItems="center">
        <Avatar sx={{ width: "56px", height: "56px" }} src={"/avatar1.jpg"} />
        <Box ml={1}>
          <Typography variant="h6" lineHeight={1.3} fontWeight={"bold"}>
            {userStore?.username}
          </Typography>
          <Typography variant="body2" fontSize={14}>
            {userStore.name}
          </Typography>
        </Box>
      </Box>
      <Box id="action-container" ml="auto">
        <Link color="primary" sx={{ cursor: "pointer" }}>
          <Typography variant="body2">Switch</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default UserAccount;
