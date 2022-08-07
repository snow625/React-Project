import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/auth/auth-operations";
import { userName } from "../../../redux/auth/auth-selectors";
import { toggleModalRedux } from "../../../redux/modal/modal-slice";
import { useModal } from "../../../shared/hooks/useModal";
import { useMediaPredicate } from "react-media-hook";
import useAuth from "../../../shared/hooks/useAuth";
import sprite from "../../../assets/svg/sprite.svg";

import style from "./user-info.module.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector(userName);
  const isLogin = useAuth();
  const isModal = useModal();

  const mobile = useMediaPredicate("(max-width: 768px)");

  const handleClickLogOut = () => {
    dispatch(userLogout());
  };

  const handleClickBack = () => {
    dispatch(toggleModalRedux());
  };

  const btnBackMarkup = () => {
    return (
      <button
        className={style.iconBtn}
        onClick={handleClickBack}
        aria-label="Кнопка назад"
      >
        <svg className={style.icon}>
          <use href={sprite + "#icon-goBack"} />
        </svg>
      </button>
    );
  };

  const userInfoMarkup = () => {
    return (
      <>
        <p className={style.text}>{name}</p>
        <span className={style.span}></span>
        <button className={style.btn} type="button" onClick={handleClickLogOut}>
          Выйти
        </button>
      </>
    );
  };

  const isModalOpen = () => {
    if (!isLogin && mobile && isModal) {
      return btnBackMarkup();
    }
    if (isLogin && mobile && isModal) {
      return [btnBackMarkup(), userInfoMarkup()];
    }
    if (isLogin && mobile && !isModal) {
      return userInfoMarkup();
    }
    if (isLogin) {
      return userInfoMarkup();
    }
  };

  return <>{isModalOpen()}</>;
};

export default UserInfo;
