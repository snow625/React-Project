import axios from "axios";

export const instance = axios.create({
  baseURL: "https://slimmom-backend.goit.global",
});

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const registerInAPI = async (userData) => {
  const data = await instance.post("/auth/register", userData);
  return data;
};

export const loginInAPI = async (userData) => {
  const { data } = await instance.post("/auth/login", userData);
  setToken(data.accessToken);
  return data;
};

export const logoutFromAPI = async (token) => {
  const { data } = await instance.post("/auth/logout", token);
  setToken();
  return data;
};

export const getCurrentUser = async (token) => {
  setToken(token);
  try {
    const { data } = await instance.get("/user");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
