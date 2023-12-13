import CreateElementsButton from "../CreateElementsButton";
import NoItemsAlert from "../NoItemsAlert";
import TagItem from "./TagItem";

interface RelatedTagsProps {
  tags: string[];
  handleRemove: Function;
  openAddTagWindow: Function;
}

function RelatedTags({
  tags,
  handleRemove,
  openAddTagWindow,
}: RelatedTagsProps) {
  return (
    <div className="flex h-full flex-grow flex-col">
      <CreateElementsButton
        currentNumber={tags.length}
        additionalClass="mb-6"
        handleClick={openAddTagWindow}
        minReqName="tags"
        minReqNumber={5}
      >
        Related Tags
      </CreateElementsButton>

      {tags.length > 0 ? (
        <div className="recipe-scroll relative h-full w-full flex-grow overflow-y-scroll">
          <ul className="absolute left-0 top-0 flex  w-full flex-wrap gap-3">
            {tags.map((tag, i) => (
              <TagItem handleClick={() => handleRemove(tag)} key={i}>
                {tag}
              </TagItem>
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
