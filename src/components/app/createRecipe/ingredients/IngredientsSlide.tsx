import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import NutritionAccordion from "./NutritionAccordion";

function IngredientsSlide() {
  return (
    <div className="grid grid-cols-2 gap-14">
      <div className="col-span-1 ">
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
      <div className="col-span-1"></div>
    </div>
  );
}

export default IngredientsSlide;
