// export type PostType = {
//   imageUrl: string;
//   id: string;
//   meta: {
//     likesCount: number | string;
//     commentsCount: number | string;
//   };
// };

export interface PostType {
  id?: string;
  username: string;
  fullName?: string;
  avatarUrl: string;
  caption?: string;
  assets: { id: string | number; url: string }[];
  comments: {
    username: string;
    comment: string;
    likesCount: number;
    timeStamp: string;
  }[];
  likesCount: number;
  timeStamp: string;
  type?: "IMAGE" | "VIDEO";
  commentsCount?: number;
}
