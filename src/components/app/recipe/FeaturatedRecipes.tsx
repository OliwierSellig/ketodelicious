import RecipeCard from "../../global/RecipeCard";
import Slider from "../Slider";

function FeaturatedRecipes() {
  return (
    <div className="w-full md:hidden">
      <h2 className="mb-8 animate-[fadeLeft_1.2s] font-ubuntu text-4xl font-medium">
        You may also like:
      </h2>
      <Slider>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="min-w-[420px] animate-[fadeBottom_1.2s]">
            <RecipeCard sizes={{ defaultSize: "50vw" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturatedRecipes;
