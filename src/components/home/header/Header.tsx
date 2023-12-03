"use client";

import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo";

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
      className={`fixed-container left-1/2 -translate-x-1/2 w-full flex justify-between items-center py-3 gap-2 z-50   ${
        isSticky
          ? "fixed bg-almond-normal/90 rounded-3xl animate-[fadeFromTopHeader_1.2s]"
          : "absolute animate-[fadeIn_1s]"
      }`}
    >
      <Logo />
      <HeaderNav />
    </header>
  );
}

export default Header;
