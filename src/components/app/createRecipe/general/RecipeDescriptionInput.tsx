import { useCreateRecipe } from "@/context/CreateRecipeContext";
import InputCol from "../InputCol";
import TextareaInput from "../TextareaInput";
import { BaseSyntheticEvent } from "react";

function RecipeDescriptionInput() {
  const { state: recipe, setDescription } = useCreateRecipe();

  return (
    <InputCol
      label="Recipe Description"
      id="desc"
      additionalInfo="40 - 420 letters"
      additionalClass="[&>textarea]:h-[300px] lg:[&>textarea]:w-[380px] mdl:[&>textarea]:w-full"
    >
      <TextareaInput
        id="desc"
        placeholder="Ex. This is my best recipe is far and I want to share it with the world!"
        height="300px"
        width="420px"
        value={recipe.description}
        onChange={(e: BaseSyntheticEvent) => setDescription(e.target.value)}
        maxLength={420}
      />
    </InputCol>
  );
}

export default RecipeDescriptionInput;
