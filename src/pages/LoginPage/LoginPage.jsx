import { useCallback } from "react";
import { useDispatch } from "react-redux/es/exports";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { loginOldUser } from "../../redux/auth/auth-operations";

import style from "./login.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (userData) => {
      dispatch(loginOldUser(userData));
    },
    [dispatch]
  );

  return (
    <div className={`container ${style.wrapper}`}>
      <h2 className={style.title}>Sing in:</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
