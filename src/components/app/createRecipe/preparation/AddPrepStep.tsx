import InputCol from "../InputCol";
import TextareaInput from "../TextareaInput";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import AddToRecipeHeader from "../AddToRecipeHeader";
import AddToRecipeButton from "../AddToRecipeButton";

interface AddPrepStepProps {
  handleAdd: () => void;
}

function AddPrepStep({ handleAdd }: AddPrepStepProps) {
  return (
    <>
      <AddToRecipeHeader>
        Add Prep <AddToRecipeHeader.Highlight>Step</AddToRecipeHeader.Highlight>
      </AddToRecipeHeader>
      <form className="flex w-1/2 flex-col gap-12 xl:w-2/3 sm:w-4/5 xsm:w-full">
        <InputCol
          label="Write the next step"
          id="prep-step-content"
          additionalInfo="Max 250 letters"
        >
          <TextareaInput
            borderColor="gray-tint-2"
            width="100%"
            height="400px"
            maxLength={250}
            additionalClass="xxl:h-[300px]"
            id="prep-step-content"
            placeholder="Ex. Combine the butter and cream cheese together in a heat-safe container."
          />
        </InputCol>
        <AddToRecipeButton handleClick={() => {}}>
          <span>Save Prep Step</span>
          <ClipboardDocumentCheckIcon />
        </AddToRecipeButton>
      </form>
    </>
  );
}

export default AddPrepStep;
