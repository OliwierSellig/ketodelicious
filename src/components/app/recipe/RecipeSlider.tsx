"use client";

import FilledButton from "@/components/global/FilledButton";
import MainSlide from "./MainSlide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import IngredientsSlide from "./IngredientsSlide";
import PreparingSlide from "./PreparingSlide";
import { useState } from "react";
import RecipeSlide from "./RecipeSlide";
import { RecipeItemProp } from "@/utils/utilTypes";

interface RecipeSliderProps {
  recipe: RecipeItemProp;
}

function RecipeSlider({ recipe }: RecipeSliderProps) {
  const [current, setCurrent] = useState<number>(1);

  function goPrev() {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent((prev) => prev - 1);
    }
  }

  function goNext() {
    if (current === 2) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  }

  return (
    <div className="relative h-[450px] xl:h-[500px]">
      <FilledButton
        label="Go left"
        additionalClass="absolute z-40 top-[-15%] left-[-2%] w-52 justify-center md:left-[5%] md:p-2 md:w-auto md:rounded-full md:-top-[12%]"
        size="lg"
        handleClick={goPrev}
      >
        <ChevronLeftIcon className="h-8 w-8" />
        <span className="md:hidden">
          {current === 0
            ? "Preparation"
            : current === 1
              ? "Ingredients"
              : " Overview"}
        </span>
      </FilledButton>
      <FilledButton
        label="Go right"
        size="lg"
        additionalClass="absolute z-40 top-0 right-0 top-[-15%] right-[-2%] w-52 justify-center md:right-[5%] md:p-2 md:w-auto md:rounded-full  md:-top-[12%]"
        handleClick={goNext}
      >
        <span className="md:hidden">
          {current === 0
            ? "Overview"
            : current === 1
              ? "Preparation"
              : " Ingredients"}
        </span>
        <ChevronRightIcon className="h-8 w-8" />
      </FilledButton>
      <div className="relative h-full w-full overflow-hidden ">
        <RecipeSlide index={0} current={current}>
          <IngredientsSlide
            ingredientsList={recipe.ingredients}
            nutritionList={recipe.nutrients}
          />
        </RecipeSlide>
        <RecipeSlide index={1} current={current}>
          <MainSlide
            desc={recipe.description}
            tagList={recipe.tags}
            prepareTime={recipe.cookTime}
            cookingTime={recipe.prepareTime}
            recipeName={recipe.name}
          />
        </RecipeSlide>
        <RecipeSlide index={2} current={current}>
          <PreparingSlide prepList={recipe.steps} />
        </RecipeSlide>
      </div>
    </div>
  );
}

export default RecipeSlider;
