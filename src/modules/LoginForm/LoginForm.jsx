import { Link } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button";
import fields from "./fields";
import initialState from "./initialState";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={email} {...fields.email} />
      <TextField
        onChange={handleChange}
        value={password}
        {...fields.password}
      />
      <Button type="submit" text="Login" />
      <Link to="/register">
        <Button type="button" text="Register" white="true" />
      </Link>
    </form>
  );
};

export default LoginForm;
