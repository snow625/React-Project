import { Outlet, Navigate } from "react-router-dom";
import useIsLogin from "../../hooks/useisLogin";

const PublikRoute = () => {
  const isLogin = useIsLogin();
  if (isLogin) {
    return <Navigate to="/diary" />;
  }
  return <Outlet />;
};
export default PublikRoute;
