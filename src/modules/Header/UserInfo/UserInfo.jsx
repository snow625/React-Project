import { useDispatch, useSelector } from "react-redux/es/exports";
import { userLogout } from "../../../redux/auth/auth-operations";
import { resetSummary } from "../../../redux/summary/summary-slice";
import { userName } from "../../../redux/auth/auth-selectors";
import sprite from "../../../assets/svg/sprite.svg";
import PropTypes from "prop-types";
import s from "./user-info.module.scss";

const UserInfo = ({ modalState, onClose }) => {
  const dispatch = useDispatch();

  const name = useSelector(userName);

  const handleClick = () => {
    dispatch(userLogout());
    dispatch(resetSummary());
  };
  console.log(modalState)
  console.log(onClose);

  return (
    <>
      <div className={s.container}>
        {modalState ? (
          <button
            className={s.iconBtn}
            onClick={onClose}
            aria-label="go back button"
          >
            <svg className={s.icon}>
              <use href={sprite + "#icon-goBack"} />
            </svg>
          </button>
        ) : (
          <>
            <p className={s.text}>{name}</p>
            <span className={s.span}></span>
            <button className={s.btn} type="button" onClick={handleClick}>
              Exit
            </button>
          </>
        )}
      </div>
    </>
  );
};

UserInfo.defaultProps = {
  modalState: false,
};

UserInfo.propTypes = {
  modalState: PropTypes.bool.isRequired,
};

export default UserInfo;
