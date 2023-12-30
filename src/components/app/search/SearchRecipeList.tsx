"use client";

import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useSearch } from "@/context/SearchContext";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import RecipeCard from "../../global/RecipeCard";
import PaginationNavigation from "../PaginationNavigation";

const PAGE_COUNT = 8;

function SearchRecipeList() {
  const { state: search, modifyIterator } = useSearch();

  if (search.isLoading)
    return (
      <div className="flex h-full w-full flex-grow items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  if (!search.isLoading && search.recipeList.length < 1) {
    return (
      <div className="flex h-full w-full flex-grow items-center justify-center ">
        <p className="flex items-center gap-4 text-3xl font-medium text-gray-tint-2 md:flex-col md:text-center md:text-2xl">
          <span>We found no recipes matching your query...</span>
          <FaceFrownIcon className="h-14 w-14 stroke-gray-tint-2 " />
        </p>
      </div>
    );
  }
  return (
    <>
      <nav className="mb-8 grid w-full max-w-[1800px]  animate-[scaleOpacity_0.8s] grid-cols-4 items-stretch gap-x-4 gap-y-6 xxxl:grid-cols-3 lg:grid-cols-2 sm:w-full sm:animate-[fadeRight_0.8s] sm:grid-cols-1 ">
        {search.recipeList
          .slice(
            0 + search.searchIterator * PAGE_COUNT,
            PAGE_COUNT + search.searchIterator * PAGE_COUNT,
          )
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              sizes={{ defaultSize: "30vw" }}
              name={recipe.name}
              image={recipe.image}
              calories={recipe.nutrients.caloriesKCal}
              prepareTime={recipe.prepareTime}
              id={recipe.id}
              additionalClass="xxl:min-w-[280px] xl:min-w-[240px] sm:"
            />
          ))}
      </nav>
      <PaginationNavigation
        handleNext={() => modifyIterator("increment")}
        handlePrev={() => modifyIterator("decrement")}
        additionalClass="self-center"
        currentSite={search.searchIterator + 1}
        maxSite={Math.ceil(search.recipeList.length / PAGE_COUNT)}
        canGoNext={
          search.searchIterator + 1 <
          Math.ceil(search.recipeList.length / PAGE_COUNT)
        }
        canGoPrev={search.searchIterator > 0}
      />
    </>
  );
}

export default SearchRecipeList;
