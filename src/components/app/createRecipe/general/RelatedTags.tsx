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
    <div className="flex  flex-grow flex-col px-6 pb-4">
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
        <div className="w-full flex-grow">
          <ul className=" flex w-full flex-wrap gap-3">
            {tags.map((tag, i) => (
              <TagItem
                handleClick={() => handleRemove(tag)}
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
