import { IUserMessages, UserContent, UserMessageContentType } from "@types";

export const currentUser = {
  id: 1,
  name: "Shivam Chamoli",
  phoneNumber: "+91 1234567890",
};

export const userChatContent: UserContent[] = [
  {
    ...currentUser,
    content: [
      {
        id: "a1",
        senderId: 1,
        receiverId: 2,
        message: "Hi there",
        created_at: "2022/10/12 20:10",
        status: "READ",
        type: "TEXT",
      },
    ],
  },
  {
    id: 2,
    name: "Ritika Thapliyal",
    createdAt: "Saturday",
    content: [
      {
        id: "b1",
        senderId: 1,
        receiverId: 2,
        message: "Hi there",
        created_at: "2022/10/12 20:10",
        status: "READ",
        type: "TEXT",
      },
    ],
  },
];

export const userChatById: Array<IUserMessages> = [
  {
    id: 1,
    userId: 1,
    chatUserId: 2,
    messages: [
      {
        id: "r1",
        senderId: 1,
        receiverId: 2,
        message: "Hi there!",
        created_at: new Date(),
        status: "READ",
        type: "TEXT",
      },
      {
        id: "r11",
        senderId: 1,
        receiverId: 2,
        message: "How are you?",
        created_at: new Date(),
        status: "READ",
        type: "TEXT",
      },
      {
        id: "r2",
        senderId: 2,
        receiverId: 1,
        message: "Hello",
        created_at: new Date(),
        status: "READ",
        type: "TEXT",
      },
      {
        id: "r21",
        senderId: 2,
        receiverId: 2,
        message: "I am good",
        created_at: new Date(),
        status: "READ",
        type: "TEXT",
      },
      {
        id: "r22",
        senderId: 2,
        receiverId: 2,
        message: "What about you?",
        created_at: new Date(),
        status: "READ",
        type: "TEXT",
      },
    ],
  },
];
