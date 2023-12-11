import { BookOpenIcon, HeartIcon } from "@heroicons/react/24/outline";
import { IngredientItem, NutritionItem } from "@/utils/utilTypes";
import IngredientElement from "./IngredientElement";
import NutritionTable from "./NutritionTable";

interface IngredientsSlideProps {
  ingredientsList: IngredientItem[];
  nutritionList: NutritionItem;
}

function IngredientsSlide({
  ingredientsList,
  nutritionList,
}: IngredientsSlideProps) {
  return (
    <div className="grid grid-cols-2 justify-center gap-12">
      <div>
        <h2 className="mb-2 flex gap-2 font-ubuntu text-2xl font-medium ">
          <BookOpenIcon className="h-8 w-8 stroke-gray-tint-1" />
          <span>Ingredients:</span>
        </h2>
        <ul className="flex flex-col gap-2">
          {ingredientsList.map((ingredient, i) => (
            <IngredientElement key={i} ingredient={ingredient} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-2 flex gap-2 font-ubuntu text-2xl font-medium ">
          <HeartIcon className="h-8 w-8 stroke-gray-tint-1" />
          <span>Nutrition:</span>
        </h2>
        <NutritionTable nutritionList={nutritionList} />
      </div>
    </div>
  );
}

export default IngredientsSlide;
