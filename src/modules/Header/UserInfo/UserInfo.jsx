import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/auth/auth-operations";
import { resetSummary } from "../../../redux/summary/summary-slice";
import { userName } from "../../../redux/auth/auth-selectors";
import { toggleModalRedux } from "../../../redux/modal/modal-slice";
import { getModalState } from "../../../redux/modal/modal-selector";
import sprite from "../../../assets/svg/sprite.svg";

import style from "./user-info.module.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState);
  const name = useSelector(userName);

  const handleClick = () => {
    dispatch(userLogout());
    dispatch(resetSummary());
  };

  const handleClickBack = () => {
    dispatch(toggleModalRedux());
  };

  return (
    <>
      <div className={style.container}>
        {isModalOpen ? (
          <button
            className={style.iconBtn}
            onClick={handleClickBack}
            aria-label="Кнопка назад"
          >
            <svg className={style.icon}>
              <use href={sprite + "#icon-goBack"} />
            </svg>
          </button>
        ) : (
          <>
            <p className={style.text}>{name}</p>
            <span className={style.span}></span>
            <button className={style.btn} type="button" onClick={handleClick}>
              Выйти
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UserInfo;
