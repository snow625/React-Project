import logo from "../../../images/logo.png";
import logodesktop from "../../../images/logo-desktop.png";
import sprite from "../../../images/svg/sprite.svg";
import { NavLink } from "react-router-dom";
import s from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={s.inner}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt='logo' />
        <img className={s.logoDesktop} src={logodesktop} alt='logo' />
      </NavLink>
        <NavLink className={s.link} to="/">
          <svg className={s.icon}>
            <use href={sprite + "#icon-logo-text"}></use>
          </svg>
        </NavLink>
    </div>
  );
};

export default Logo;
