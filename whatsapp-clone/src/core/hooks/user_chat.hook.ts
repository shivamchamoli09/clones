import { useEffect, useState } from "react";
import { userChatById } from "seeds";
import { IdType, UserMessageContentType } from "types";

interface IChatUserId {
  userId: IdType | undefined;
  chatUserId: IdType | undefined;
}

const GetUserChat = ({
  userId,
  chatUserId,
}: IChatUserId): UserMessageContentType[] => {
  const [chat, setChat] = useState<UserMessageContentType[]>([]);
  useEffect(() => {
    if (!userId || !chatUserId) setChat([]);
    else {
      const userChat = userChatById.filter(
        (chat) => chat.userId === userId && chat.chatUserId === chatUserId
      );
      setChat(userChat[0]?.messages || []);
    }
  }, [userId, chatUserId]);
  return chat;
};

export default GetUserChat;
