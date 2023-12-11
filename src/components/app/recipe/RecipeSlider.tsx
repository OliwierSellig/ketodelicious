import FilledButton from "@/components/global/FilledButton";
import MainSlide from "./MainSlide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import IngredientsSlide from "./IngredientsSlide";
import {
  nutriList,
  ingredientsList,
  preparingSteps,
  tagList,
} from "@/utils/dummyData";
import PreparingSlide from "./PreparingSlide";
import { useState } from "react";
import RecipeSlide from "./RecipeSlide";

function RecipeSlider() {
  const [iterator, setIterator] = useState<number>(0);

  return (
    <div className="relative h-[450px]">
      <FilledButton
        additionalClass="absolute z-40 top-[-15%] left-[-2%]"
        size="lg"
        handleClick={() => {
          if (iterator === 1) setIterator(-1);
          else setIterator((prev) => prev + 1);
        }}
      >
        <ChevronLeftIcon className="h-8 w-8" />
        <span>Ingredients</span>
      </FilledButton>
      <FilledButton
        handleClick={() => {
          if (iterator === -1) setIterator(1);
          else setIterator((prev) => prev - 1);
        }}
        size="lg"
        additionalClass="absolute z-40 top-0 right-0 top-[-15%] right-[-2%]"
      >
        <span>Prepararing</span>
        <ChevronRightIcon className="h-8 w-8" />
      </FilledButton>
      <div className="relative h-full w-full overflow-hidden">
        <RecipeSlide index={-1} iterator={iterator}>
          <IngredientsSlide
            ingredientsList={ingredientsList}
            nutritionList={nutriList}
          />
        </RecipeSlide>
        <RecipeSlide index={0} iterator={iterator}>
          <MainSlide
            desc="Instead of making pancakes or waffles, make this easy Keto breakfast
            recipe that takes way less time to make. This blueberry sponge cake
            in a mug is soft and fluffy like a pancake but sweet like a cake.
            Don’t worry, you won’t be adding many carbs to your breakfast, as
            all sweetening products are replaced with Keto-friendly ingredients.
            You can assemble the recipe in under 5 minutes, so this is also a
            great Keto breakfast recipe for anyone who always ends up in a rush
            in the mornings... Read more"
            tagList={tagList}
            prepareTime={25}
            cookingTime={15}
          />
        </RecipeSlide>
        <RecipeSlide index={1} iterator={iterator}>
          <PreparingSlide prepList={preparingSteps} />
        </RecipeSlide>
      </div>
    </div>
  );
}

export default RecipeSlider;
