import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import s from "./modal.module.scss";

const Modal = ({onToggle}) => {
  return (
      <div className={s.modal}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink onClick={onToggle} className={s.link} to="/diary">Diary</NavLink>
            </li>
            <li className={s.item}>
              <NavLink onClick={onToggle} className={s.link} to="/calculate">Calculator</NavLink>
            </li>
          </ul>
      </div>
  );
};

Modal.defaultProps = {
  onToggle: () => {},
}

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
}

export default Modal;
