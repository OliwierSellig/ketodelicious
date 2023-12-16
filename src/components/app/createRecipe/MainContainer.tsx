"use client";

import { useState } from "react";
import GeneralSlide from "./general/GeneralSlide";
import IngredientsSlide from "./ingredients/IngredientsSlide";
import PreparationSlide from "./preparation/PreparationSlide";
import SlideSkeleton from "./SlideSkeleton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";
import SvgButton from "@/components/global/SvgButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import AddTag from "./general/AddTag";
import { IngredientItem } from "@/utils/utilTypes";
import AddIngredient from "./ingredients/AddIngredient";
import AddToRecipeWindow from "./AddToRecipeWindow";
import AddPrepStep from "./preparation/AddPrepStep";

function MainContainer() {
  const [iterator, setIterator] = useState<number>(0);
  const [addTagWindow, setAddTagWindow] = useState<boolean>(false);
  const [addIngredientWindow, setAddIngredientWindow] =
    useState<boolean>(false);
  const [addPrepStepWindow, setAddPrepStepWindow] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([
    "green",
    "yellow",
    "blue",
    "sugar-free",
  ]);
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

  function removeTag(tag: string) {
    const filteredTags = tags.filter((t) => t !== tag);
    setTags(filteredTags);
  }

  function addTag(query: string) {
    setTags((prev) => [...prev, query]);
    setAddTagWindow(false);
  }

  return (
    <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 min-w-[1200px] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 animate-[fadeLeftModal_1s] rounded-2xl bg-almond-tint-2  xl:h-3/4 xl:w-[96%] xl:min-w-0">
      <div className="relative h-full w-full overflow-clip rounded-2xl">
        <SlideSkeleton index={0} iterator={iterator}>
          <GeneralSlide
            removeTag={removeTag}
            tags={tags}
            openAddTagWindow={() => setAddTagWindow(true)}
          />
        </SlideSkeleton>
        <SlideSkeleton index={1} iterator={iterator}>
          <IngredientsSlide
            ingredientsList={ingredients}
            openIngredientWindow={() => setAddIngredientWindow(true)}
          />
        </SlideSkeleton>
        <SlideSkeleton index={2} iterator={iterator}>
          <PreparationSlide
            stepsList={preparationSteps}
            openStepsAdd={() => setAddPrepStepWindow(true)}
          />
        </SlideSkeleton>
      </div>

      {addTagWindow && (
        <AddToRecipeWindow onClose={() => setAddTagWindow(false)}>
          <AddTag handleAdd={addTag} />
        </AddToRecipeWindow>
      )}

      {addIngredientWindow && (
        <AddToRecipeWindow onClose={() => setAddIngredientWindow(false)}>
          <AddIngredient handleAdd={() => {}} />
        </AddToRecipeWindow>
      )}

      {addPrepStepWindow && (
        <AddToRecipeWindow onClose={() => setAddPrepStepWindow(false)}>
          <AddPrepStep handleAdd={() => {}} />
        </AddToRecipeWindow>
      )}

      {iterator !== 0 && !addIngredientWindow && !addPrepStepWindow && (
        <SvgButton
          label="Go to the previous frame"
          additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          handleClick={() => setIterator((prev) => prev - 1)}
        >
          <ChevronUpIcon className="h-10 w-10 fill-white-normal" />
        </SvgButton>
      )}
      {!addTagWindow && !addIngredientWindow && !addPrepStepWindow ? (
        iterator !== 2 ? (
          <SvgButton
            label="Go to the next frame"
            handleClick={() => setIterator((prev) => prev + 1)}
            additionalClass="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <ChevronDownIcon className="h-10 w-10 fill-white-normal" />
          </SvgButton>
        ) : (
          <FilledButton
            size="xl"
            additionalClass="px-24 mdl:w-2/3 mdl:justify-center sm:px-0 xsm:w-3/4  absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <span className="sm:text-xl">Create Recipe</span>
            <CheckCircleIcon className="h-8 w-8 stroke-white-normal sm:h-7 sm:w-7" />
          </FilledButton>
        )
      ) : null}
    </div>
  );
}

export default MainContainer;
