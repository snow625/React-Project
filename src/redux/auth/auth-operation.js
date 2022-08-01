// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   signup,
//   login,
//   logout,
//   getCurrent,
// } from "../../shared/services/API/auth";

// export const createNewUser = createAsyncThunk(
//   "auth/signup",
//   async (data, { rejectWithValue }) => {
//     try {
//       return await signup(data);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const loginOldUser = createAsyncThunk(
//   "auth/login",
//   async (data, { rejectWithValue }) => {
//     try {
//       return await login(data);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const userLogout = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       return await logout();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   "auth/current",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const result = await getCurrent(auth.token);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const { auth } = getState();
//       if (!auth.token) {
//         return false;
//       }
//     },
//   }
// );
