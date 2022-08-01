import { useDispatch } from "react-redux/es/exports";
import LoginForm from "../../modules/LoginForm/LoginForm";
import { loginOldUser } from "../../redux/auth/auth-operation";
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(loginOldUser(userData));
  };
  return (
    <div className="container">
      <h2>Login:</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
