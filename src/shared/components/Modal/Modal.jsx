import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModalRedux } from "../../../redux/modal/modal-slice";

import style from "./modal.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

const modalPlace = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", handleClose);
    return () => document.removeEventListener("keydown", handleClose);
  }, []);

  const onClose = () => {
    dispatch(toggleModalRedux());
  };

  function handleClose(event) {
    const { target, currentTarget, code } = event;
    if (target === currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <div onClick={handleClose} className={style.overlay}>
      <div className={style.modal}>
        <button
          className={style.close_btn}
          type="button"
          aria-label="button close"
          onClick={onClose}
        >
          <svg className={style.close_icon}>
            <use href={sprite + "#icon-close"} />
          </svg>
        </button>
        <div className={style.container}>{children}</div>
      </div>
    </div>,
    modalPlace
  );
};

export default Modal;
