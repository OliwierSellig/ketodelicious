import RecipeCard from "../RecipeCard";

function SearchRecipeList() {
  return (
    <ul className="grid grid-cols-4 gap-x-4 gap-y-6">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </ul>
  );
}

export default SearchRecipeList;
