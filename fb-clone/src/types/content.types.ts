export type UserContent = {
  id: IdType;
  name: string;
  content: UserMessageContentType[];
  createdAt?: Date | string;
};

export type UserMessageContentType = {
  id: string;
  senderId: string | number;
  receiverId: string | number;
  message: string;
  created_at?: string | Date;
  status: MessageStatusType;
  type: MESSAGE_TYPE;
};

export type MessageStatusType = "SENT" | "DELIVERED" | "READ";
export type IdType = string | number;

export type MESSAGE_TYPE = "IMAGE" | "LINK" | "DOCUMENT" | "TEXT" | "FILE";
export interface IUserMessages {
  id: string | number;
  userId: string | number;
  chatUserId: string | number;
  messages: UserMessageContentType[];
}
