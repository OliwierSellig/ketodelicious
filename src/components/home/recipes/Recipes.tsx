import { fetchRecipes } from "@/lib/recipes";
import SectionHeader from "../SectionHeader";
import RecipesContainer from "./RecipesContainer";

async function Recipes() {
  const recipes = await fetchRecipes({ limit: 20 });

  return (
    <section
      id="recipes"
      className=" bg-almond-normal pb-28 pt-14 shadow-cta-top"
    >
      <div className="fixed-container">
        <SectionHeader subtitle="Recipes">
          So, what are we making today?
        </SectionHeader>
        {!Array.isArray(recipes) && (
          <p className="w-full px-8 py-24 text-center text-3xl font-medium text-gray-tint-2">
            Sorry, there has been an error fethching your data...
          </p>
        )}
        {Array.isArray(recipes) && <RecipesContainer recipeList={recipes} />}
      </div>
    </section>
  );
}

export default Recipes;
