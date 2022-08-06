import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./modal.module.scss";

const modalPlace = document.getElementById("burger-root");

const Modal = ({ onClose, modalState }) => {
  return createPortal(
    <div className={!modalState ? s.modal : `${s.modal} + ${s.isOpen}`}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink onClick={onClose} className={s.link} to="/diary">
            Дневник
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink onClick={onClose} className={s.link} to="/calculate">
            Калькулятор
          </NavLink>
        </li>
      </ul>
    </div>,
    modalPlace
  );
};

Modal.defaultProps = {
  onToggle: () => {},
  modalState: false,
};

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default Modal;
