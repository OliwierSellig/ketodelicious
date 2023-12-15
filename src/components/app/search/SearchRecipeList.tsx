import RecipeCard from "../../global/RecipeCard";

function SearchRecipeList() {
  return (
    <ul className="mb-8 grid grid-cols-4 gap-x-4 gap-y-6 xxxl:grid-cols-3 lg:grid-cols-2 sm:w-full sm:grid-cols-1 ">
      {Array.from({ length: 8 }, (_, i) => (
        <li key={i}>
          <RecipeCard additionalClass="xxl:min-w-[280px] xl:min-w-[240px] sm:" />
        </li>
      ))}
    </ul>
  );
}

export default SearchRecipeList;
