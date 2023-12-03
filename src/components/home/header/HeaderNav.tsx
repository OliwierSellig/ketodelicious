import HeaderLink from "./HeaderLink";
import FilledButton from "../../global/FilledButton";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import MobileCloseButton from "./MobileCloseButton";

function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    function hideNav() {
      setMobileOpen(false);
    }

    document.addEventListener("scroll", hideNav);

    function returnHideNav() {
      document.removeEventListener("scroll", hideNav);
    }

    return returnHideNav;
  }, []);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="p-2 mt-1 rounded-full hover:bg-jade-normal focus:bg-jade-normal transition-all duration-150 ease-linear focus:scale-105 hover:scale-105 hidden lg:block sm:p-[6px] [&:hover>svg]:fill-white-normal [&:focus>svg]:fill-white-normal"
      >
        <Bars3Icon className="w-8 h-8 fill-gray-normal md:w-7 md:h-7 sm:w-6 sm:h-6" />
      </button>
      <nav
        className={`flex gap-5 items-center pt-1 ${
          !mobileOpen
            ? "lg:hidden"
            : "lg:flex-col lg:gap-8 lg:fixed lg:top-0 lg:left-0 lg:w-screen lg:h-screen lg:bg-jade-shade/50 backdrop-blur-sm z-[99000] lg:justify-center lg:animate-[fadeIn_300ms]"
        }  `}
      >
        <MobileCloseButton handleClick={() => setMobileOpen(false)} />
        <HeaderLink handleClick={() => setMobileOpen(false)} to="hero">
          Home
        </HeaderLink>
        <HeaderLink handleClick={() => setMobileOpen(false)} to="hiw">
          How It Works
        </HeaderLink>
        <HeaderLink handleClick={() => setMobileOpen(false)} to="achievements">
          Achievements
        </HeaderLink>
        <HeaderLink handleClick={() => setMobileOpen(false)} to="recipes">
          Recipes
        </HeaderLink>
        <FilledButton size="md" destination="/">
          <p className="lg:text-3xl lg:px-12 lg:py-1 lg:animate-[fadeIn_1s] sm:text-2xl">
            Account
          </p>
        </FilledButton>
      </nav>
    </>
  );
}

export default HeaderNav;
