import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { currentUser } from "@seeds";
import { SET_USER } from "../actions/actions";

const initialState = {
  user: currentUser,
};

type ActionType = {
  type: "";
  payload: object;
};

const userReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder.addCase(SET_USER, (state, action) => {
      state.user = action.payload ? action.payload : initialState.user;
    });
  }
);

export default userReducer;
