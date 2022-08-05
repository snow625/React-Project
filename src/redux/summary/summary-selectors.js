export const getSummary = (store) => {
  return store.summary;
};
export const summary = (store) => {
  return store.summary.summary;
};
export const getdate = (store) => {
  return store.summary.date;
};
export const getErrorLoadingSummary = (store) => {
  return { loading: store.summary.loading, error: store.summary.error };
};
export const getFoodNotRecommended = (store) => {
    return store.summary.notAllowedProducts;
};
