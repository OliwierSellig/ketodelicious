import { fetchRecipes } from "@/lib/recipes";
import RecipeCard from "../../global/RecipeCard";
import FavouritesSlider from "./FavouritesSlider";
import { RecipeCardProp } from "@/utils/utilTypes";

async function SliderList() {
  const timeUnder15 = await fetchRecipes({
    maxPrepareTime: 15,
  });

  const caloriesUnder400 = await fetchRecipes({
    maxCalories: 400,
  });

  const netCarbsUnder5 = await fetchRecipes({
    maxNetCarbs: 2,
  });

  return (
    <ul className="flex h-full w-full flex-col gap-12">
      <FavouritesSlider
        subheading="Under 15 minutes"
        heading="For All The Busy Folks"
      >
        {timeUnder15.map((recipe: RecipeCardProp) => (
          <RecipeCard
            key={recipe.id}
            additionalClass="min-w-[400px] sm:min-w-[240px] animate-[scaleOpacity_1s]"
            name={recipe.name}
            prepareTime={recipe.prepareTime}
            calories={recipe.nutrients.caloriesKCal}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less that 400 calories"
        heading="For Those Guilt-Free Feasts"
      >
        {caloriesUnder400?.map((recipe: RecipeCardProp) => (
          <RecipeCard
            key={recipe.id}
            additionalClass="min-w-[400px] sm:min-w-[240px] animate-[scaleOpacity_1s]"
            name={recipe.name}
            prepareTime={recipe.prepareTime}
            calories={recipe.nutrients.caloriesKCal}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </FavouritesSlider>
      <FavouritesSlider
        subheading="Less than 2g net carbs"
        heading="For The Most Strict Freaks"
      >
        {netCarbsUnder5?.map((recipe: RecipeCardProp) => (
          <RecipeCard
            key={recipe.id}
            additionalClass="min-w-[400px] sm:min-w-[240px] animate-[scaleOpacity_1s]"
            name={recipe.name}
            prepareTime={recipe.prepareTime}
            calories={recipe.nutrients.caloriesKCal}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </FavouritesSlider>
    </ul>
  );
}

export default SliderList;
