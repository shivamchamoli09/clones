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
  created_at: string | Date;
  status: MessageStatusType;
};

export type MessageStatusType = "SENT" | "DELIVERED" | "READ";
export type IdType = string | number;
