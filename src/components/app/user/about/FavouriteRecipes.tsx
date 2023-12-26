import { fetchRecipes } from "@/lib/recipes";
import Slider from "../../Slider";
import RecipeCard from "@/components/global/RecipeCard";

async function FavouriteRecipes() {
  const recipes = await fetchRecipes({});

  return (
    <div className="flex flex-col">
      <h2 className="mb-8 animate-[fadeLeft_0.8s] font-ubuntu text-4xl font-medium">
        Your favourite recipes:
      </h2>
      <Slider>
        {Array.isArray(recipes) &&
          recipes.map((recipe) => (
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
    </div>
  );
}

export default FavouriteRecipes;
