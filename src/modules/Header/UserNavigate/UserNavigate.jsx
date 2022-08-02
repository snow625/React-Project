import { NavLink } from "react-router-dom";
import s from './user-navigate.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const UserNavigate = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/diary'>Diary</NavLink>
      </li>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/calculate'>Calculate</NavLink>
      </li>
    </ul>
  );
};

export default UserNavigate;