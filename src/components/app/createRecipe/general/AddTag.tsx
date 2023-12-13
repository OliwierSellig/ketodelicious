import SvgButton from "@/components/global/SvgButton";
import { XMarkIcon } from "@heroicons/react/20/solid";
import TextInput from "../TextInput";
import FilledButton from "@/components/global/FilledButton";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";

interface AddTagProps {
  handleReturn: () => void;
  handleAdd: (tag: string) => void;
}

function AddTag({ handleReturn, handleAdd }: AddTagProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="bg-add-recipe-background absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center rounded-2xl backdrop-blur-[6px]">
      <SvgButton
        additionalClass="absolute top-4 right-4"
        label="Close this window"
        handleClick={handleReturn}
      >
        <XMarkIcon className="h-8 w-8 fill-white-normal" />
      </SvgButton>
      <p className="mb-8 font-ubuntu text-5xl font-medium">
        Add a related <span className="text-jade-normal">Tag</span>
      </p>
      <form className="flex w-full flex-col items-center">
        <div className="relative mb-16 w-full text-center [&:focus-within>span]:visible [&:focus-within>span]:translate-y-1/2 [&:focus-within>span]:opacity-100">
          <TextInput
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
            additionalClass="w-1/3"
            placeholder="Ex. low-carb"
          />
          <span className="invisible absolute left-1/2 top-full -translate-x-1/2 text-gray-tint-1 opacity-0 transition-all duration-200 ease-linear">
            Please note, that you can only use lower case letter and
            &quot;-&quot; as a separator
          </span>
        </div>
        <FilledButton
          handleClick={() => {
            handleAdd(query);
            handleReturn();
          }}
          size="xl"
        >
          <span>Save the tag</span>
          <ClipboardDocumentCheckIcon className="h-8 w-8" />
        </FilledButton>
      </form>
    </div>
  );
}

export default AddTag;
