"use client";

import FilledButton from "@/components/global/FilledButton";
import RecipeImage from "./RecipeImage";
import RecipeSlider from "./RecipeSlider";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function RecipeView() {
  return (
    <div className="flex min-w-[1200px] flex-col self-center rounded-2xl bg-almond-tint-2 shadow-recipe-input [&>button:focus]:scale-100 [&>button:hover]:scale-100 [&>button]:justify-center [&>button]:rounded-t-none">
      <RecipeImage
        image="../../images/dish-1.jpg"
        recipeName="Grilled Salmon with Broccoli"
      />
      <RecipeSlider />
      <FilledButton size="xl">
        <span className="py-1">Save to Collection</span>
        <BookmarkIcon className="h-7 w-7" />
      </FilledButton>
    </div>
  );
}

export default RecipeView;
