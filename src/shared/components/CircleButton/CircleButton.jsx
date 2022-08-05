import PropTypes from "prop-types";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./circleButton.module.scss";

const CircleButton = ({ type, label, mobile, iconNameInSprite, onClick }) => {
  const chooseClass = () => {
    return mobile ? `${styles.btn} ${styles.mobile}` : styles.btn;
  };
  return (
    <button
      className={chooseClass()}
      type={type}
      aria-label={label}
      onClick={onClick}
    >
      <svg className={styles.icon}>
        <use href={sprite + `#icon-${iconNameInSprite}`}></use>
      </svg>
    </button>
  );
};

CircleButton.defaultProps = {
  type: "button",
  label: "Button",
  mobile: false,
  onClick: () => {},
};

CircleButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CircleButton;
