import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerInAPI,
  loginInAPI,
  getCurrentUser,
  logoutFromAPI,
} from "../../shared/services/API/auth";

export const createNewUser = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      return await registerInAPI(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginOldUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      return await loginInAPI(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      await logoutFromAPI(auth.accessToken);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await getCurrentUser(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
