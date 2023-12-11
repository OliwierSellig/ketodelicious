import { IngredientItem } from "@/utils/utilTypes";

interface IngredientElementProps {
  ingredient: IngredientItem;
}

function IngredientElement({ ingredient }: IngredientElementProps) {
  return (
    <li className="font-lg">
      <span className="text-xl font-medium">{ingredient.name}: </span>
      <span>{ingredient.textAmount || ""}</span>
      <span>{ingredient.textAmount && ingredient.gramAmount ? " / " : ""}</span>
      <span>{ingredient.gramAmount || ""}</span>
    </li>
  );
}

export default IngredientElement;
