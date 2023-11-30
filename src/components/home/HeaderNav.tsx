import HeaderLink from "./HeaderLink";
import FilledButton from "../global/FilledButton";

function HeaderNav() {
  return (
    <nav className="flex gap-5 items-center pt-1">
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/">How It Works</HeaderLink>
      <HeaderLink to="/">Achievements</HeaderLink>
      <HeaderLink to="/">Recipes</HeaderLink>
      <FilledButton size="md" destination="/">
        Account
      </FilledButton>
    </nav>
  );
}

export default HeaderNav;
