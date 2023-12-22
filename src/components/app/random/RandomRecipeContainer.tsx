"use client";

import { useEffect, useState } from "react";
import { fetchRandomRecipe } from "@/lib/recipes";
import { RecipeCardProp } from "@/utils/utilTypes";
import LoadingWindow from "@/components/global/LoadingWindow";
import RandomRecipeCard from "./RandomRecipeCard";
import RandomRecipeRoll from "./RandomRecipeRoll";

function RandomRecipeContainer() {
  const [randomRecipe, setRandomRecipe] = useState<RecipeCardProp | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

  async function fetchRandom() {
    setIsLoadingImage(false);
    setIsLoading(true);
    const data = await fetchRandomRecipe();
    setRandomRecipe(data);
    setIsLoadingImage(true);
    setIsLoading(false);
  }

  useEffect(() => {
    if (randomRecipe === null) {
      fetchRandom();
    }
  }, [randomRecipe]);

  if (isLoading) return <LoadingWindow additionalClass="pt-20" />;
  if (!isLoading && randomRecipe)
    return (
      <>
        <RandomRecipeCard
          recipe={randomRecipe}
          loadImage={() => setIsLoadingImage(false)}
          loadingImage={isLoadingImage}
        />
        <RandomRecipeRoll handleClick={fetchRandom} />
      </>
    );
}

export default RandomRecipeContainer;
