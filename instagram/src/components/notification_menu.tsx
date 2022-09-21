import { Menu, MenuItem, Box, Avatar, Typography, Button } from "@mui/material";
import { followButtonStyles, followingButtonStyles } from "@styles";
import React, { useEffect, useState } from "react";

interface INotificationMenu {
  menus: any;
  handleClose: () => void;
}

const NotificationMenu: React.FC<INotificationMenu> = (props) => {
  const { menus = [], handleClose } = props;
  return (
    <>
      {menus.map((item: any, i: number) => (
        <MenuItem onClick={handleClose} key={i}>
          <Box display="flex" alignItems={"center"} sx={{ maxWidth: "350px" }}>
            <Avatar src="" />
            <Typography
              variant="body1"
              sx={{ ml: 1, "white-space": "initial" }}
            >
              <b>{item.user?.name}</b> {item?.content} {item?.time}
            </Typography>

            {item.type === "FOLLOW" && (
              <Button
                variant={item.follow ? "outlined" : "contained"}
                sx={item.follow ? followingButtonStyles : followButtonStyles}
              >
                {item.follow ? "Following" : "Follow"}
              </Button>
            )}
          </Box>
        </MenuItem>
      ))}
    </>
  );
};

export default NotificationMenu;
