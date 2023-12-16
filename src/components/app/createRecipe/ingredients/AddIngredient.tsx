import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import TextInput from "../TextInput";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import AddToRecipeHeader from "../AddToRecipeHeader";
import AddToRecipeButton from "../AddToRecipeButton";

interface AddIngredientsProps {
  handleAdd: (tag: string) => void;
}
function AddIngredient({ handleAdd }: AddIngredientsProps) {
  return (
    <>
      <AddToRecipeHeader>
        Add an{" "}
        <AddToRecipeHeader.Highlight>Ingredient</AddToRecipeHeader.Highlight>
      </AddToRecipeHeader>
      <form className="flex flex-col items-center xsm:w-full">
        <InputCol
          additionalClass="mb-8 w-full"
          id="ingredient-name"
          label="Ingredient Name"
          additionalInfo="Max 40 letters"
        >
          <TextInput id="ingredient-name" borderColor="gray-tint-2" />
        </InputCol>
        <div className="mb-12 grid grid-cols-2 gap-8 xsm:w-full xsm:grid-cols-1">
          <InputCol
            additionalClass="col-span-1"
            id="ingredient-named-amount"
            label="Named Amount"
          >
            <TextInput id="ingredient-named-amount" borderColor="gray-tint-2" />
          </InputCol>
          <InputCol
            additionalClass="col-span-1"
            id="ingredient-grams-amount"
            label="Grams Amount"
          >
            <AmountInput
              id="ingredient-grams-amount"
              borderColor="gray-tint-2"
              unit="g"
            />
          </InputCol>
        </div>
        <AddToRecipeButton handleClick={() => {}}>
          <span>Save the Ingredient</span>
          <ClipboardDocumentCheckIcon />
        </AddToRecipeButton>
      </form>
    </>
  );
}

export default AddIngredient;
