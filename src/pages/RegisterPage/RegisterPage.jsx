import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/auth/auth-operation";
import RegisterForm from "../../modules/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (userData) => {
      dispatch(createNewUser(userData));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <h2>Register new user:</h2>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};
export default RegisterPage;
