import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
// import { pending, rejected } from "../../shared/utils/pendingRejected";
// import { getUser } from "../auth/auth-operation";
const summarySlice = createSlice({
  name: "summary",
  initialState,
  extraReducers: {
    // [getUser.fulfilled]: (store, { payload }) => ({
    //   ...store,
    //   loading: false,
    //   isLogin: true,
    //   summary: { notAllowedProducts: payload.userData.notAllowedProducts, summary: payload.userData },
    //   notAllowedProducts: [],
    // }),
  },
});

export default summarySlice.reducer;
