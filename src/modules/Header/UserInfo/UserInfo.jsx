import { useDispatch, useSelector } from "react-redux/es/exports";
import { userLogout } from "../../../redux/auth/auth-operation";
import { userName } from "../../../redux/auth/auth-selector";
import s from "./user-info.module.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector(userName);
  const handleClick = () => {
    dispatch(userLogout());
  };
  return (
    <div className={s.container}>
      <p className={s.text}>{name}</p>
      <span className={s.span}></span>
      <button className={s.btn} type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
};

export default UserInfo;
