import { useCreateRecipe } from "@/context/CreateRecipeContext";
import CreateElementsButton from "../CreateElementsButton";
import StepList from "./StepList";

function PreparationSlide() {
  const { state: recipes, modifyWindow } = useCreateRecipe();

  return (
    <div className="flex h-full w-full flex-col justify-start overflow-x-clip pt-12 sm:overflow-y-scroll sm:pt-4">
      <CreateElementsButton
        handleClick={() => modifyWindow("open", { name: "step" })}
        currentNumber={recipes.prepareSteps.length}
        minReqName="step"
        minReqNumber={1}
        additionalClass="mb-12 sm:mb-2"
      >
        Preparation Steps
      </CreateElementsButton>
      <StepList />
    </div>
  );
}

export default PreparationSlide;
