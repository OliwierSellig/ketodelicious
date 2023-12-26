import TagIngItem from "./TagIngItem";

function TagList() {
  return (
    <ul className="flex flex-wrap items-start gap-2  p-2">
      <TagIngItem count={4} theme="almond">
        breakfast
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        eggs
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        gluten-free
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        keto
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        desserts
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        d
      </TagIngItem>
      <TagIngItem count={4} theme="almond">
        15-minutes-meals
      </TagIngItem>
    </ul>
  );
}

export default TagList;
