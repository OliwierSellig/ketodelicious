import { useCreateRecipe } from "@/context/CreateRecipeContext";
import CreateElementsButton from "../CreateElementsButton";
import NoItemsAlert from "../NoItemsAlert";
import TagItem from "./TagItem";

function RelatedTags() {
  const { state: recipes, modifyWindow, modifyTags } = useCreateRecipe();

  return (
    <div className="flex  flex-grow flex-col px-6 pb-4">
      <CreateElementsButton
        currentNumber={recipes.tags.length}
        additionalClass="mb-6"
        handleClick={() => modifyWindow("open", "tag")}
        minReqName="tags"
        minReqNumber={5}
      >
        Related Tags
      </CreateElementsButton>

      {recipes.tags.length > 0 ? (
        <div className="w-full flex-grow">
          <ul className=" flex w-full flex-wrap gap-3">
            {recipes.tags.map((tag, i) => (
              <TagItem
                handleClick={() => modifyTags("remove", tag)}
                tag={tag}
                key={i}
              />
            ))}
          </ul>
        </div>
      ) : (
        <NoItemsAlert additionalClass="self-center" name="tags" />
      )}
    </div>
  );
}

export default RelatedTags;
