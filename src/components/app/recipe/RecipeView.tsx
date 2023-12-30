"use client";

import { useEffect, useState } from "react";
import { fetchRecipeById } from "@/lib/recipes";
import { useUser } from "@/context/UserContext";
import { getRandomInt } from "@/utils/utilFunctions";
import { RecipeItemProp, UserRecipe } from "@/utils/utilTypes";
import LoadingWindow from "@/components/global/LoadingWindow";
import FeaturatedRecipes from "./FeaturatedRecipes";
import RecipeNotFound from "./RecipeNotFound";
import RecipeImage from "./RecipeImage";
import RecipeSlider from "./RecipeSlider";
import ToggleRecipeButton from "./ToggleRecipeButton";

interface RecipeViewProps {
  recipeId: string;
}

function RecipeView({ recipeId }: RecipeViewProps) {
  const { getCreatedById } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<RecipeItemProp | UserRecipe | null>(
    null,
  );
  const [randomInt, setRandomInt] = useState<number>(0);
  const [recipeSet, setRecipeSet] = useState<boolean>(false);

  useEffect(() => {
    if (recipe && !recipeSet) {
      setRandomInt(getRandomInt(recipe.tags.length));
      setRecipeSet(true);
    }
  }, [recipe, recipeSet]);

  useEffect(() => {
    async function fetchRecipe() {
      const data: RecipeItemProp = await fetchRecipeById(recipeId);
      if (data?.id) setRecipe(data);
      else {
        const created = getCreatedById(recipeId);
        if (created?.id) setRecipe(created);
      }
      setIsLoading(false);
    }

    fetchRecipe();
  }, [getCreatedById, recipeId]);

  if (isLoading) return <LoadingWindow name="Recipe" />;

  if (recipe === null && !isLoading) return <RecipeNotFound />;

  if (recipe !== null)
    return (
      <>
        <div className="relative mb-28 flex w-4/5 min-w-[1200px] max-w-[1400px] animate-[scaleOpacity_1s] flex-col self-center rounded-2xl bg-almond-tint-2 shadow-recipe-input xxxl:min-w-[1000px] xxl:w-11/12 xxl:min-w-[800px] xl:min-w-[700px] md:absolute  md:left-0 md:top-0 md:h-full md:w-full md:min-w-0 md:animate-none [&>button:focus]:scale-100 [&>button:hover]:scale-100 [&>button]:justify-center ">
          <RecipeImage
            recipe={recipe}
            isCreated={Boolean(getCreatedById(recipeId))}
          />
          <RecipeSlider recipe={recipe} />
          <ToggleRecipeButton
            recipe={recipe}
            isCreated={Boolean(getCreatedById(recipeId))}
          />
        </div>
        <FeaturatedRecipes tag={recipe.tags[randomInt]} />
      </>
    );
}

export default RecipeView;
