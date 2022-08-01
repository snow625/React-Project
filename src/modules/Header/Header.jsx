import useIsLogin from "../../shared/hooks/useisLogin";
import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu";
import s from "./header.module.scss";

const Header = () => {
  const isLogin = useIsLogin();
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Logo />
          {isLogin ? <UserMenu /> : <HeaderAuth />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
