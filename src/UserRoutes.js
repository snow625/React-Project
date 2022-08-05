import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublikRoute from "./shared/components/PublikRoute/PublikRoute";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import Loader from "./shared/components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const CalculatePage = lazy(() => import("./pages/CalculatePage"));
const DiaryPage = lazy(() => import("./pages/DiaryPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublikRoute />}>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/react-project"} element={<HomePage />} />
          <Route path={"/"} element={<HomePage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path={"/calculate"} element={<CalculatePage />} />
          <Route path={"/diary"} element={<DiaryPage />} />
        </Route>

        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
