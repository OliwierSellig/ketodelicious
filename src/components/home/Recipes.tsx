"use client";

import RecipeCard from "./RecipeCard";
import SectionHeader from "./SectionHeader";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
// import dish1 from "../../../public/images/dish-1.jpg";
// import dish2 from "../../../public/images/dish-2.jpg";
// import dish3 from "../../../public/images/dish-3.jpg";
import { recipeList } from "@/utils/dummyData";
import { useState } from "react";

function Recipes() {
  const [iterator, setIterator] = useState<number>(
    recipeList.length % 2 === 0
      ? recipeList.length / 2
      : (recipeList.length + 1) / 2
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

  console.log(iterator);

  return (
    <section
      id="recipes"
      className="pt-14 pb-28 bg-almond-normal shadow-cta-top"
    >
      <div className="fixed-container">
        <SectionHeader subtitle="Recipes">
          So, what are we making today?
        </SectionHeader>
        <nav className="relative grid grid-cols-3 gap-6 pt-16 h-[500px] overflow-hidden">
          <button
            aria-label="See Previous"
            onClick={goPrev}
            className="absolute top-1/2 left-0 z-20 bg-jade-normal p-1 rounded-full shadow-md hover:bg-jade-shade transition-all duration-100 ease-linear delay-0 focus:bg-jade-shade"
          >
            <ChevronLeftIcon className="w-10 h-10 fill-white-normal" />
          </button>
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
          <button
            aria-label="See Next"
            onClick={goNext}
            className="absolute top-1/2 right-0 z-20 p-1 bg-jade-normal rounded-full shadow-md hover:bg-jade-shade transition-all duration-100 ease-linear delay-0 focus:bg-jade-shade"
          >
            <ChevronRightIcon className="w-10 h-10 fill-white-normal" />
          </button>
        </nav>
      </div>
    </section>
  );
}

export default Recipes;
