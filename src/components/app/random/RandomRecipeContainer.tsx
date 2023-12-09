import RandomRecipeCard from "./RandomRecipeCard";
import RandomRecipeRoll from "./RandomRecipeRoll";

function RandomRecipeContainer() {
  return (
    <div className="flex w-full flex-col items-center self-center">
      <p className="mb-6 font-ubuntu text-4xl font-medium">
        And your recipe of the day is:
      </p>
      <RandomRecipeCard />
      <RandomRecipeRoll />
    </div>
  );
}

export default RandomRecipeContainer;
