import { ChildrenProp } from "@/utils/utilTypes";

function IngredientsList({ children }: ChildrenProp) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export default IngredientsList;
