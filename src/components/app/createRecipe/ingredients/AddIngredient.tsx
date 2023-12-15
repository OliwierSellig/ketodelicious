import FilledButton from "@/components/global/FilledButton";
import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import TextInput from "../TextInput";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

interface AddIngredientsProps {
  handleAdd: (tag: string) => void;
}
function AddIngredient({ handleAdd }: AddIngredientsProps) {
  return (
    <>
      <p className="mb-8 font-ubuntu text-5xl font-medium">
        Add an <span className="text-jade-normal">Ingredient</span>
      </p>
      <form className="flex flex-col items-center">
        <InputCol
          additionalClass="mb-8 w-full"
          id="ingredient-name"
          label="Ingredient Name"
          additionalInfo="Max 40 letters"
        >
          <TextInput id="ingredient-name" borderColor="gray-tint-2" />
        </InputCol>
        <div className="mb-12 grid grid-cols-2 gap-8">
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
        <FilledButton additionalClass="self-center" size="xl">
          <span>Save the Ingredient</span>
          <ClipboardDocumentCheckIcon className="h-8 w-8" />
        </FilledButton>
      </form>
    </>
  );
}

export default AddIngredient;
