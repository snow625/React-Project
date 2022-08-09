import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./modal.module.scss";

const modalPlace = document.getElementById("burger-root");

const Modal = ({ onClose }) => {
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink onClick={onClose} className={s.link} to="/diary">
              Diary
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink onClick={onClose} className={s.link} to="/calculate">
              Calculator
            </NavLink>
          </li>
        </ul>
      </div>
    </div>,
    modalPlace
  );
};

Modal.defaultProps = {
  onClose: () => {},
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
