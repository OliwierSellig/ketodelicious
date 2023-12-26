import AboutList from "./AboutList";
import TagIngItem from "./TagIngItem";

function IngredientsList() {
  return (
    <AboutList>
      <TagIngItem count={4} theme="green">
        Egg
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Olive Oil
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Ground Beef
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Baby Spinach
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Pecans
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Bell Pepper
      </TagIngItem>
      <TagIngItem count={4} theme="green">
        Dark Chocolate
      </TagIngItem>
    </AboutList>
  );
}

export default IngredientsList;
