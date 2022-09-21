import store from "@core/store";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import InboxIcon from "@svgs/inbox";
import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DefaultChatView } from "@components";
import { inboxList } from "@core/seeds";
import ChatComponent from "@components/inbox/chat";

const UserList: React.FC<any> = ({ onUserSelect }: any) => {
  const [users, setUsers] = useState(inboxList);
  const [selectedUserId, setSeletedUserId] = useState(null);
  return (
    <List>
      {users?.map((user: any, i: number) => (
        <ListItem
          key={i}
          sx={{
            padding: "8px 20px",
            cursor: "pointer",
            background:
              selectedUserId === user?.id ? "rgb(239, 239, 239)" : "inherit",
            "&:hover": {
              background: "rgb(239, 239, 239)",
            },
          }}
          onClick={() => {
            let t = [...users];
            const i = t.findIndex((e) => e.id === user.id);
            if (i >= 0) {
              t[i].readState = 1;
            }
            setUsers(t);
            setSeletedUserId(user.id);
            onUserSelect(user);
          }}
        >
          <Box id="user-profile-container" display={"flex"} alignItems="center">
            <Avatar sx={{ width: "56px", height: "56px" }} />
            <Box ml={1}>
              <Typography
                variant="body1"
                lineHeight={1.2}
                fontWeight={user.readState === 0 ? "bold" : "medium"}
              >
                {user.name}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={user.readState === 0 ? "bold" : "medium"}
                lineHeight={1.5}
              >
                Sent you a message
              </Typography>
            </Box>
          </Box>
          {user?.readState === 0 && (
            <Box id="badge-container" ml="auto">
              <Box
                sx={{
                  height: "8px",
                  width: "8px",
                  background: "rgb(0, 149, 246)",
                  borderRadius: "4px",
                }}
              ></Box>
            </Box>
          )}
        </ListItem>
      ))}
    </List>
  );
};

const Inbox: NextPage = () => {
  const { userStore } = useSelector(() => store.getState());
  const [selectedUser, setSelectedUser] = useState({} as any);

  return (
    <Card
      sx={{ maxWidth: "830px", m: "auto", border: "1px solid #cccc", mt: 2 }}
      elevation={0}
    >
      <CardContent sx={{ p: 0, pb: "0!important" }}>
        <Grid container minHeight={"85vh"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4.5}
            sx={{ borderRight: "1px solid #cccc" }}
          >
            <Box
              height="50px"
              sx={{
                borderBottom: "1px solid #cccc",
              }}
              textAlign="center"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Typography variant="h5" fontWeight={"bold"}>
                {userStore?.username}
              </Typography>
            </Box>
            <Box id="chat-list">
              <Box
                id="title-container"
                display="flex"
                sx={{ padding: "10px 20px", pb: 0 }}
              >
                <Typography variant="h5" fontWeight={"bold"}>
                  Messages
                </Typography>
              </Box>
              <Box id="list-container">
                <UserList
                  onUserSelect={(data: any) => {
                    setSelectedUser(data);
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={0}
            md={7.5}
            width="100%"
            display="table"
            sx={{ position: "relative" }}
          >
            {selectedUser?.username ? (
              <ChatComponent user={selectedUser} />
            ) : (
              <DefaultChatView />
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Inbox;
