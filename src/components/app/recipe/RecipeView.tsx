import FilledButton from "@/components/global/FilledButton";
import RecipeImage from "./RecipeImage";
import RecipeSlider from "./RecipeSlider";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { fetchRecipeById } from "@/lib/recipes";
import { RecipeItemProp } from "@/utils/utilTypes";
import FeaturatedRecipes from "./FeaturatedRecipes";
import { getRandomInt } from "@/utils/utilFunctions";
import RecipeNotFound from "./RecipeNotFound";

interface RecipeViewProps {
  recipeId: string;
}

async function RecipeView({ recipeId }: RecipeViewProps) {
  const recipe: RecipeItemProp = await fetchRecipeById(recipeId);

  if (!recipe?.id) return <RecipeNotFound />;

  return (
    <>
      <div className="relative mb-28 flex w-4/5 min-w-[1200px] max-w-[1400px] animate-[scaleOpacity_1s] flex-col self-center rounded-2xl bg-almond-tint-2 shadow-recipe-input xxxl:min-w-[1000px] xxl:w-11/12 xxl:min-w-[800px] xl:min-w-[700px] md:absolute  md:left-0 md:top-0 md:h-full md:w-full md:min-w-0 md:animate-none [&>button:focus]:scale-100 [&>button:hover]:scale-100 [&>button]:justify-center ">
        <RecipeImage image={recipe.image} recipeName={recipe.name} />
        <RecipeSlider recipe={recipe} />
        <FilledButton
          size="xl"
          additionalClass="rounded-t-none md:rounded-b-none xsm:px-0 mdl:mt-auto"
        >
          <span className="py-1 xsm:text-lg">Save to Collection</span>
          <BookmarkIcon className="h-7 w-7" />
        </FilledButton>
      </div>
      <FeaturatedRecipes tag={recipe.tags[getRandomInt(recipe.tags.length)]} />
    </>
  );
}

export default RecipeView;
