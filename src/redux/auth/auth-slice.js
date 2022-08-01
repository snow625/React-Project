// import { createSlice } from "@reduxjs/toolkit";
// import {
//   createNewUser,
//   loginOldUser,
//   userLogout,
//   getCurrentUser,
// } from "./auth-operation";

// export const initialState = {
//   user: {},
//   token: "",
//   isLogin: false,
//   loading: false,
//   error: null,
// };

// const panding = (store) => ({
//   ...store,
//   loading: true,
//   error: null,
// });

// const rejected = (store, { payload }) => ({
//   ...store,
//   loading: false,
//   error: payload.message,
// });

// const authSlice = createSlice({
//   name: "contacts",
//   initialState,
//   extraReducers: {
//     [createNewUser.pending]: panding,
//     [createNewUser.rejected]: rejected,
//     [createNewUser.fulfilled]: (store, { payload }) => ({
//       ...store,
//       loading: false,
//       token: payload.token,
//       isLogin: true,
//       user: payload.user,
//     }),

//     [loginOldUser.pending]: panding,
//     [loginOldUser.rejected]: rejected,
//     [loginOldUser.fulfilled]: (store, { payload }) => ({
//       ...store,
//       loading: false,
//       token: payload.token,
//       isLogin: true,
//       user: payload.user,
//     }),

//     [userLogout.pending]: panding,
//     [userLogout.rejected]: rejected,
//     [userLogout.fulfilled]: () => initialState,

//     [getCurrentUser.pending]: panding,
//     [getCurrentUser.rejected]: () => initialState,
//     [getCurrentUser.fulfilled]: (store, { payload }) => {
//       if (payload.token) {
//         return {
//           ...store,
//           loading: false,
//           isLogin: true,
//           user: payload.user,
//           token: payload.token
//         };
//       }
//       return {
//         ...store,
//         loading: false,
//         isLogin: true,
//         user: payload,
//       };
//     },
//   },
// });

// export default authSlice.reducer;
