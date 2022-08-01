import { Link } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button";
import fields from "./fields";
import initialState from "./initialState";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { username, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={username} {...fields.name} />
      <TextField onChange={handleChange} value={email} {...fields.email} />
      <TextField
        onChange={handleChange}
        value={password}
        {...fields.password}
      />
      <Button type="submit" text="Register" />
      <Link to="/login">
        <Button type="button" text="Login" white="true" />
      </Link>
    </form>
  );
};

export default RegisterForm;
