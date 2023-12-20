"use client";

import Image from "next/image";
import dish from "../../../../public/images/dish-2.jpg";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import IngredientsList from "./IngredientsList";
import FilledButton from "@/components/global/FilledButton";
import RecipeCardDetails from "@/components/global/RecipeCardDetails";
import RandomRecipeRoll from "./RandomRecipeRoll";
import { useEffect, useState } from "react";
import { fetchRandomRecipe } from "@/lib/recipes";
import { RecipeCardProp } from "@/utils/utilTypes";
import LoadingWindow from "@/components/global/LoadingWindow";

function RandomRecipeCard() {
  const [randomRecipe, setRandomRecipe] = useState<RecipeCardProp | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchRandom() {
    setIsLoading(true);
    const data = await fetchRandomRecipe();
    setRandomRecipe(data);
    setIsLoading(false);
    console.log("chuj");
  }

  useEffect(() => {
    if (randomRecipe == null) fetchRandom();
  }, [randomRecipe]);

  console.log(randomRecipe);

  return (
    <>
      {!isLoading && randomRecipe ? (
        <>
          <div className="mb-8 grid w-full  max-w-[1200px] animate-[scaleOpacity_0.8s] grid-cols-5 overflow-hidden rounded-2xl shadow-recipe-input xxl:flex xxl:flex-col">
            <div className="after:random-recipe-bg relative z-10 col-span-3 h-full after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full after:content-['']  xxl:h-[500px] mdl:aspect-video mdl:h-auto ">
              <img
                src={randomRecipe?.image}
                alt={randomRecipe?.name}
                className="absolute left-0 top-0 h-full w-full  object-cover "
              />
            </div>
            <div className="col-span-2 flex h-full flex-col items-center justify-between bg-white-tint px-8 py-12 shadow-gray-left xsm:px-4">
              <div>
                <h2 className="mb-5 text-center font-ubuntu text-4xl font-medium lg:text-3xl">
                  {randomRecipe.name}
                </h2>
                <RecipeCardDetails
                  calories={randomRecipe.nutrients?.caloriesKCal}
                  prepareTime={randomRecipe.prepareTime}
                />
                <IngredientsList list={randomRecipe.ingredients.slice(0, 5)} />
              </div>
              <FilledButton
                destination={`/app/recipes/${randomRecipe.id}`}
                size="xl"
                additionalClass="xxsm:w-full xxsm:justify-center xxsm:px-2"
              >
                <ArrowUpOnSquareIcon className="h-7 w-7 stroke-white-normal" />
                <span className="lg:text-xl">Visit Recipe</span>
              </FilledButton>
            </div>
          </div>
          <RandomRecipeRoll handleClick={fetchRandom} />
        </>
      ) : (
        <LoadingWindow additionalClass="min-h-[320px]" />
      )}
    </>
  );
}

export default RandomRecipeCard;
