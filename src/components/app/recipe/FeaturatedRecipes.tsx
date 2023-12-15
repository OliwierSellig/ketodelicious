import RecipeCard from "../../global/RecipeCard";
import Slider from "../Slider";

function FeaturatedRecipes() {
  return (
    <div className="w-full md:hidden">
      <h2 className="mb-8 font-ubuntu text-4xl font-medium">
        You may also like:
      </h2>
      <Slider>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="min-w-[420px] xxxl:min-w-[320px]">
            <RecipeCard />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturatedRecipes;
