import { useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/auth/auth-operations";
import RegisterForm from "../../modules/RegisterForm/RegisterForm";
import Loader from "../../shared/components/Loader/Loader";
import { errorChecker } from "../../shared/utils/randomFunctions";
import { getErrorLoadingAuth, userName } from "../../redux/auth/auth-selectors";

import style from "./registrerPage.module.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(getErrorLoadingAuth);
  const RegisterOk = useSelector(userName);

  useEffect(() => {
    const checkRegistered = () => {
      return navigate("/login");
    };
    if (RegisterOk) {
      checkRegistered();
    }
  }, [RegisterOk, navigate]);

  const onSubmit = useCallback(
    (userData) => {
      dispatch(createNewUser(userData));
    },
    [dispatch]
  );

  return (
    <div className={`container ${style.wrapper}`}>
      <h2 className={style.title}>Регистрация:</h2>
      <RegisterForm onSubmit={onSubmit} />
      {error && errorChecker(error)}
      {loading && <Loader />}
    </div>
  );
};
export default RegisterPage;
