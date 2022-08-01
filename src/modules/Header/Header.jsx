import Contaiter from "../../shared/components/Contaiter";
import Logo from "./Logo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header>
      <Contaiter>
        <Logo />
        <HeaderAuth />
        <UserMenu />
      </Contaiter>
    </header>
  );
};

export default Header;
