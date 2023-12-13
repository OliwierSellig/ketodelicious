import InputCol from "../InputCol";
import TextInput from "../TextInput";

function RecipeNameInput() {
  return (
    <InputCol label="Recipe Name" id="name" additionalInfo="Max 35 letters">
      <TextInput id="name" placeholder="Ex. Eggs and bacon" />
    </InputCol>
  );
}

export default RecipeNameInput;
