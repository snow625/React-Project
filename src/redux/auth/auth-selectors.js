export const isLogin = (store) => {
  return store.auth.isLogin;
};
export const userData = (store) => {
  return store.auth;
};

export const userName = (store) => {
  return store.auth.user.userName;
};

export const getUserId = (store) => {
  return store.auth.user.userId;
};

export const getErrorLoadingAuth = (store) => {
  return { loading: store.auth.loading, error: store.auth.error };
};
