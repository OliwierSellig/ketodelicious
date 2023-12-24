"use client";

import { useEffect, useState } from "react";
import { fetchRandomRecipe } from "@/lib/recipes";
import LoadingWindow from "@/components/global/LoadingWindow";
import RandomRecipeCard from "./RandomRecipeCard";
import RandomRecipeRoll from "./RandomRecipeRoll";
import { RecipeItemProp } from "@/utils/utilTypes";

function RandomRecipeContainer() {
  const [randomRecipe, setRandomRecipe] = useState<RecipeItemProp | null>(null);
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
