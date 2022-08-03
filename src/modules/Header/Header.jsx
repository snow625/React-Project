import useIsLogin from "../../shared/hooks/useisLogin";
import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu";
import Modal from "./Modal/Modal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import UserNavigate from "./UserNavigate/UserNavigate";
import { useState } from "react";
import s from "./header.module.scss";

const Header = () => {
  const isLogin = useIsLogin();
  const [state, setState] = useState(false);

  const toggleModal = () => {
    setState((prevState) => !prevState);
  };

  // const isLoginMarkup = () => {
  //   if (isLogin) {
  //     return(
  //     <nav className={s.unLoginNav}>
  //     <Logo />
  //     <div className={s.mobileContainer}><UserMenu /></div>
  //     <BurgerMenu onToggle={toggleModal} />
  //     <UserNavigate />
  //     </nav>
  //     )
  //   }
  //   return <>
  //   <Logo/>
  //   <HeaderAuth/>
  //   </>
  // }

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={isLogin ? s.nav : `${s.nav} ${s.navLogin}`}>
          {/* {isLoginMarkup()} */}
          <Logo />
          {!isLogin && <HeaderAuth />}
          {isLogin && <div className={s.mobileContainer}><UserMenu /></div>}
          {isLogin && <BurgerMenu onToggle={toggleModal} />}
          {state && <Modal onToggle={toggleModal} />}
          {isLogin && <UserNavigate />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
