import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  userStore: userReducer,
});

export default rootReducer;
