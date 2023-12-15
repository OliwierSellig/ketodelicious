import InputCol from "../InputCol";
import TextareaInput from "../TextareaInput";

function RecipeDescriptionInput() {
  return (
    <InputCol
      label="Recipe Description"
      id="desc"
      additionalInfo="Max 420 letters"
      additionalClass="[&>textarea]:h-[300px] lg:[&>textarea]:w-[380px]"
    >
      <TextareaInput
        id="name"
        placeholder="Ex. This is my best recipe is far and I want to share it with the world!"
        height="300px"
        width="420px"
      />
    </InputCol>
  );
}

export default RecipeDescriptionInput;
