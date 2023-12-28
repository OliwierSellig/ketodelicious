import { IngredientItem } from "@/utils/utilTypes";
import NutritionAccordion from "./NutritionAccordion";
import InfoInputs from "./InfoInputs";
import IngredientsContainer from "./IngredientsContainer";

interface IngredientsSlideProps {
  ingredientsList: IngredientItem[];
  openIngredientWindow: () => void;
}

function IngredientsSlide({
  ingredientsList,
  openIngredientWindow,
}: IngredientsSlideProps) {
  return (
    <div className="grid grid-cols-2 gap-28 overflow-x-clip xl:gap-20 mdl:grid-cols-1 mdl:gap-0 mdl:overflow-y-scroll sm:overflow-y-scroll">
      <div className="col-span-1 flex h-full flex-col ">
        <InfoInputs />
        <NutritionAccordion />
      </div>
      <IngredientsContainer />
    </div>
  );
}

export default IngredientsSlide;
