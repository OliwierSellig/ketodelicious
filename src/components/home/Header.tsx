import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed-container flex justify-between items-center py-3 gap-2">
      <Logo />
      <HeaderNav />
    </header>
  );
}

export default Header;
