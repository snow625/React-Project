import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useModal } from "../../shared/hooks/useModal";
import useIsLogin from "../../shared/hooks/useAuth";
import Logo from "../../shared/components/Logo";
import HeaderAuth from "./HeaderAuth";
import UserInfo from "./UserInfo";
import Modal from "./BurgerMenu/Modal";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";
import MobileNavigate from "./MobileNavigate";


import style from "./header.module.scss";

const Header = () => {
  const [state, setState] = useState(false);
  const isLogin = useIsLogin();
  const isModalReduxOpen = useModal();

  const smallerThan1280 = useMediaPredicate("(max-width: 1280px)");
  const smallerThan768 = useMediaPredicate("(max-width: 768px)");
  const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  const toggleModal = () => {
    setState((prevState) => !prevState);
  };

  const headerClassChange = () => {
    return isLogin ? `${style.header} ${style.headerLogin}` : style.header;
  };

  const checker = () => {
    if (smallerThan768 && isLogin) {
      return true;
    }
    if (smallerThan768 && isModalReduxOpen) {
      return true;
    }
    return false;
  }

  return (
    <header className={headerClassChange()}>
      <div className="container">
        <nav className={style.nav}>
          <Logo />
          {!isLogin && <HeaderAuth />}
          {isLogin && biggerThan1280 && <Navigation />}
          {isLogin && (
            <div className={style.wrapper}>
              {biggerThan768 && isLogin && <UserInfo modalState={state} />}
              {isLogin && smallerThan1280 && (
                <BurgerMenu onToggle={toggleModal} modalState={state} />
              )}
            </div>
          )}
          {smallerThan1280 && isLogin && state &&(
            <Modal onClose={toggleModal} modalState={state} />
          )}
        </nav>
      </div>
      {checker() && <MobileNavigate onClick={toggleModal} modalState={state} />}
    </header>
  );
};

export default Header;
