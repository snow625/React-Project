import { createSlice } from "@reduxjs/toolkit";
import {
  createNewUser,
  loginOldUser,
  getUser,
  userLogout,
} from "./auth-operation";

export const initialState = {
  user: {},
  accessToken: "",
  isLogin: false,
  loading: false,
  error: null,
  id: "",
  todaySummary: {},
};

const pending = (store) => ({
  ...store,
  loading: true,
  error: null,
});

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload.message,
});

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
      accessToken: payload.accessToken,
      isLogin: true,
      user: payload.user,
      todaySummary: payload.todaySummary,
      id: payload.id,
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
      user: payload,
    }),
  },
});

export default authSlice.reducer;
