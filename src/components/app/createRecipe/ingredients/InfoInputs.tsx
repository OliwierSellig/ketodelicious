import { useCreateRecipe } from "@/context/CreateRecipeContext";
import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import { ChangeEvent } from "react";

function InfoInputs() {
  const {
    state: recipes,
    setPrepTime,
    setCookTime,
    setCalories,
  } = useCreateRecipe();

  return (
    <div className="mb-6 flex flex-col gap-4">
      <InputCol id="cooking-time" label="Cooking Time">
        <AmountInput
          value={recipes.cookingTime.toString()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCookTime(e.target.value)
          }
          id="cooking-time"
          unit="min"
        />
      </InputCol>
      <InputCol id="prepare-time" label="Prepare Time">
        <AmountInput
          value={recipes.prepareTime.toString()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPrepTime(e.target.value)
          }
          id="prepare-time"
          unit="min"
        />
      </InputCol>
      <InputCol id="calories-time" label="Calories">
        <AmountInput
          value={recipes.calories.toString()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCalories(e.target.value)
          }
          id="calories-time"
          unit="kcal"
        />
      </InputCol>
    </div>
  );
}

export default InfoInputs;
