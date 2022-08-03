import PropTypes from "prop-types";
import sprite from "../../../images/svg/sprite.svg";
import s from "./burger-menu.module.scss";

const BurgerMenu = ({ onToggle, modalState }) => {
  return (
    <button className={s.btn} onClick={onToggle}>
      {!modalState ? (
        <svg className={s.icon}>
          <use href={sprite + "#icon-menu"}></use>
        </svg>
      ) : (
        <svg className={s.icon}>
          <use href={sprite + "#icon-close"}></use>
        </svg>
      )}
    </button>
  );
};

BurgerMenu.defaultProps = {
  onToggle: () => {},
  modalState: false,
};

BurgerMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default BurgerMenu;
