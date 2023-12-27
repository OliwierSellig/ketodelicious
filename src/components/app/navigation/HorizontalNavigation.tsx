"use client";

import Image from "next/image";
import Link from "next/link";
import FilledButton from "../../global/FilledButton";
import { PlusIcon } from "@heroicons/react/20/solid";
import myPhoto from "../../../../public/images/photo-me.png";
import OpenRecipeCreator from "../createRecipe/OpenRecipeCreator";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface HorizontalNavigatonProps {
  openNav: () => void;
}

function HorizontalNavigation({ openNav }: HorizontalNavigatonProps) {
  return (
    <nav
      className={`z-10 flex animate-[fadeTop_1s] items-center justify-end gap-10 bg-almond-tint-2 px-8 py-4 shadow-horizontal-nav mdl:justify-between`}
    >
      <button
        aria-label="Open mobile menu"
        onClick={openNav}
        className="hidden mdl:block [&:focus>svg]:scale-110 [&:focus>svg]:fill-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:fill-jade-normal"
      >
        <Bars3Icon className="h-8 w-8 fill-gray-normal transition-all duration-150 ease-linear" />
      </button>
      <div className="flex items-center gap-10 sm:gap-4">
        <Link
          href="/app/user/about"
          className="flex items-center gap-2 rounded-2xl px-6 py-2 transition-all duration-150 ease-linear hover:bg-jade-shade-2 focus:bg-jade-shade-2 sm:rounded-full sm:p-0 sm:hover:scale-110  [&:focus>p]:text-white [&:hover>p]:text-white"
        >
          <Image
            src={myPhoto}
            className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
            alt="User Photo"
          />
          <p className="text-xl font-medium transition-all duration-150 ease-linear sm:hidden">
            Oliwier Sellig
          </p>
        </Link>
        <OpenRecipeCreator>
          <FilledButton
            label="Create recipe"
            additionalClass="sm:p-2 sm:rounded-full"
          >
            <PlusIcon className="h-7 w-7" />
            <span className="sm:hidden">Create Recipe</span>
          </FilledButton>
        </OpenRecipeCreator>
      </div>
    </nav>
  );
}

export default HorizontalNavigation;
