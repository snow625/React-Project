import { createSlice } from "@reduxjs/toolkit";

import initialState from "./summary-initialState";
import { pending, rejected } from "../../shared/utils/pendingRejected";
import { getUser } from "../auth/auth-operations";
import { addProduct, dayInfo, removeProduct } from "./summary-operations";
import { makeRandomProducts } from "../../shared/utils/randomFunctions";

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setDate: (store, { payload }) => {
      store.date = payload.date;
    },
    updateEatenProducts: (store, { payload }) => {
      store.eatenProducts = store.eatenProducts.filter(
        (el) => el.id !== payload
      );
    },

    updateSummaryAndnotAllowedProducts: (store, { payload }) => {
      store.notAllowedProducts = makeRandomProducts(payload.notAllowedProducts);
      const { summaries } = payload;
      if (summaries.length > 0) {
        const newSummary = summaries[summaries.length - 1];
        store.summary = {
          kcalLeft: newSummary.kcalLeft,
          kcalConsumed: newSummary.kcalConsumed,
          dailyRate: newSummary.dailyRate,
          percentsOfDailyRate: newSummary.percentsOfDailyRate,
        };
      }
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

    [dayInfo.pending]: pending,
    [dayInfo.rejected]: rejected,
    [dayInfo.fulfilled]: (store, { payload }) => {
      if (payload.daySummary) {
        return {
          ...store,
          loading: false,
          dayId: payload.id,
          date: payload.date,
          eatenProducts: [...payload.eatenProducts],
          summary: {
            kcalLeft: payload.daySummary.kcalLeft,
            kcalConsumed: payload.daySummary.kcalConsumed,
            dailyRate: payload.daySummary.dailyRate,
            percentsOfDailyRate: payload.daySummary.percentsOfDailyRate,
          },
        };
      }
      if (payload.kcalLeft) {
        return {
          ...store,
          loading: false,
          summary: {},
          eatenProducts: [],
        };
      }
      return {
        ...store,
        loading: false,
      };
    },

    [addProduct.pending]: pending,
    [addProduct.rejected]: rejected,
    [addProduct.fulfilled]: (store, { payload }) => {
      const { eatenProducts } = payload?.day || payload?.newDay;
      const summary = payload?.newSummary || payload?.daySummary;
      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        summary;
      return {
        ...store,
        loading: false,
        eatenProducts,
        summary: { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate },
      };
    },

    [removeProduct.pending]: pending,
    [removeProduct.rejected]: rejected,
    [removeProduct.fulfilled]: (store, { payload }) => {
      const {
        newDaySummary: {
          kcalLeft,
          kcalConsumed,
          dailyRate,
          percentsOfDailyRate,
        },
      } = payload;
      return {
        ...store,
        loading: false,
        summary: {
          kcalLeft,
          kcalConsumed,
          dailyRate,
          percentsOfDailyRate,
        },
      };
    },
  },
});

export const {
  setDate,
  updateEatenProducts,
  updateSummaryAndnotAllowedProducts,
} = summarySlice.actions;

export default summarySlice.reducer;
