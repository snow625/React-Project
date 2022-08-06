import { NavLink } from "react-router-dom";
import s from './navigation.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const Navigation = () => {
  return (
    <div className={s.container}>
    <ul className={s.list}>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/diary'>Diary</NavLink>
      </li>
      <li className={s.item}>
      <NavLink className={getLinkClassName} to='/calculate'>Calculate</NavLink>
      </li>
    </ul>
    </div>
  );
};

export default Navigation;