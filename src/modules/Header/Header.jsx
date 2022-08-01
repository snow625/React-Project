import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu";
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
        <Logo />
        <HeaderAuth />
        {/* <UserMenu /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
