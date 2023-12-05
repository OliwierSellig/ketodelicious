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
            <HomeIcon className="h-7 w-7 stroke-gray-tint" />
            <span>Homeboard</span>
          </NavLink>
          <NavLink href="/app/search">
            <MagnifyingGlassIcon className="h-7 w-7 stroke-gray-tint" />
            <span>Search Recipes</span>
          </NavLink>
          <NavLink href="/favourites">
            <StarIcon className="h-7 w-7 stroke-gray-tint" />
            <span>Our Favourites</span>
          </NavLink>
          <NavLink href="/random">
            <ArrowPathIcon className="h-7 w-7 stroke-gray-tint" />
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
