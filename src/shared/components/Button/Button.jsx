import PropTypes from "prop-types";
import s from "./button.module.css";

const Button = (props) => {
  const { type, text, onClick } = props;
  return (
    <button className={s.btn} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  type: "submit",
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
