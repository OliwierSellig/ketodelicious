import { fetchRecipes } from "@/lib/recipes";
import RecipeCard from "../../global/RecipeCard";
import Slider from "../Slider";
import { useEffect, useState } from "react";
import { RecipeItemProp } from "@/utils/utilTypes";

interface FeaturedRecipesProps {
  tag: string;
}

function FeaturatedRecipes({ tag }: FeaturedRecipesProps) {
  const [rec, setRec] = useState<RecipeItemProp[]>([]);
  useEffect(() => {
    async function fetchFeaturatedRecipes() {
      const data = await fetchRecipes({ tags: [tag] });

      if (Array.isArray(data)) setRec(data);
    }

    fetchFeaturatedRecipes();
  }, [tag]);

  if (rec.length < 1) return null;

  return (
    <div className="w-full md:hidden">
      <h2 className="mb-8 animate-[fadeLeft_1.2s] font-ubuntu text-4xl font-medium">
        You may also like:
      </h2>
      <Slider>
        {Array.isArray(rec) &&
          rec.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              prepareTime={recipe.prepareTime}
              calories={recipe.nutrients.caloriesKCal}
              id={recipe.id}
              sizes={{ defaultSize: "50vw" }}
              additionalClass="min-w-[420px] animate-[fadeBottom_1.2s]"
            />
          ))}
      </Slider>
    </div>
  );
}

export default FeaturatedRecipes;
