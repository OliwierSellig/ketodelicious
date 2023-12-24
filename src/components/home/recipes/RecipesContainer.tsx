"use client";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import NavButton from "./NavButton";
import RecipeSpotlightCard from "./RecipeSpotlightCard";
import { RecipeItemProp } from "@/utils/utilTypes";

interface RecipeContainerProps {
  recipeList: RecipeItemProp[];
}

function RecipesContainer({ recipeList }: RecipeContainerProps) {
  const [iterator, setIterator] = useState<number>(
    recipeList.length % 2 === 0
      ? recipeList.length / 2
      : (recipeList.length + 1) / 2,
  );

  function canGoNext() {
    return iterator + 1 < recipeList.length;
  }

  function goNext() {
    if (canGoNext()) {
      setIterator((prev) => prev + 1);
    }
  }

  function canGoPrev() {
    return iterator > 0;
  }

  function goPrev() {
    if (canGoPrev()) {
      setIterator((prev) => prev - 1);
    }
  }

  return (
    <nav className="relative grid h-[400px] animate-[fadeBottom_1.2s] grid-cols-3 gap-6 overflow-clip pt-16 sm:h-[460px] xsm:h-[520px] xsm:overflow-y-visible [&>button:first-child]:top-1/2 xsm:[&>button:first-child]:top-full xsm:[&>button:first-child]:-translate-y-full xsm:[&>button:first-child]:translate-x-[150%] [&>button:last-child]:right-0 [&>button:last-child]:top-1/2 xsm:[&>button:last-child]:top-full xsm:[&>button:last-child]:-translate-x-[150%] xsm:[&>button:last-child]:-translate-y-full">
      <NavButton disabled={!canGoPrev()} handleClick={goPrev}>
        <ChevronLeftIcon className="h-10 w-10 fill-white-normal" />
      </NavButton>
      {recipeList.map((recipe, index) => (
        <RecipeSpotlightCard
          recipe={recipe}
          index={index}
          iterator={iterator}
          key={recipe.id}
        />
      ))}
      <NavButton disabled={!canGoNext()} handleClick={goNext}>
        <ChevronRightIcon className="h-10 w-10 fill-white-normal" />
      </NavButton>
    </nav>
  );
}

export default RecipesContainer;
