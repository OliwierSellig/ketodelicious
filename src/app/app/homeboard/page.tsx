"use client";

import FilledButton from "@/components/global/FilledButton";
import homeImage from "../../../../public/images/homeboard.png";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  StarIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import myPhoto from "../../../../public/images/photo-me.png";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="z-30 flex flex-col gap-14 pb-20">
        <header className="flex flex-col items-center">
          <h1 className="mb-2 font-ubuntu text-7xl font-medium">
            Welcome back <span className="text-jade-normal">Oliwier</span>
          </h1>
          <p className="text-xl font-medium">What&apos;s bringing you here?</p>
        </header>
        <nav className="grid grid-cols-2 gap-8">
          <FilledButton size="xl">
            <MagnifyingGlassIcon className="h-7 w-7" />
            <span className="text-2xl">Search Recipe</span>
          </FilledButton>
          <FilledButton size="xl">
            <ArrowPathIcon className="h-7 w-7" />
            <span className="text-2xl">Our Favourites</span>
          </FilledButton>
          <FilledButton size="xl">
            <StarIcon className="h-7 w-7" />
            <span className="text-2xl">Random Recipe</span>
          </FilledButton>
          <FilledButton size="xl">
            <PlusIcon className="h-7 w-7" />
            <span className="text-2xl">Create Recipe</span>
          </FilledButton>
        </nav>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl font-medium">Or, visit your profile:</p>
          <Link
            href="/"
            className="flex items-center gap-4 rounded-2xl bg-white-tint px-10 py-2 shadow-md transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-shade-2 focus:scale-105 focus:bg-jade-shade-2 [&:focus>p]:text-white-normal [&:hover>p]:text-white-normal"
          >
            <Image
              className="h-16 w-16 rounded-full"
              src={myPhoto}
              alt="User Photo"
            />
            <p className="text-2xl font-medium transition-all duration-150 ease-linear">
              Oliwier Sellig
            </p>
          </Link>
        </div>
      </div>
      <Image
        src={homeImage}
        alt=""
        className="absolute bottom-0 left-0 aspect-square w-[50%] max-w-[800px]"
      />
    </>
  );
}

export default page;
