import RecipeCard from "../../global/RecipeCard";
import PaginationNavigation from "./PaginationNavigation";

function SearchRecipeList() {
  return (
    <>
      <ul className="mb-8 grid animate-[scaleOpacity_0.8s] grid-cols-4 gap-x-4 gap-y-6 xxxl:grid-cols-3 lg:grid-cols-2 sm:w-full sm:animate-[fadeRight_0.8s] sm:grid-cols-1 ">
        {Array.from({ length: 8 }, (_, i) => (
          <li key={i}>
            <RecipeCard additionalClass="xxl:min-w-[280px] xl:min-w-[240px] sm:" />
          </li>
        ))}
      </ul>
      <PaginationNavigation
        additionalClass="self-center"
        currentSite={1}
        maxSite={7}
        nextUrl="/"
        prevUrl="/"
        canGoNext={false}
        canGoPrev={true}
      />
    </>
  );
}

export default SearchRecipeList;
