import { createSlice } from "@reduxjs/toolkit";
import {
  createNewUser,
  loginOldUser,
  getUser,
  userLogout,
} from "./auth-operations";
import { pending, rejected } from "../../shared/utils/pendingRejected";
import initialState from "./auth-initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [createNewUser.pending]: pending,
    [createNewUser.rejected]: rejected,
    [createNewUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      user: {
        userName: payload.username,
      },
    }),

    [loginOldUser.pending]: pending,
    [loginOldUser.rejected]: rejected,
    [loginOldUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.accessToken,
      isLogin: true,
      user: {
        userId: payload.user.id,
        userName: payload.user.username,
      },
    }),

    [userLogout.pending]: pending,
    [userLogout.rejected]: rejected,
    [userLogout.fulfilled]: () => initialState,

    [getUser.pending]: pending,
    [getUser.rejected]: () => initialState,
    [getUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      user: { userId: payload.id, userName: payload.username },
    }),
  },
});

export default authSlice.reducer;
