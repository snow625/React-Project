import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import initialState from "./initialState";
import { pending, rejected } from "../../shared/utils/pendingRejected";
import { getUser } from "../auth/auth-operation";
import { addProduct } from "./summary-operation";
import { makeRandomProducts } from "../../shared/utils/randomFunctions";

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setSummary: (store, { payload }) => {
      store.summary = payload;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (store, { payload }) => {
      const products = makeRandomProducts(payload.userData.notAllowedProducts);
      return {
        ...store,
        loading: false,
        notAllowedProducts: products,
      };
    },
    [addProduct.pending]: pending,
    [addProduct.rejected]: rejected,
    [addProduct.fulfilled]: (store, { payload }) => {
      const { eatenProduct } = payload;
      const summary = payload?.newSummary || payload?.daySummary;
      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        summary;
      return {
        ...store,
        summary: { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate },
      };
    },
  },
});

export const { setSummary } = summarySlice.actions;

export default summarySlice.reducer;
