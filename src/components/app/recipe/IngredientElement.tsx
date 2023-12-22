import { IngredientProp } from "@/utils/utilTypes";

interface IngredientElementProps {
  ingredient: IngredientProp;
}

function IngredientElement({ ingredient }: IngredientElementProps) {
  return (
    <li className="font-lg">
      <span className="text-xl font-medium xsm:text-lg">
        {ingredient.name}:{" "}
      </span>
      <span>{ingredient.servingSize.desc || ""}</span>
      <span>
        {ingredient.servingSize.desc && ingredient.servingSize.grams
          ? " / "
          : ""}
      </span>
      <span>{ingredient.servingSize.grams || ""}</span>
    </li>
  );
}

export default IngredientElement;
