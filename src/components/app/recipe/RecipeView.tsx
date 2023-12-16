"use client";

import FilledButton from "@/components/global/FilledButton";
import RecipeImage from "./RecipeImage";
import RecipeSlider from "./RecipeSlider";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function RecipeView() {
  return (
    <div className="relative mb-28 flex w-4/5 min-w-[1200px] max-w-[1400px] flex-col self-center rounded-2xl bg-almond-tint-2 shadow-recipe-input xxxl:min-w-[1000px] xxl:w-11/12 xxl:min-w-[800px] xl:min-w-[700px]  md:absolute md:left-0 md:top-0 md:w-full md:min-w-0 [&>button:focus]:scale-100 [&>button:hover]:scale-100 [&>button]:justify-center ">
      <RecipeImage
        image="../../images/dish-1.jpg"
        recipeName="Grilled Salmon with Broccoli"
      />
      <RecipeSlider />
      <FilledButton
        size="xl"
        additionalClass="rounded-t-none md:rounded-b-none xsm:px-0"
      >
        <span className="py-1 xsm:text-lg">Save to Collection</span>
        <BookmarkIcon className="h-7 w-7" />
      </FilledButton>
    </div>
  );
}

export default RecipeView;
