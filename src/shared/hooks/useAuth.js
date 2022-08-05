import { useSelector } from "react-redux";
import { isLogin } from "../../redux/auth/auth-selectors";

const useAuth = () => {
  return useSelector(isLogin);
};

export default useAuth;
