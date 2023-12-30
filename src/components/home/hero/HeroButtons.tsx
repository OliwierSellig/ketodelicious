"use client";

import { Link } from "react-scroll";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FilledButton from "../../global/FilledButton";

function HeroButtons() {
  return (
    <nav className="flex animate-[fadeLeft_1.4s] items-center gap-10 xsm:flex-col">
      <FilledButton size="lg" destination="/app/homeboard">
        <span className="px-6 xsm:text-2xl xxsm:px-2">Visit the app</span>
      </FilledButton>
      <Link
        href="/"
        smooth={true}
        offset={-100}
        duration={500}
        to="cta"
        className="underline-ani relative flex cursor-pointer items-center gap-1 text-xl"
      >
        <span className="font-medium ">Learn more</span>
        <ChevronRightIcon className="mt-[2px] h-8 w-8" />
      </Link>
    </nav>
  );
}

export default HeroButtons;
