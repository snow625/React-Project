import logo from "../../../images/logo.png";
import logodesktop from "../../../images/logo-desktop.png";
import sprite from "../../../images/svg/sprite.svg";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import s from "./logo.module.scss";

const Logo = ({ isLogin }) => {
  const link = () => {
    return isLogin ? "/calculate" : "/";
  };

  return (
    <div className={s.inner}>
      <NavLink to={link()}>
        <img className={s.logo} src={logo} alt="logo" />
        <img className={s.logoDesktop} src={logodesktop} alt="logo" />
      </NavLink>
      <NavLink className={s.link} to={link()}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-logo-text"}></use>
        </svg>
      </NavLink>
    </div>
  );
};

Logo.defaultProps = {
  isLogin: false,
}

Logo.propTypes = {
  isLogin: PropTypes.bool.isRequired
}

export default Logo;
