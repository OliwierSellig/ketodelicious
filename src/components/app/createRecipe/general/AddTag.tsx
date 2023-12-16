import SvgButton from "@/components/global/SvgButton";
import { XMarkIcon } from "@heroicons/react/20/solid";
import TextInput from "../TextInput";
import FilledButton from "@/components/global/FilledButton";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
import AddToRecipeHeader from "../AddToRecipeHeader";
import AddToRecipeButton from "../AddToRecipeButton";

interface AddTagProps {
  handleAdd: (tag: string) => void;
}

function AddTag({ handleAdd }: AddTagProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <AddToRecipeHeader>
        Add a related{" "}
        <AddToRecipeHeader.Highlight>Tag</AddToRecipeHeader.Highlight>
      </AddToRecipeHeader>
      <form className="flex w-full flex-col items-center">
        <div className="relative mb-16 w-full text-center [&:focus-within>span]:visible [&:focus-within>span]:translate-y-1/2 [&:focus-within>span]:opacity-100 xsm:[&:focus-within>span]:translate-y-1/3">
          <TextInput
            borderColor="gray-tint-2"
            value={query}
            maxLength={30}
            onChange={(e: BaseSyntheticEvent) => {
              if (
                e.target.value &&
                !e.target.value.slice(-1).match(/^[a-z-]+$/)
              )
                return;
              setQuery(e.target.value);
            }}
            id="add-tag"
            additionalClass="w-1/3 placeholder:text-gray-tint-2 sm:w-2/3 xsm:w-3/4"
            placeholder="Ex. low-carb"
          />
          <span className="invisible absolute left-1/2 top-full w-full -translate-x-1/2 text-gray-tint-1 opacity-0 transition-all duration-200 ease-linear sm:text-sm">
            Please note, that you can only use lower case letter and
            &quot;-&quot; as a separator
          </span>
        </div>
        <AddToRecipeButton handleClick={() => handleAdd(query)}>
          <span>Save the tag</span>
          <ClipboardDocumentCheckIcon />
        </AddToRecipeButton>
      </form>
    </>
  );
}

export default AddTag;
