import RecipeView from "@/components/app/recipe/RecipeView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe",
};

function page({ params }: { params: { id: string } }) {
  return (
    <>
      <RecipeView recipeId={params.id} />
    </>
  );
}

export default page;
