import { Outlet, Navigate } from "react-router-dom";
import useIsLogin from "../../hooks/useAuth";

const PublicRoute = () => {
  const isLogin = useIsLogin();
  if (isLogin) {
    return <Navigate to="/diary" />;
  }
  return <Outlet />;
};
export default PublicRoute;
