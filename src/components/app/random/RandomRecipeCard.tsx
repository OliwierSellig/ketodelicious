"use client";

import Image from "next/image";
import dish from "../../../../public/images/dish-2.jpg";
import {
  ClockIcon,
  FireIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";
import IngredientsList from "./IngredientsList";
import FilledButton from "@/components/global/FilledButton";

function RandomRecipeCard() {
  return (
    <div className="mb-8 grid aspect-video w-3/4 grid-cols-5 overflow-hidden rounded-2xl shadow-recipe-input">
      <div className="after:random-recipe-bg relative z-10 col-span-3 h-full after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full  after:content-[''] ">
        <Image src={dish} alt="" className="h-full  object-cover " />
      </div>
      <div className="shadow-gray-left col-span-2 flex h-full flex-col items-center justify-between bg-white-tint px-4 py-12">
        <div>
          <h2 className="mb-5 text-center font-ubuntu text-4xl font-medium">
            Salmon bowl with zuchinni and tomatoes
          </h2>
          <div className="mb-6 flex items-center justify-center gap-8 xsm:gap-4">
            <div className="flex flex-col items-center text-sm font-medium">
              <ClockIcon className="mb-1 h-8 w-8 stroke-gray-tint-1" />
              <p className="text-lg font-semibold">25 min</p>
            </div>
            <div className="h-20 w-[2px] rounded-[120px] bg-[#999]" />
            <div className="flex flex-col items-center text-sm font-medium">
              <FireIcon className="mb-1 h-8 w-8 stroke-gray-tint-1" />
              <p className="text-lg font-semibold">470 kcal</p>
            </div>
          </div>
          <IngredientsList />
        </div>
        <FilledButton size="xl">
          <ArrowUpOnSquareIcon className="h-7 w-7 stroke-white-normal" />
          <span>Visit Recipe</span>
        </FilledButton>
      </div>
    </div>
  );
}

export default RandomRecipeCard;
