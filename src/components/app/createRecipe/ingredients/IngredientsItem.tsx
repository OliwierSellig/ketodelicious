import { IngredientItem } from "@/utils/utilTypes";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface IngredientItemProps {
  ingredient: IngredientItem;
}

function IngredientsItem({ ingredient }: IngredientItemProps) {
  return (
    <div className="flex items-center justify-between border-b-[1.5px] border-solid border-[#999] px-2 py-6">
      <div className="flex flex-col gap-2 text-xl">
        <p>
          <span>Name: </span>
          <span className="font-medium">{ingredient.name}</span>
        </p>
        <p>
          <span>Named Amount: </span>
          {ingredient.textAmount ? (
            <span className="font-medium">{ingredient.textAmount}</span>
          ) : (
            <span className="text-gray-tint-1">Unknown</span>
          )}
        </p>
        <p>
          <span>Grams Amount: </span>
          {ingredient.gramAmount ? (
            <span className="font-medium">{ingredient.gramAmount}</span>
          ) : (
            <span className="text-gray-tint-1">Unknown</span>
          )}
        </p>
      </div>
      <nav className="flex flex-col gap-4">
        <button className=" [&:focus>svg]:stroke-jade-normal [&:hover>svg]:stroke-jade-normal">
          <XCircleIcon className="h-8 w-8 stroke-gray-tint-1 transition-all duration-150 ease-linear" />
        </button>
        <button className=" [&:focus>svg]:stroke-jade-normal [&:hover>svg]:stroke-jade-normal">
          <PencilSquareIcon className="h-8 w-8 stroke-gray-tint-1 transition-all duration-150 ease-linear" />
        </button>
      </nav>
    </div>
  );
}

export default IngredientsItem;
