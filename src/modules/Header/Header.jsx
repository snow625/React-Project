import { useState } from "react";
import useIsLogin from "../../shared/hooks/useAuth";
import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserInfo from "./UserInfo";
import Modal from "./BurgerMenu/Modal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation/Navigation";
import MobileNavigate from "./MobileNavigate/MobileNavigate";
import { useMediaPredicate } from "react-media-hook";
import s from "./header.module.scss";

const Header = () => {
  const [state, setState] = useState(false);
  const isLogin = useIsLogin();

  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const smallerThan1280 = useMediaPredicate("(max-width: 1280px)");
  const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");

  const toggleModal = () => {
    setState((prevState) => !prevState);
  };

  return (
    <header className={isLogin ? `${s.header} ${s.headerLogin}` : s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Logo isLogin={isLogin} />
          {!isLogin && <HeaderAuth />}
          {isLogin && biggerThan1280 &&  <Navigation />}
          {isLogin && (
            <div className={s.wrapper}>
              {biggerThan768 && isLogin && <UserInfo modalState={state} onClose={() => toggleModal()}/>}
              {isLogin && smallerThan1280 && (
                <BurgerMenu onToggle={toggleModal} modalState={state} />
              )}
            </div>
          )}
          {smallerThan1280 && <Modal onToggle={toggleModal} modalState={state} />}
        </nav>
      </div>
      {isLogin && <MobileNavigate modalState={state} />}
    </header>
  );
};

export default Header;
