import { fetchRecipes } from "@/lib/recipes";

import UserListContainer from "../UserListContainer";

async function BookmarkedList() {
  const recipes = await fetchRecipes({ limit: 20 });

  const recipeList = Array.isArray(recipes) ? recipes : [];

  return (
    <UserListContainer
      list={recipeList}
      type="bookmarked"
      heading="Bookmarked Recipes"
    />
  );
}

export default BookmarkedList;
