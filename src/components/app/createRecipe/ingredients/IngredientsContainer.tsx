import CreateElementsButton from "../CreateElementsButton";
import NoItemsAlert from "../NoItemsAlert";
import IngredientsItem from "./IngredientsItem";
import { useCreateRecipe } from "@/context/CreateRecipeContext";

function IngredientsContainer() {
  const { state: recipes, modifyWindow } = useCreateRecipe();

  return (
    <div className="col-span-1 flex flex-col gap-4">
      <CreateElementsButton
        minReqName="Ingredients"
        currentNumber={recipes.ingredients.length}
        minReqNumber={3}
        handleClick={() => modifyWindow("open", { name: "ing" })}
      >
        Ingredients
      </CreateElementsButton>
      <div className="recipe-scroll relative flex-grow overflow-y-scroll mdl:overflow-y-visible">
        {recipes.ingredients.length > 0 ? (
          <ul className="absolute left-0 top-0 h-full w-full px-4 mdl:static">
            {recipes.ingredients.map((ingredient, i) => (
              <IngredientsItem ingredient={ingredient} key={i} />
            ))}
          </ul>
        ) : (
          <NoItemsAlert name="ingredients" additionalClass="h-full" />
        )}
      </div>
    </div>
  );
}

export default IngredientsContainer;
