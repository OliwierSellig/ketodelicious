"use client";

import { useUser } from "@/context/UserContext";
import Slider from "../../Slider";
import RecipeCard from "@/components/global/RecipeCard";
import FilledButton from "@/components/global/FilledButton";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
function FavouriteRecipes() {
  const { favourites } = useUser();

  return (
    <div className="flex flex-col">
      <h2 className="mb-8 animate-[fadeLeft_0.8s] font-ubuntu text-4xl font-medium">
        Your favourite recipes:
      </h2>
      {favourites.length < 1 && (
        <div className="flex animate-[fadeBottom_0.8s] flex-col items-center gap-6 px-2 py-8">
          <p className="text-center text-2xl font-medium text-gray-tint-2 sm:text-xl">
            You don&nbsp;t have any favourites yes, go on and add some!
          </p>
          <FilledButton destination="/app/search" size="lg">
            <MagnifyingGlassIcon className="h-8 w-8" />
            <span className="sm:text-lg">Search for recipes</span>
          </FilledButton>
        </div>
      )}
      {favourites.length > 0 && (
        <Slider>
          {favourites.map((recipe) => (
            <RecipeCard
              sizes={{ defaultSize: "30vw" }}
              name={recipe.name}
              prepareTime={recipe.prepareTime}
              calories={recipe.nutrients.caloriesKCal}
              image={recipe.image}
              key={recipe.id}
              id={recipe.id}
              additionalClass="min-w-[360px] sm:min-w-[280px] xsm:min-w-[260px] animate-[scaleOpacity_1s]"
            />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default FavouriteRecipes;
