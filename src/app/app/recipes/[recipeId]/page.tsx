import FeaturatedRecipes from "@/components/app/recipe/FeaturatedRecipes";
import RecipeView from "@/components/app/recipe/RecipeView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe",
};

function page() {
  return (
    <>
      <RecipeView />
      <FeaturatedRecipes />
    </>
  );
}

export default page;
