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
        aria-label="Open Mobile Navigation"
        onClick={() => setMobileOpen(true)}
        className="mt-1 hidden rounded-full p-2 transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-105 focus:bg-jade-normal lg:block sm:p-[6px] [&:focus>svg]:fill-white-normal [&:hover>svg]:fill-white-normal"
      >
        <Bars3Icon className="h-8 w-8 fill-gray-normal md:h-7 md:w-7 sm:h-6 sm:w-6" />
      </button>
      <nav
        className={`flex items-center gap-5 pt-1 ${
          !mobileOpen
            ? "lg:hidden"
            : "lg:bg-jade-shade-1/50 z-[99000] backdrop-blur-sm lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-screen lg:animate-[fadeIn_300ms] lg:flex-col lg:justify-center lg:gap-8"
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
          <p className="lg:animate-[fadeIn_1s] lg:px-12 lg:py-1 lg:text-3xl sm:text-2xl">
            Account
          </p>
        </FilledButton>
      </nav>
    </>
  );
}

export default HeaderNav;
