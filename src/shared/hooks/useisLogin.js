import { useSelector } from "react-redux";
import { isLogin } from "../../redux/auth/auth-selector";

const useIsLogin = () => {
  return useSelector(isLogin);
};

export default useIsLogin;
