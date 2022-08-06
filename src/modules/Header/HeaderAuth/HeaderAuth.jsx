import { NavLink } from "react-router-dom";
import s from "./header-auth.module.scss";

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const HeaderAuth = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getLinkClassName} to="/login">
            Вход
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getLinkClassName} to="/register">
            регистрация
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderAuth;
