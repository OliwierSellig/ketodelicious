import { fetchRecipes } from "@/lib/recipes";
import UserListContainer from "../UserListContainer";

async function CreatedList() {
  const recipes = await fetchRecipes({ limit: 20 });

  const recipeList = Array.isArray(recipes) ? recipes : [];
  return (
    <UserListContainer
      type="created"
      heading="Created Recipes"
      list={recipeList}
    />
  );
}

export default CreatedList;
