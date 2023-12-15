import FilledButton from "@/components/global/FilledButton";
import InputCol from "../InputCol";
import TextareaInput from "../TextareaInput";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

interface AddPrepStepProps {
  handleAdd: () => void;
}

function AddPrepStep({ handleAdd }: AddPrepStepProps) {
  return (
    <>
      <p className="mb-8 font-ubuntu text-5xl font-medium">
        Add Prep <span className="text-jade-normal">Step</span>
      </p>
      <form className="flex w-1/2 flex-col gap-12 xl:w-2/3">
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
        <FilledButton additionalClass="self-center" size="xl">
          <span>Save Prep Step</span>
          <ClipboardDocumentCheckIcon className="h-8 w-8" />
        </FilledButton>
      </form>
    </>
  );
}

export default AddPrepStep;
