import { NutritionItem } from "@/utils/utilTypes";
import NutritionRow from "./NutritionRow";

interface NutritionTableProps {
  nutritionList: NutritionItem;
}

function NutritionTable({ nutritionList }: NutritionTableProps) {
  return (
    <ul className="flex flex-col border-x-2 border-t-2 border-solid border-gray-tint-2 text-xl">
      <NutritionRow value="Energy">{nutritionList.energy} kcal</NutritionRow>
      <NutritionRow value="Total Carbs">
        {nutritionList.totalCarbs}g
      </NutritionRow>
      <NutritionRow value="Net Carbs">{nutritionList.netCarbs}g</NutritionRow>
      <NutritionRow value="Sugar">{nutritionList.sugar}g</NutritionRow>
      <NutritionRow value="Fiber">{nutritionList.fiber}g</NutritionRow>
      <NutritionRow value="Protein">{nutritionList.protein}g</NutritionRow>
      <NutritionRow value="Fat">{nutritionList.fat}g</NutritionRow>
      <NutritionRow value="Trans Fat">{nutritionList.transFat}g</NutritionRow>
    </ul>
  );
}

export default NutritionTable;
