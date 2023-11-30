import HeaderLink from "./HeaderLink";
import FilledButton from "../global/FilledButton";

function HeaderNav() {
  return (
    <nav className="flex gap-5 items-center pt-1">
      <HeaderLink to="hero">Home</HeaderLink>
      <HeaderLink to="hiw">How It Works</HeaderLink>
      <HeaderLink to="achievements">Achievements</HeaderLink>
      <HeaderLink to="recipes">Recipes</HeaderLink>
      <FilledButton size="md" destination="/">
        Account
      </FilledButton>
    </nav>
  );
}

export default HeaderNav;
