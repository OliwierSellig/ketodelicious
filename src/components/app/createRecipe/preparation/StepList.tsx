import { useCreateRecipe } from "@/context/CreateRecipeContext";
import StepItem from "./StepItem";
import NoItemsAlert from "../NoItemsAlert";

function StepList() {
  const { state: recipes, getSortedSteps } = useCreateRecipe();

  if (recipes.prepareSteps.length < 1) return <NoItemsAlert name="steps" />;

  return (
    <div className="recipe-scroll mb-4 flex flex-grow flex-col overflow-y-scroll">
      <p className="font-mdeium text-center font-kalam text-4xl text-gray-tint-2">
        Start
      </p>
      <ul className="flex  flex-grow flex-col gap-4 px-4 py-6 sm:px-2 sm:py-4">
        {getSortedSteps().map((step, i) => (
          <StepItem step={step} key={i}></StepItem>
        ))}
      </ul>
      <p className="font-mdeium text-center font-kalam text-4xl text-gray-tint-2">
        Finish
      </p>
    </div>
  );
}

export default StepList;
