import { NavLink } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import logoBasic from "../../../assets/logo/logoBasic.svg";
import logoDesktop from "../../../assets/logo/logoDesktop.svg";
import logo from "../../../assets/logo/logo.svg";
import useIsLogin from "../../hooks/useAuth";

import style from "./logo.module.scss";

const Logo = () => {
  const isLogin = useIsLogin();
  const link = () => {
    return isLogin ? "/calculate" : "/";
  };

  const smallerThan1280 = useMediaPredicate("(max-width: 1280px)");

  const logoSet = () => {
    if (!isLogin && smallerThan1280) {
      return <img src={logoBasic} alt="logo" />;
    }
    if (isLogin && smallerThan1280) {
      return <img src={logo} alt="logo" />;
    }
    return <img src={logoDesktop} alt="logo" />;
  };

  return (
    <div className={style.inner}>
      <NavLink
        to={link()}
        aria-label={isLogin ? "link to calculate page" : "link to home page"}
      >
        {logoSet()}
      </NavLink>
    </div>
  );
};

export default Logo;
