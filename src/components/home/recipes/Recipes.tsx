import { fetchRecipes } from "@/lib/recipes";
import SectionHeader from "../SectionHeader";
import RecipesContainer from "./RecipesContainer";

async function Recipes() {
  const recipes = await fetchRecipes({});

  return (
    <section
      id="recipes"
      className="bg-almond-normal pb-28 pt-14 shadow-cta-top"
    >
      <div className="fixed-container">
        <SectionHeader subtitle="Recipes">
          So, what are we making today?
        </SectionHeader>
        <RecipesContainer recipeList={recipes} />
      </div>
    </section>
  );
}

export default Recipes;
