import { Box } from "@mui/material";
import {
  ChatBackgroundStyles,
  MessageContainerStyle,
  MessageReceiverContainerStyles,
  MessageRow,
  MessageSenderContainerStyles,
  MessageTextStyles,
  ReceiverTextSubIconContainer,
  SenderTextSubIconContainer,
} from "@styles/chat";
import React, { useMemo } from "react";
import { UserContent, UserMessageContentType } from "@types";
import ChatFooter from "./chat_footer";
import ChatHeader from "./chat_header";
import store from "@core/store";
import GetUserChat from "@core/hooks/user_chat.hook";
import Typography from "@mui/material/Typography";
import { MessageReceivedTopLeftIcon, MessageSentTopRightIcon } from "@static";

interface IChat {
  chatUser: Partial<UserContent>;
}

const Chat: React.FC<IChat> = (props) => {
  const { chatUser } = props;
  const { user } = store.getState().userStore;
  const messages = GetUserChat({
    chatUserId: chatUser?.id,
    userId: user?.id,
  });

  const renderSubIcon = ({
    message,
    isMessageOwnerPreviousUser,
  }: {
    message: UserMessageContentType;
    isMessageOwnerPreviousUser: boolean;
  }) => {
    if (isMessageOwnerPreviousUser) return <></>;
    if (message?.senderId === user?.id) {
      return (
        <Box sx={SenderTextSubIconContainer}>
          <MessageSentTopRightIcon />
        </Box>
      );
    }
    return (
      <Box sx={ReceiverTextSubIconContainer}>
        <MessageReceivedTopLeftIcon />
      </Box>
    );
  };

  const renderMessage = ({ message }: { message: UserMessageContentType }) => {
    if (message.type === "TEXT")
      return (
        <Typography variant="body1" sx={MessageTextStyles}>
          {message?.message}
        </Typography>
      );
  };

  const getMessageStylesByOrder = ({
    message,
  }: {
    message: UserMessageContentType;
  }) => {
    let styles = {
      marginTop: "2px",
    } as any;
    if (user?.id === message?.senderId) {
      styles["borderTopRightRadius"] = "7.5px";
    }
    if (user?.id !== message?.senderId) {
      styles["borderTopLeftRadius"] = "7.5px";
    }
    return styles;
  };

  return (
    <Box>
      <ChatHeader />
      <Box sx={ChatBackgroundStyles}>
        {messages?.map((message: UserMessageContentType, i: number) => {
          const isMessageOwnerPreviousUser =
            i > 0 &&
            (message?.senderId === messages[i - 1]?.senderId ||
              message?.receiverId === messages[i - 1]?.receiverId);
          const MessageOwnerSpecificStyles = isMessageOwnerPreviousUser
            ? getMessageStylesByOrder({ message })
            : {};
          return (
            <Box key={i} sx={MessageRow}>
              <Box
                sx={
                  user?.id === message?.senderId
                    ? {
                        ...MessageSenderContainerStyles,
                        ...MessageOwnerSpecificStyles,
                      }
                    : {
                        ...MessageReceiverContainerStyles,
                        ...MessageOwnerSpecificStyles,
                      }
                }
              >
                {renderSubIcon({
                  message,
                  isMessageOwnerPreviousUser,
                })}

                {renderMessage({ message })}
              </Box>
            </Box>
          );
        })}
      </Box>

      <ChatFooter />
    </Box>
  );
};

export default Chat;
