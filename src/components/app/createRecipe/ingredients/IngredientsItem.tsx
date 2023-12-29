import { useCreateRecipe } from "@/context/CreateRecipeContext";
import { IngredientProp } from "@/utils/utilTypes";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

interface IngredientItemProps {
  ingredient: IngredientProp;
}

function IngredientsItem({ ingredient }: IngredientItemProps) {
  const { modifyIngredients, modifyWindow } = useCreateRecipe();

  return (
    <li className="flex items-center justify-between gap-6  border-b-[1.5px] border-solid border-[#999] px-2 py-6 xsm:flex-col xsm:items-start xsm:gap-4">
      <div className="flex flex-col gap-2 text-xl sm:text-lg">
        <p>
          <span>Name: </span>
          <span className="font-medium">{ingredient.name}</span>
        </p>
        <p>
          <span>Named Amount: </span>
          {ingredient.servingSize.desc ? (
            <span className="font-medium">{ingredient.servingSize.desc}</span>
          ) : (
            <span className="text-gray-tint-1">Unknown</span>
          )}
        </p>
        <p>
          <span>Grams Amount: </span>
          {ingredient.servingSize.grams ? (
            <span className="font-medium">
              {ingredient.servingSize.grams} g
            </span>
          ) : (
            <span className="text-gray-tint-1">Unknown</span>
          )}
        </p>
      </div>
      <nav className="flex flex-col gap-4 xsm:flex-row">
        <button
          aria-label="Remove ingredient"
          onClick={() => {
            modifyIngredients({ action: "remove", itemName: ingredient.name });
            toast.success("Ingredient removed successfully");
          }}
          className=" [&:focus>svg]:stroke-jade-normal [&:hover>svg]:stroke-jade-normal"
        >
          <XCircleIcon className="h-8 w-8 stroke-gray-tint-1 transition-all duration-150 ease-linear" />
        </button>
        <button
          aria-label="Edit ingredient"
          onClick={() =>
            modifyWindow("open", { name: "ing", ingredient: ingredient })
          }
          className=" [&:focus>svg]:stroke-jade-normal [&:hover>svg]:stroke-jade-normal"
        >
          <PencilSquareIcon className="h-8 w-8 stroke-gray-tint-1 transition-all duration-150 ease-linear" />
        </button>
      </nav>
    </li>
  );
}

export default IngredientsItem;
