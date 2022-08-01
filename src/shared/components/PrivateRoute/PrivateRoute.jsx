import { Outlet } from "react-router-dom";
// import useIsLogin from "../../hooks/useisLogin";

const PrivateRoute = () => {
  //   const isLogin = useIsLogin();
  //   if (!isLogin) {
  //     return <Navigate to="/" />;
  //   }
  return <Outlet />;
};
export default PrivateRoute;
