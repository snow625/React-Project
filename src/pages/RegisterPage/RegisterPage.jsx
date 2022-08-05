import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/auth/auth-operations";
import RegisterForm from "../../modules/RegisterForm/RegisterForm";

import style from "./registrerPage.module.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (userData) => {
      dispatch(createNewUser(userData));
    },
    [dispatch]
  );

  return (
    <div className={`container ${style.wrapper}`}>
      <h2 className={style.title}>Register:</h2>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};
export default RegisterPage;
