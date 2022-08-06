import { instance } from "./auth";

//PAY ATTENTION
// productCharacteristics means object of this template:
//{
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

export const postEatenProduct = async (data) => {
  const { data: result } = await instance.post("/day", data);
  return result;
};

export const getInfoForDay = async (date) => {
  const { data } = await instance.post("/day/info", date);
  return data;
};

export const deleteProductItem = async (productItem) => {
  const { data } = await instance.delete("/day", {
    data: productItem,
  });
  const newData = { ...data, deletedProductId: productItem.eatenProductId };

  return newData;
};
