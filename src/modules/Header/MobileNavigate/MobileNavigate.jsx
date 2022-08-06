import UserInfo from "../UserInfo";
import PropTypes from "prop-types";
import s from "./mobile-navigate.module.scss";

const MobileNavigate = ({ modalState, onClick }) => {
  return (
    <div className={s.container}>
      <div className="container">
        <div className={s.wrapper}>
          <UserInfo modalState={modalState} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

MobileNavigate.propTypes = {
  modalState: PropTypes.bool.isRequired,
};

export default MobileNavigate;
