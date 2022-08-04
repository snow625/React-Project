import { createAsyncThunk } from "@reduxjs/toolkit";
import { postEatenProduct } from "../../shared/services/API/day";

export const addProduct = createAsyncThunk(
  "summary/add",
  async (data, { rejectWithValue }) => {
    try {
      return await postEatenProduct(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
