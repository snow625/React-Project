import useIsLogin from "../../shared/hooks/useisLogin";
import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserInfo from "./UserInfo";
import Modal from "./BurgerMenu/Modal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import s from "./header.module.scss";

const Header = () => {
  const isLogin = useIsLogin();
  const [state, setState] = useState(false);

  const toggleModal = () => {
    setState((prevState) => !prevState);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={isLogin ? s.nav : `${s.nav} ${s.navLogin}`}>
          <Logo isLogin={isLogin} />
          {!isLogin && <HeaderAuth />}
          {isLogin && (
            <div className={s.mobileContainer}>
              <UserInfo />
            </div>
          )}
          {isLogin && <BurgerMenu onToggle={toggleModal} modalState={state} />}
          {state && <Modal onToggle={toggleModal} />}
          {isLogin && <Navigation />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
