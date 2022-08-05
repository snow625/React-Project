import { createSlice } from "@reduxjs/toolkit";

import initialState from "./summary-initialState";
import { pending, rejected } from "../../shared/utils/pendingRejected";
import { getUser } from "../auth/auth-operation";
import { addProduct, dayInfo, removeProduct } from "./summary-operation";
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

export const { setDate, updateEatenProducts } = summarySlice.actions;

export default summarySlice.reducer;
