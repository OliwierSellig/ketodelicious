"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FilledButton from "../global/FilledButton";
import TextButton from "../global/TextButton";

function HeroButtons() {
  return (
    <nav className="flex gap-10 items-center">
      <FilledButton size="lg" destination="/">
        Visit the app
      </FilledButton>
      <TextButton interPageLink={true} destination="cta">
        <span className="font-medium ">Learn more</span>
        <ChevronRightIcon className="w-8 h-8 mt-[2px]" />
      </TextButton>
    </nav>
  );
}

export default HeroButtons;
