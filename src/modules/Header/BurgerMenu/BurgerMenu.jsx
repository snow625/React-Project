import { useEffect } from "react";
import sprite from "../../../images/svg/sprite.svg";
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
