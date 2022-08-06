export const loadingState = (prevState) => ({
  ...prevState,
  error: null,
  loading: true,
});

export const errorState = (prevState, error) => ({
  ...prevState,
  loading: false,
  error: {
    message: error.response.data.message,
    status: error.response.status,
  },
});
