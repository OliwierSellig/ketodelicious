"use client";

import { useState } from "react";
import GeneralSlide from "./general/GeneralSlide";
import IngredientsSlide from "./ingredients/IngredientsSlide";
import PreparationSlide from "./preparation/PreparationSlide";
import SlideSkeleton from "./SlideSkeleton";
import { IngredientItem } from "@/utils/utilTypes";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import SlideNav from "./SlideNav";
import AddWindows from "./AddWindows";

function MainContainer() {
  const { state: recipe, modifyWindow } = useCreateRecipe();

  const [ingredients, setIngredients] = useState<IngredientItem[]>([
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
    { name: "Salted Butter", textAmount: "1 tablespoon", gramAmount: "12g" },
  ]);
  const [preparationSteps, setPreparationSteps] = useState<string[]>([
    "Combine the butter and cream cheese together in a heat-safe container. Microwave the ingredients on high heat for 20 seconds until they’re melted. Stir the butter and cream cheese together into one mixture.",
    "Combine the butter and cream cheese mixture with coconut flour, brown sugar substitute, and vanilla extract in the heat-safe dish. You may also wish to add a small pinch of salt. If necessary, you can mix the ingredients in a separate mixing bowl before adding it to your heat-safe dish or mug.",
    "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
    "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
    "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
    "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
    "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
  ]);

  return (
    <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 min-w-[1200px] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 animate-[fadeLeftModal_1s] rounded-2xl bg-almond-tint-2  xl:h-3/4 xl:w-[96%] xl:min-w-0">
      <div className="relative h-full w-full overflow-clip rounded-2xl">
        <SlideSkeleton index={0} iterator={recipe.iterator}>
          <GeneralSlide />
        </SlideSkeleton>
        <SlideSkeleton index={1} iterator={recipe.iterator}>
          <IngredientsSlide
            ingredientsList={ingredients}
            openIngredientWindow={() => modifyWindow("open", "ing")}
          />
        </SlideSkeleton>
        <SlideSkeleton index={2} iterator={recipe.iterator}>
          <PreparationSlide
            stepsList={preparationSteps}
            openStepsAdd={() => modifyWindow("open", "step")}
          />
        </SlideSkeleton>
      </div>
      <AddWindows />
      <SlideNav />
    </div>
  );
}

export default MainContainer;
