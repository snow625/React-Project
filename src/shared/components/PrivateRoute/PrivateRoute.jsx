import { Outlet, Navigate } from "react-router-dom";
import useIsLogin from "../../hooks/useAuth";

const PrivateRoute = () => {
  const isLogin = useIsLogin();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
export default PrivateRoute;
