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
import RecipeCardDetails from "@/components/global/RecipeCardDetails";

function RandomRecipeCard() {
  return (
    <div className="mb-8 grid aspect-video w-3/4 grid-cols-5 overflow-hidden rounded-2xl shadow-recipe-input">
      <div className="after:random-recipe-bg relative z-10 col-span-3 h-full after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full  after:content-[''] ">
        <Image src={dish} alt="" className="h-full  object-cover " />
      </div>
      <div className="col-span-2 flex h-full flex-col items-center justify-between bg-white-tint px-4 py-12 shadow-gray-left">
        <div>
          <h2 className="mb-5 text-center font-ubuntu text-4xl font-medium">
            Salmon bowl with zuchinni and tomatoes
          </h2>
          <RecipeCardDetails calories={470} cookingTime={25} />
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
