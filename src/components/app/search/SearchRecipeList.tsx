import RecipeCard from "../../global/RecipeCard";

function SearchRecipeList() {
  return (
    <ul className="xxxl:grid-cols-3 mb-8 grid grid-cols-4 gap-x-4 gap-y-6">
      {Array.from({ length: 8 }, (_, i) => (
        <li key={i}>
          <RecipeCard additionalClass="xxl:min-w-[280px]" />
        </li>
      ))}
    </ul>
  );
}

export default SearchRecipeList;
