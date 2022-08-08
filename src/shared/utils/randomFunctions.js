import { Navigate } from "react-router-dom";
import Alert from "../components/Alert";

export const makeRandomProducts = (arr) => {
  if (arr.length > 10) {
    const randomIdx = [];
    for (let i = 0; i < 10; i += 1) {
      randomIdx.push(Math.floor(Math.random() * (arr.length - 1) + 1));
    }
    return arr.filter((_, idx) => randomIdx.includes(idx));
  }
  return arr;
};

export const errorChecker = (error) => {
  const { message, status } = error;
  if (status === 401) {
    return <Navigate to={"/login"} />;
  }
  if (status === 403) {
    return <Alert message={message} />;
  }
  return <Alert message={message} />;
};
