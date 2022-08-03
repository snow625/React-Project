import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button";
import fields from "./fields";
import initialState from "./initialState";

import style from "./registerForm.module.scss";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/login");
  };

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
      <div className={style.button_wrapper}>
        <Button type="submit" text="Register" />
        <Button onClick={handleClick} type="button" text="Login" white="true" />
      </div>
    </form>
  );
};

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
