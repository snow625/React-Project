import { useCallback } from "react";
import { useDispatch } from "react-redux/es/exports";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { loginOldUser } from "../../redux/auth/auth-operation";
const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (userData) => {
      dispatch(loginOldUser(userData));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <h2>Login:</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
