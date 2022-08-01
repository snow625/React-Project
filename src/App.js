import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getUser } from "./redux/auth/auth-operation";
import Header from "./modules/Header";

import UserRoutes from "./UserRoutes";

import "modern-normalize/modern-normalize.css";
import "./index.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <UserRoutes />
        </div>
      </main>
    </>
  );
};

export default App;
