import { ChangeEvent } from "react";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import AmountInput from "../AmountInput";
import InputRow from "../InputRow";

interface NutritionInputListProps {
  open: boolean;
}

function NutritionInputList({ open }: NutritionInputListProps) {
  const { state: recipes, setNutrition } = useCreateRecipe();

  return (
    <div
      className={`recipe-scroll relative overflow-y-scroll transition-all duration-150 ease-linear mdl:overflow-y-visible ${
        !open ? "invisible h-0 max-h-none opacity-0" : "h-full"
      }`}
    >
      <ul className="absolute left-0 top-0 flex h-full w-full flex-col gap-4 pr-4 mdl:static xsm:pr-0">
        <li>
          <InputRow
            label="Net Carbs"
            id="net-carbs"
            additionalClassLabel="xsm:text-lg"
          >
            <AmountInput
              value={recipes.nutrition.netCarbs}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("netCarbs", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xsm:w-[160px] xxsm:w-[140px] xsm:text-lg"
              unit="g"
              id="net-carbs"
            />
          </InputRow>
        </li>
        <li>
          <InputRow
            label="Total Carbs"
            id="total-carbs"
            additionalClassLabel="xsm:text-lg"
          >
            <AmountInput
              value={recipes.nutrition.totalCarbs}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("totalCarbs", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px] xsm:w-[160px]"
              unit="g"
              id="total-carbs"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Sugar" id="sugar" additionalClassLabel="xsm:text-lg">
            <AmountInput
              value={recipes.nutrition.sugar}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("sugar", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px] xsm:w-[160px]"
              unit="g"
              id="sugar"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Fiber" id="fiber" additionalClassLabel="xsm:text-lg">
            <AmountInput
              value={recipes.nutrition.fiber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("fiber", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px] xsm:w-[160px]"
              unit="g"
              id="fiber"
            />
          </InputRow>
        </li>
        <li>
          <InputRow
            label="Protein"
            id="protein"
            additionalClassLabel="xsm:text-lg"
          >
            <AmountInput
              value={recipes.nutrition.protein}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("protein", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px] xsm:w-[160px]"
              unit="g"
              id="protein"
            />
          </InputRow>
        </li>
        <li>
          <InputRow
            label="Total Fat"
            id="total-fat"
            additionalClassLabel="xsm:text-lg"
          >
            <AmountInput
              value={recipes.nutrition.totalFat}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("totalFat", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px] xsm:w-[160px]"
              unit="g"
              id="total-fat"
            />
          </InputRow>
        </li>
        <li>
          <InputRow
            label="Trans Fat"
            id="trans-fat"
            additionalClassLabel="xsm:text-lg"
          >
            <AmountInput
              value={recipes.nutrition.transFat}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNutrition("transFat", e.target.value)
              }
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px] xxsm:w-[140px]  xsm:w-[160px]"
              unit="g"
              id="trans-fat"
            />
          </InputRow>
        </li>
      </ul>
    </div>
  );
}

export default NutritionInputList;
