import HeaderLink from "./HeaderLink";
import FilledButton from "../global/FilledButton";
import { Bars3Icon } from "@heroicons/react/20/solid";

function HeaderNav() {
  return (
    <>
      <button className="p-2 mt-1 bg-jade-normal rounded-full hover:bg-jade-shade focus:bg-jade-shade transition-all duration-150 ease-linear focus:scale-105 hover:scale-105 hidden lg:block sm:p-[6px]">
        <Bars3Icon className="w-8 h-8 fill-white-normal md:w-7 md:h-7 sm:w-6 sm:h-6" />
      </button>
      <nav className="flex gap-5 items-center pt-1 lg:hidden">
        <HeaderLink to="hero">Home</HeaderLink>
        <HeaderLink to="hiw">How It Works</HeaderLink>
        <HeaderLink to="achievements">Achievements</HeaderLink>
        <HeaderLink to="recipes">Recipes</HeaderLink>
        <FilledButton size="md" destination="/">
          Account
        </FilledButton>
      </nav>
    </>
  );
}

export default HeaderNav;
