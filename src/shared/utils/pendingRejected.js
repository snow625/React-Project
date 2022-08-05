export const pending = (store) => ({
  ...store,
  loading: true,
  error: null,
});

export const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: { message: payload.message, status: payload.response.status },
});
