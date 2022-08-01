import { NavLink } from "react-router-dom";
import s from './header-auth.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const HeaderAuth = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/login'>Sign in</NavLink>
      </li>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/register'>Registration</NavLink>
      </li>
    </ul>
  );
};

export default HeaderAuth;
