import FilledButton from "@/components/global/FilledButton";
import MainSlide from "./MainSlide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import IngredientsSlide from "./IngredientsSlide";
import {
  nutriList,
  ingredientsList,
  preparingSteps,
  tagList,
} from "@/utils/dummyData";
import PreparingSlide from "./PreparingSlide";
import { useState } from "react";
import RecipeSlide from "./RecipeSlide";

function RecipeSlider() {
  const [current, setCurrent] = useState<number>(1);

  function goPrev() {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent((prev) => prev - 1);
    }
  }

  function goNext() {
    if (current === 2) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  }

  return (
    <div className="relative h-[450px] xl:h-[500px]">
      <FilledButton
        additionalClass="absolute z-40 top-[-15%] left-[-2%] w-52 justify-center md:left-[5%] md:p-2 md:w-auto md:rounded-full md:-top-[12%]"
        size="lg"
        handleClick={goPrev}
      >
        <ChevronLeftIcon className="h-8 w-8" />
        <span className="md:hidden">
          {current === 0
            ? "Preparation"
            : current === 1
              ? "Ingredients"
              : " Overview"}
        </span>
      </FilledButton>
      <FilledButton
        size="lg"
        additionalClass="absolute z-40 top-0 right-0 top-[-15%] right-[-2%] w-52 justify-center md:right-[5%] md:p-2 md:w-auto md:rounded-full  md:-top-[12%]"
        handleClick={goNext}
      >
        <span className="md:hidden">
          {current === 0
            ? "Overview"
            : current === 1
              ? "Preparation"
              : " Ingredients"}
        </span>
        <ChevronRightIcon className="h-8 w-8" />
      </FilledButton>
      <div className="relative h-full w-full overflow-hidden ">
        <RecipeSlide index={0} current={current}>
          <IngredientsSlide
            ingredientsList={ingredientsList}
            nutritionList={nutriList}
          />
        </RecipeSlide>
        <RecipeSlide index={1} current={current}>
          <MainSlide
            desc="Instead of making pancakes or waffles, make this easy Keto breakfast recipe that takes way less time to make. This blueberry sponge cake in a mug is soft and fluffy like a pancake but sweet like a cake. Don’t worry, you won’t be adding many carbs to your breakfast, as all sweetening products are replaced with Keto-friendly ingredients. You can assemble the recipe in under 5 minutes, so this is also a great Keto breakfast recipe for anyone who always ends up in a rush in the mornings. Even if you’re in a rush, you can still enjoy this sweet and delicious sponge cake breakfast! If you want to serve your sponge cake with a little whipped cream, you can whip heavy cream and liquid stevia together in a stand mixer or food processor. ### Other ingredients to add Like to have a little more in your sponge cake? Try stirring in crushed nuts for more texture. Keto-friendly nuts include cashews, walnuts, pecan, hazelnuts, and even peanuts. Blueberries also happen to taste very good with lemon. Try mixing a little lemon zest in your dry ingredients! ### Can other berries be used? Blueberries are one of the most Keto-friendly berries out there. If you don’t like blueberries, try raspberries or strawberries. If you’re using strawberries in the mug cake, make sure to chop them finely. ### What type of mug should I use? A heat-safe mug or dish can easily be a coffee cup from your kitchen. Choose any type of ceramic mug to keep your hands safe as well as cook the sponge cake. If you own a ceramic ramekin, you can also cook your sponge cake in there."
            tagList={tagList}
            prepareTime={25}
            cookingTime={15}
            recipeName="Grilled Salmon with Broccoli"
          />
        </RecipeSlide>
        <RecipeSlide index={2} current={current}>
          <PreparingSlide prepList={preparingSteps} />
        </RecipeSlide>
      </div>
    </div>
  );
}

export default RecipeSlider;
