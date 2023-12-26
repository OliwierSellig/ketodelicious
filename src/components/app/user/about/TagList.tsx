import AboutList from "./AboutList";
import TagIngItem from "./TagIngItem";

function TagList() {
  return (
    <AboutList>
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
    </AboutList>
  );
}

export default TagList;
