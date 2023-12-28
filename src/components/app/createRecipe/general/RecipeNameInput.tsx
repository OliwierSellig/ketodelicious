import { useCreateRecipe } from "@/context/CreateRecipeContext";
import InputCol from "../InputCol";
import TextInput from "../TextInput";
import { BaseSyntheticEvent, ChangeEvent } from "react";

function RecipeNameInput() {
  const { state: recipe, setName } = useCreateRecipe();

  function changeName(e: BaseSyntheticEvent) {
    if (
      e.target.value.slice(-1).match(/^[A-Za-z -]+$/) ||
      e.target.value === ""
    )
      setName(e.target.value);
  }

  return (
    <InputCol label="Recipe Name" id="name" additionalInfo="8 - 60 letters">
      <TextInput
        value={recipe.name}
        onChange={changeName}
        id="name"
        placeholder="Ex. Eggs and bacon"
        maxLength={60}
      />
    </InputCol>
  );
}

export default RecipeNameInput;
