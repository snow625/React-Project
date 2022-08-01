import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu";
import Button from "../../shared/components/Button";
const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <Button text="bdsads" />
        <HeaderAuth />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
