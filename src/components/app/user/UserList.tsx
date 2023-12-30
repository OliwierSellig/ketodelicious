"use client";

import { Dispatch, SetStateAction } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { RecipeItemProp, UserRecipe } from "@/utils/utilTypes";
import RecipeCard from "@/components/global/RecipeCard";
import PaginationNavigation from "../PaginationNavigation";
import ActionButton from "./ActionButton";

interface UserListProps {
  list: RecipeItemProp[] | UserRecipe[];
  iterator: number;
  setIterator: Dispatch<SetStateAction<number>>;
  query: string;
  type: "created" | "bookmarked";
}
const PAGE_COUNT = 8;

function UserList({ list, iterator, setIterator, query, type }: UserListProps) {
  const filteredList = list.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (filteredList?.length < 1)
    return (
      <div className="flex flex-grow animate-[scaleOpacity_0.8s] flex-col items-center justify-center gap-8 p-14">
        <p className="flex items-center gap-2 text-2xl font-medium text-gray-tint-2">
          It seems like you have not added any here recipes yet, try adding
          some!
        </p>
        <ActionButton type={type} />
      </div>
    );

  if (filteredList?.length < 1)
    return (
      <div className="flex flex-grow animate-[scaleOpacity_0.8s] items-center justify-center p-14">
        <p className="flex items-center gap-2">
          <EyeIcon className="h-10 w-10 stroke-gray-tint-2" />
          <span className="text-2xl font-medium text-gray-tint-2">
            We couldn&apos;t find any recipes mathching your query, sorry
          </span>
        </p>
      </div>
    );

  return (
    <>
      <nav className="mb-16 grid animate-[scaleOpacity_0.8s] grid-cols-4  gap-6 xxxl:grid-cols-3 xl:grid-cols-2 lg:gap-x-4 lg:gap-y-6 sm:grid-cols-1">
        {filteredList
          .slice(PAGE_COUNT * iterator, PAGE_COUNT + PAGE_COUNT * iterator)
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              prepareTime={recipe.prepareTime}
              calories={recipe.nutrients.caloriesKCal}
              id={recipe.id}
              sizes={{ defaultSize: "30vw" }}
              additionalClass="min-w-[280px]"
            />
          ))}
      </nav>
      <PaginationNavigation
        currentSite={iterator + 1}
        maxSite={Math.ceil(filteredList.length / PAGE_COUNT)}
        canGoPrev={iterator !== 0}
        canGoNext={iterator + 1 < Math.ceil(filteredList.length / PAGE_COUNT)}
        handleNext={() => setIterator((prev) => prev + 1)}
        handlePrev={() => setIterator((prev) => prev - 1)}
      />
    </>
  );
}

export default UserList;
