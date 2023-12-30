import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import toast from "react-hot-toast";
import InputCol from "../InputCol";
import TextareaInput from "../TextareaInput";
import AddToRecipeHeader from "../AddToRecipeHeader";
import AddToRecipeButton from "../AddToRecipeButton";

function AddPrepStep() {
  const {
    state: recipes,
    addStep: addStepToList,
    editStep,
    modifyWindow,
  } = useCreateRecipe();
  const [query, setQuery] = useState<string>(
    recipes.windowsOptions.addStep.step || "",
  );

  const prevName = recipes.windowsOptions.addStep.step || null;

  function addStep() {
    if (query.length < 40) {
      toast.error("Your description must be at least 40 letters long!");
      return;
    }
    if (
      recipes.prepareSteps
        .map((step) => step.step.toLowerCase())
        .includes(query.toLowerCase()) &&
      query !== prevName
    ) {
      toast.error("You already have that step in your list!");
      return;
    }
    if (prevName !== null) {
      editStep(query, prevName);
      toast.success("Step updated successfully!");
    } else {
      addStepToList(query);
      toast.success("Step added successfully!");
    }

    modifyWindow("close", { name: "step" });
  }

  return (
    <>
      <AddToRecipeHeader>
        Add Prep <AddToRecipeHeader.Highlight>Step</AddToRecipeHeader.Highlight>
      </AddToRecipeHeader>
      <form
        className="flex w-1/2 flex-col gap-12 xl:w-2/3 sm:w-4/5 xsm:w-full"
        onSubmit={(e: BaseSyntheticEvent) => {
          e.preventDefault();
          addStep();
        }}
      >
        <InputCol
          label="Write the next step"
          id="prep-step-content"
          additionalInfo="Max 250 letters"
        >
          <TextareaInput
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            borderColor="gray-tint-2"
            width="100%"
            height="400px"
            maxLength={420}
            additionalClass="xxl:h-[300px]"
            id="prep-step-content"
            placeholder="Ex. Combine the butter and cream cheese together in a heat-safe container."
          />
        </InputCol>
        <AddToRecipeButton>
          <span>Save Prep Step</span>
          <ClipboardDocumentCheckIcon />
        </AddToRecipeButton>
      </form>
    </>
  );
}

export default AddPrepStep;
