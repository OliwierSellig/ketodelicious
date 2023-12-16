"use client";

import Logo from "../../global/Logo";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  StarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import FilledButton from "../../global/FilledButton";
import NavLink from "./NavLink";
import { BaseSyntheticEvent, useRef } from "react";
import SvgButton from "@/components/global/SvgButton";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface VerticalNavigationProps {
  isOpen: boolean;
  closeNav: () => void;
}

function VerticalNavigation({ isOpen, closeNav }: VerticalNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(isOpen);
  return (
    <div
      onClick={(e: BaseSyntheticEvent) => {
        console.log(e);
        console.log(containerRef.current);
        if (e.target === containerRef.current) return;
        closeNav();
      }}
      className={` ${
        !isOpen ? "mdl:hidden" : "mdl:flex"
      } z-20  backdrop-blur-sm mdl:fixed mdl:z-[5000] mdl:h-screen mdl:w-screen`}
    >
      <SvgButton
        size={2}
        additionalClass="absolute top-4 right-4 hidden mdl:block animate-[fadeRight_0.6s] z-[5500] shadow-md"
        label="Close Mobile Navigation"
      >
        <XMarkIcon className="h-8 w-8 fill-white-normal" />
      </SvgButton>
      <div
        ref={containerRef}
        className={`flex h-full flex-col gap-16 bg-almond-tint-2 p-8 shadow-vertical-nav  xxxl:py-8 xxl:px-2 xl:px-6 mdl:absolute mdl:left-0  mdl:top-0 mdl:h-full mdl:animate-[vertiNavMove_0.4s] xsm:px-4 xsm:py-6`}
      >
        <Logo
          additionalClassCont="xl:justify-center"
          additionalClassLogo="xxl:w-14 xxl:h-14"
          additionalClassName="xxl:text-3xl xl:hidden"
        />
        <div className="flex grow flex-col items-center justify-between">
          <nav className="flex flex-col gap-4">
            <NavLink label="Homeboard" href="/app/homeboard">
              <HomeIcon className="stroke-gray-tint h-7 w-7" />
              <span>Homeboard</span>
            </NavLink>
            <NavLink label="Search Recipes" href="/app/search">
              <MagnifyingGlassIcon className="stroke-gray-tint h-7 w-7" />
              <span>Search Recipes</span>
            </NavLink>
            <NavLink label="Our Favourites" href="/app/favourites">
              <StarIcon className="stroke-gray-tint h-7 w-7" />
              <span>Our Favourites</span>
            </NavLink>
            <NavLink label="Random Recipe" href="/app/random">
              <ArrowPathIcon className="stroke-gray-tint h-7 w-7" />
              <span>Random Recipe</span>
            </NavLink>
          </nav>
          <FilledButton
            size="xl"
            additionalClass="xl:p-4 xl:rounded-full"
            destination="/"
          >
            <ArrowRightOnRectangleIcon className="h-7 w-7 xl:h-7 xl:w-7" />
            <span className="xl:hidden">Log out</span>
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavigation;
