import { userSeed } from "@core/seeds/rootuser.seeds";
import { SET_USER } from "./user.types";

const user = userSeed;

const userReducer = (state = user, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
