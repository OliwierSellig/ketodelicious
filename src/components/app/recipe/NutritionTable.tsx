import { NutritionListProps } from "@/utils/utilTypes";
import NutritionRow from "./NutritionRow";

interface NutritionTableProps {
  nutritionList: NutritionListProps;
}

function NutritionTable({ nutritionList }: NutritionTableProps) {
  function fixToSingle(number: number | undefined, unit: "g" | "kcal") {
    if (!number || number < 0) return "---";

    return `${Number.isInteger(number) ? number : number.toFixed(2)} ${unit}`;
  }

  return (
    <ul className="flex flex-col border-x-2 border-t-2 border-solid border-gray-tint-2 text-xl xsm:text-lg">
      <NutritionRow value="Energy">
        {fixToSingle(nutritionList.caloriesKCal, "kcal")}
      </NutritionRow>
      <NutritionRow value="Total Carbs">
        {fixToSingle(nutritionList.totalCarbs, "g")}
      </NutritionRow>
      <NutritionRow value="Net Carbs">
        {fixToSingle(nutritionList.netCarbs, "g")}
      </NutritionRow>
      <NutritionRow value="Sugar">
        {fixToSingle(nutritionList.sugar, "g")}
      </NutritionRow>
      <NutritionRow value="Fiber">
        {fixToSingle(nutritionList.fiber, "g")}
      </NutritionRow>
      <NutritionRow value="Protein">
        {fixToSingle(nutritionList.protein, "g")}
      </NutritionRow>
      <NutritionRow value="Fat">
        {fixToSingle(nutritionList.totalFat, "g")}
      </NutritionRow>
      <NutritionRow value="Trans Fat">
        {fixToSingle(nutritionList.transFat, "g")}
      </NutritionRow>
    </ul>
  );
}

export default NutritionTable;
