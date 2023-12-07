"use client";

import Logo from "../../home/Logo";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  StarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import FilledButton from "../../global/FilledButton";
import NavLink from "./NavLink";

function VerticalNavigation() {
  return (
    <div className="z-20 flex flex-col gap-16 bg-almond-tint-2 p-8 shadow-vertical-nav">
      <Logo />
      <div className="flex grow flex-col items-center justify-between">
        <nav className="flex flex-col gap-4">
          <NavLink href="/app/homeboard">
            <HomeIcon className="stroke-gray-tint h-7 w-7" />
            <span>Homeboard</span>
          </NavLink>
          <NavLink href="/app/search">
            <MagnifyingGlassIcon className="stroke-gray-tint h-7 w-7" />
            <span>Search Recipes</span>
          </NavLink>
          <NavLink href="/app/favourites">
            <StarIcon className="stroke-gray-tint h-7 w-7" />
            <span>Our Favourites</span>
          </NavLink>
          <NavLink href="/app/random">
            <ArrowPathIcon className="stroke-gray-tint h-7 w-7" />
            <span>Random Recipe</span>
          </NavLink>
        </nav>
        <FilledButton size="lg">
          <ArrowRightOnRectangleIcon className="h-7 w-7" />
          <span>Log out</span>
        </FilledButton>
      </div>
    </div>
  );
}

export default VerticalNavigation;
