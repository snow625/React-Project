import PropTypes from "prop-types";
import sprite from "../../../images/svg/sprite.svg";
import s from "./burger-menu.module.scss";

const BurgerMenu = ({ onToggle }) => {
  return (
    <button className={s.btn} onClick={onToggle}>
      <svg className={s.icon}>
        <use href={sprite + "#icon-menu"}></use>
      </svg>
    </button>
  );
};

BurgerMenu.defaultProps = {
  onToggle: () => {},
};

BurgerMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default BurgerMenu;
