import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";
import { useSearch } from "@/context/SearchContext";
import SearchTextInput from "./SearchTextInput";
import IngredientsItem from "./IngredientsItem";

interface IngredientsBoxProps {
  actionType: "include" | "exclude";
}

function IngredientsBox({ actionType }: IngredientsBoxProps) {
  const { addToList, removeFromList, state: search } = useSearch();
  const [query, setQuery] = useState<string>("");

  function handleBoundries(
    e: BaseSyntheticEvent,
    setter: Dispatch<SetStateAction<string>>,
  ) {
    if (e.target.value.match(/^[A-Za-z ]+$/) || e.target.value === "")
      setter(e.target.value);
  }
  return (
    <div className="flex flex-col gap-4">
      <SearchTextInput
        value={query}
        handleChange={(e) => handleBoundries(e, setQuery)}
        id={actionType}
      >
        <button
          onClick={() => {
            if (query.length > 0)
              addToList(actionType, query.trim().replaceAll(" ", "-"));
            setQuery("");
          }}
          className="flex cursor-pointer gap-2 transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-shade-2 focus:scale-105 focus:text-jade-shade-2"
        >
          {actionType === "include" ? (
            <>
              <ArchiveBoxXMarkIcon className="stroke-gray-tint h-7 w-7" />
              <span>Include</span>
            </>
          ) : (
            <>
              <ArchiveBoxArrowDownIcon className="stroke-gray-tint h-7 w-7" />
              <span>Exclude</span>
            </>
          )}
        </button>
      </SearchTextInput>
      <div className="scroll-hidden recipe-scroll  flex max-h-[100px] flex-wrap items-start gap-2 overflow-y-scroll">
        {(actionType === "include"
          ? search.includedIngredients
          : search.excludedIngredients
        ).map((ing, i) => (
          <IngredientsItem
            handleClick={() => removeFromList(actionType, ing)}
            key={i}
          >
            {ing}
          </IngredientsItem>
        ))}
      </div>
    </div>
  );
}

export default IngredientsBox;
