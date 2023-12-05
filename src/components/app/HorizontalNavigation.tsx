"use client";

import Image from "next/image";
import Link from "next/link";
import FilledButton from "../global/FilledButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import myPhoto from "../../../public/images/photo-me.png";

function HorizontalNavigation() {
  return (
    <nav className="bg-almond-tint-2 shadow-horizontal-nav z-10 flex items-center justify-end gap-10 px-8 py-4">
      <Link
        href="/"
        className="flex items-center gap-2 rounded-2xl px-6 py-2 transition-all duration-150 ease-linear hover:bg-jade-shade-2 focus:bg-jade-shade-2 [&:focus>p]:text-white [&:hover>p]:text-white"
      >
        <Image
          src={myPhoto}
          className="h-8 w-8 rounded-full"
          alt="User Photo"
        />
        <p className="text-xl font-medium transition-all duration-150 ease-linear">
          Oliwier Sellig
        </p>
      </Link>
      <FilledButton>
        <PlusIcon className="h-7 w-7" />
        <span>Create Recipe</span>
      </FilledButton>
    </nav>
  );
}

export default HorizontalNavigation;
