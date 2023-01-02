import React from "react";
import {
  Avatar,
  Box,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { UserListContainerStyles } from "@styles/chat";
import FilterListIcon from "@mui/icons-material/FilterList";
import Search from "./search";
import { userChatContent } from "@seeds";
import {
  IdType,
  MessageStatusType,
  UserContent,
  UserMessageContentType,
  UserType,
} from "@types";
import { PinIcon, ReadIcon, SingleTickIcon, UserIcon } from "@static";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { UserListSearchStyles } from "@styles/components.styles";
import { useState } from "react";

interface IUser extends UserContent {
  // id: IdType;
  // name: string;
  // content?: Array<UserMessageContentType>;
  // // createdAt: string | Date;
  onUserClick: (user: UserContent) => void;
}

interface IUserListProps {
  onUserClick: (user: UserContent) => void;
}

export default function UserList({ onUserClick }: IUserListProps) {
  const [userMessages, setUserMessages] =
    useState<UserContent[]>(userChatContent);

  const handleUserClick = (user: UserContent) => {
    onUserClick(user);
    const selectedUser = userMessages?.find(
      (e: UserContent) => e.id === user.id
    );
    const updatedOrderOfUsers = [
      selectedUser,
      ...userMessages.filter((e: UserContent) => e.id !== user.id),
    ] as UserContent[];
    setUserMessages(updatedOrderOfUsers);
  };

  return (
    <Box sx={UserListContainerStyles}>
      <Box id="search-container" display={"flex"} alignItems="center" p={1}>
        <Search label="Search or start chat" />
        <FilterListIcon sx={{ ml: "auto", color: "#8696a0" }} />
      </Box>
      <Divider sx={{ background: "#f5f6f6" }} />

      <Box sx={{ overflowY: "auto", height: "75vh" }}>
        {userMessages?.map((content: UserContent, i: number) => (
          <User
            id={content.id}
            key={i}
            name={content.name}
            content={content.content}
            createdAt={content.createdAt}
            onUserClick={handleUserClick}
          />
        ))}
      </Box>
    </Box>
  );
}

const User: React.FC<IUser> = (props) => {
  const renderStatusIcon = (status: MessageStatusType): JSX.Element => {
    switch (status) {
      case "SENT":
        return <SingleTickIcon />;
      case "READ":
        return <ReadIcon />;
      default:
        return <SingleTickIcon />;
    }
  };

  const handleOnUserClick = () => {
    props.onUserClick({ ...props });
  };

  return (
    <Box
      display={"flex"}
      pl={2}
      pt={1}
      sx={{
        ":hover": {
          backgroundColor: "#f5f6f6",
          cursor: "pointer",
        },
      }}
      onClick={handleOnUserClick}
    >
      <UserIcon />
      <Box
        display={"flex"}
        width="100%"
        ml={2}
        sx={{
          borderBottom: "1px solid #e9edef",
          padding: "10px 13px 10px 0",
          mr: 1,
        }}
      >
        <Box
          id="chat-detail-container"
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Typography variant="h4">{props.name}</Typography>
          <Box display="flex">
            {renderStatusIcon(
              props?.content[props.content?.length - 1]?.status
            )}
            <Typography
              variant="body1"
              color={"secondary"}
              sx={{ marginLeft: "3px" }}
            >
              {props.content[props.content?.length - 1]?.message}
            </Typography>
          </Box>
        </Box>
        <Box alignItems={"center"} textAlign="end" ml="auto">
          <Typography
            variant="body2"
            color={"secondary"}
          >{`${props?.createdAt}`}</Typography>
          <Box alignItems="center">
            <PinIcon />
            <KeyboardArrowDownIcon sx={{ color: "#8696a0" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
