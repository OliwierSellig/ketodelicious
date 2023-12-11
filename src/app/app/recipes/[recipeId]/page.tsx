import FeaturatedRecipes from "@/components/app/recipe/FeaturatedRecipes";
import RecipeView from "@/components/app/recipe/RecipeView";

function page() {
  return (
    <>
      <RecipeView />
      <FeaturatedRecipes />
    </>
  );
}

export default page;
