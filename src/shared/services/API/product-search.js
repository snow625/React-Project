import { instance } from "./auth";
import Alert from "../../components/Alert";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const searchProduct = async (query) => {
  const { data } = await instance.get(`/product?search=${query}`);
  return data;
};

const productSearchWarn = async (message) => {
  return <Alert message={message} />;
};

export const debouncedSearchProduct = AwesomeDebouncePromise(
  searchProduct,
  1000
);

export const debouncedProductSearchWarn = AwesomeDebouncePromise(
  productSearchWarn,
  1000
);
