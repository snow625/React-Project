import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/auth/auth-operations";
import { resetSummary } from "../../../redux/summary/summary-slice";
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
    dispatch(resetSummary());
  };

  const handleClickBack = () => {
    dispatch(toggleModalRedux());
  };

  const isModalOpen = () => {
    // человек не залог, с тел и открыл модалку - компонент с кнопкой назад
    if (!isLogin && mobile && isModal) {
      console.log('1')
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
    }
    // залог, с тел, модалка открыта - компонент с кнопкой и имя и выход
    if (isLogin && mobile && isModal) {
      console.log('2')
      return (
        <>
          <button
            className={style.iconBtn}
            onClick={handleClickBack}
            aria-label="Кнопка назад"
          >
            <svg className={style.icon}>
              <use href={sprite + "#icon-goBack"} />
            </svg>
          </button>

          <p className={style.text}>{name}</p>
          <span className={style.span}></span>
          <button
            className={style.btn}
            type="button"
            onClick={handleClickLogOut}
          >
            Выйти
          </button>
        </>
      );
    }
    // залг, с тел, модалкка закрыта - компонент имя и выход
    if (isLogin && mobile && !isModal) {
      console.log('3')
      return (
        <>
          <p className={style.text}>{name}</p>
          <span className={style.span}></span>
          <button
            className={style.btn}
            type="button"
            onClick={handleClickLogOut}
          >
            Выйти
          </button>
        </>
      );
    }
    if (isLogin) {
      console.log('4')
      return (
        <>
          <p className={style.text}>{name}</p>
          <span className={style.span}></span>
          <button
            className={style.btn}
            type="button"
            onClick={handleClickLogOut}
          >
            Выйти
          </button>
        </>
      );
    }
  };

  return (
    <>
      {isModalOpen()}
      {/* <div className={style.container}>
        {useModal() ? (
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
            <button
              className={style.btn}
              type="button"
              onClick={handleClickLogOut}
            >
              Выйти
            </button>
          </>
        )}
      </div> */}
    </>
  );
};

export default UserInfo;
