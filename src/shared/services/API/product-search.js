import { instance } from "./auth";
// import { debounce } from "debounce";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const searchProduct = async (query) => {
  const { data } = await instance.get(`/product?search=${query}`);
  return data;
};

export const debouncedSearchProduct = AwesomeDebouncePromise(
  searchProduct,
  5000
);
