"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FilledButton from "../../global/FilledButton";
import TextButton from "../../global/TextButton";

function HeroButtons() {
  return (
    <nav className="flex animate-[fadeLeft_1.4s] items-center gap-10 xsm:flex-col">
      <FilledButton size="lg" destination="/">
        <span className="px-6 xsm:text-2xl xxsm:px-2">Visit the app</span>
      </FilledButton>
      <TextButton interPageLink={true} destination="cta">
        <span className="font-medium ">Learn more</span>
        <ChevronRightIcon className="mt-[2px] h-8 w-8" />
      </TextButton>
    </nav>
  );
}

export default HeroButtons;
