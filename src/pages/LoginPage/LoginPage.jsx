import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { loginOldUser } from "../../redux/auth/auth-operations";
import { getErrorLoadingAuth } from "../../redux/auth/auth-selectors";
import { errorChecker } from "../../shared/utils/randomFunctions";

import Loader from "../../shared/components/Loader/Loader";
import style from "./login.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getErrorLoadingAuth);
  const handleSubmit = useCallback(
    (userData) => {
      dispatch(loginOldUser(userData));
    },
    [dispatch]
  );

  return (
    <div className={`container ${style.wrapper}`}>
      <h2 className={style.title}>Вход:</h2>
      <LoginForm onSubmit={handleSubmit} />
      {error && errorChecker(error)}
      {loading && <Loader />}
    </div>
  );
};

export default LoginPage;
