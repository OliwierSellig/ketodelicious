import { IngredientProp } from "@/utils/utilTypes";

interface IngredientsListProps {
  list: IngredientProp[];
}

function IngredientsList({ list }: IngredientsListProps) {
  return (
    <div className="mb-8">
      <p className="mb-3 font-ubuntu text-2xl font-medium lg:text-xl">
        Ingredients:
      </p>
      <ul className="flex flex-wrap gap-2">
        {list.map((item, i) => (
          <li
            key={i}
            className="relative cursor-default overflow-hidden rounded-xl bg-almond-shade-1 px-4 py-2 text-lg lg:text-base [&:hover>span:first-child]:-translate-y-[150%] [&:hover>span:last-child]:top-1/2 [&:hover>span:last-child]:-translate-y-1/2"
          >
            <span className="block transition-all duration-150 ease-linear">
              {item.name}
            </span>
            <span className="absolute left-1/2 top-full z-20 -translate-x-1/2 transition-all duration-150 ease-linear">
              {item.servingSize.grams ? Math.ceil(item.servingSize.grams) : 0}g
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
