"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FilledButton from "../../global/FilledButton";
import TextButton from "../../global/TextButton";

function HeroButtons() {
  return (
    <nav className="flex gap-10 items-center xsm:flex-col animate-[fadeLeft_1.4s]">
      <FilledButton size="lg" destination="/">
        <span className="xsm:text-2xl px-6 xxsm:px-2">Visit the app</span>
      </FilledButton>
      <TextButton interPageLink={true} destination="cta">
        <span className="font-medium ">Learn more</span>
        <ChevronRightIcon className="w-8 h-8 mt-[2px]" />
      </TextButton>
    </nav>
  );
}

export default HeroButtons;
