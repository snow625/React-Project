import { instance } from "./auth";

export const searchProduct = async (query) => {
  const { data } = await instance.get(`/product?search=${query}`);
  return data;
};
