"use client";

import RecipeCard from "./RecipeCard";
import SectionHeader from "../SectionHeader";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { recipeList } from "@/utils/dummyData";
import { useState } from "react";
import NavButton from "./NavButton";

function Recipes() {
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
    <section
      id="recipes"
      className="bg-almond-normal pb-28 pt-14 shadow-cta-top"
    >
      <div className="fixed-container">
        <SectionHeader subtitle="Recipes">
          So, what are we making today?
        </SectionHeader>
        <nav className="relative grid h-[500px] animate-[fadeBottom_1.2s] grid-cols-3 gap-6 overflow-hidden pt-16 [&>button:first-child]:top-1/2 xsm:[&>button:first-child]:top-full xsm:[&>button:first-child]:-translate-y-full xsm:[&>button:first-child]:translate-x-[150%] [&>button:last-child]:right-0 [&>button:last-child]:top-1/2 xsm:[&>button:last-child]:top-full xsm:[&>button:last-child]:-translate-x-[150%] xsm:[&>button:last-child]:-translate-y-full">
          <NavButton disabled={!canGoPrev()} handleClick={goPrev}>
            <ChevronLeftIcon className="h-10 w-10 fill-white-normal" />
          </NavButton>
          {recipeList.map((recipe, index) => (
            <RecipeCard
              iterator={iterator}
              key={index}
              image={recipe.image}
              cookingTime={recipe.cookingTime}
              calories={recipe.calories}
              index={index}
            >
              {recipe.name}
            </RecipeCard>
          ))}
          <NavButton disabled={!canGoNext()} handleClick={goNext}>
            <ChevronRightIcon className="h-10 w-10 fill-white-normal" />
          </NavButton>
        </nav>
      </div>
    </section>
  );
}

export default Recipes;
