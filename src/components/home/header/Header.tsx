"use client";

import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../../global/Logo";

function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos && currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed-container left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between gap-2 py-3   ${
        isSticky
          ? "fixed animate-[fadeFromTopHeader_1.2s] rounded-3xl bg-almond-normal/90"
          : "absolute animate-[fadeIn_1s]"
      }`}
    >
      <Logo />
      <HeaderNav />
    </header>
  );
}

export default Header;
