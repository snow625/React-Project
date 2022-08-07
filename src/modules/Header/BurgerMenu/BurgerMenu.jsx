import { useEffect } from "react";
import sprite from "../../../assets/svg/sprite.svg";
import PropTypes from "prop-types";
import s from "./burger-menu.module.scss";

const BurgerMenu = ({ onToggle, modalState }) => {
  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden";
    } else if (!modalState) {
      document.body.style.overflow = "auto";
    }
  }, [modalState]);

  const setIconSvg = () => {
    return modalState ? "#icon-close" : "#icon-menu";
  };

  return (
    <button
      className={s.btn}
      aria-label="Кнопка управления меню навигации"
      onClick={onToggle}
    >
      <svg className={s.icon}>
        <use href={sprite + setIconSvg()}></use>
      </svg>
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
