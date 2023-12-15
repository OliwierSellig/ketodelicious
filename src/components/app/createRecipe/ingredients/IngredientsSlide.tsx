import { IngredientItem } from "@/utils/utilTypes";
import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import NutritionAccordion from "./NutritionAccordion";
import CreateElementsButton from "../CreateElementsButton";
import IngredientsList from "./IngredientsList";
import IngredientsItem from "./IngredientsItem";

interface IngredientsSlideProps {
  ingredientsList: IngredientItem[];
  openIngredientWindow: () => void;
}

function IngredientsSlide({
  ingredientsList,
  openIngredientWindow,
}: IngredientsSlideProps) {
  return (
    <div className="grid grid-cols-2 gap-28">
      <div className="col-span-1 flex h-full flex-col ">
        <div className="mb-6 flex flex-col gap-4">
          <InputCol id="cooking-time" label="Cooking Time">
            <AmountInput id="cooking-time" unit="min" />
          </InputCol>
          <InputCol id="prepare-time" label="Prepare Time">
            <AmountInput id="prepare-time" unit="min" />
          </InputCol>
          <InputCol id="calories-time" label="Calories">
            <AmountInput id="calories-time" unit="kcal" />
          </InputCol>
        </div>
        <NutritionAccordion />
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <CreateElementsButton
          minReqName="Ingredients"
          currentNumber={ingredientsList.length}
          minReqNumber={3}
          handleClick={openIngredientWindow}
        >
          Ingredients
        </CreateElementsButton>
        <div className="recipe-scroll relative flex-grow overflow-y-scroll">
          <ul className="absolute left-0 top-0 h-full w-full px-4">
            {ingredientsList.map((ingredient, i) => (
              <IngredientsItem ingredient={ingredient} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IngredientsSlide;
