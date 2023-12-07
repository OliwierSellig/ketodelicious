import RecipeCard from "../RecipeCard";

function SearchRecipeList() {
  return (
    <ul className="mb-8 grid grid-cols-4 gap-x-4 gap-y-6">
      {Array.from({ length: 8 }, (_, i) => (
        <li key={i}>
          <RecipeCard />
        </li>
      ))}
    </ul>
  );
}

export default SearchRecipeList;
