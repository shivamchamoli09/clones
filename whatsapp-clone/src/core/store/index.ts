import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user_reducer";

const store = configureStore({
  reducer: combineReducers({
    userStore: userReducer,
  }),
});

export default store;
