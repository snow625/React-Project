import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button";
import fields from "./fields";
import initialState from "./initialState";

import style from "./loginForm.module.scss";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/register");
  };

  const { email, password } = state;

  return (
    <form className={style.form_wrapper} onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={email} {...fields.email} />
      <TextField
        onChange={handleChange}
        value={password}
        {...fields.password}
      />
      <div className={style.button_wrapper}>
        <Button type="submit" text="Log in" />
        <Button
          onClick={handleClick}
          type="button"
          text="Register"
          white="true"
        />
      </div>
    </form>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
