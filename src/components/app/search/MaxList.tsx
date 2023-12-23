import { useSearch } from "@/context/SearchContext";
import SearchTextInput from "./SearchTextInput";
import { BaseSyntheticEvent } from "react";

interface MaxListProps {
  isOpen: boolean;
}

function MaxList({ isOpen }: MaxListProps) {
  const { state: search, setMax } = useSearch();

  function setMaxBoundries(
    e: BaseSyntheticEvent,
    type: "calories" | "cookTime" | "prepareTime" | "netCarbs",
  ) {
    if (
      (e.target.value?.slice(-1).match(/(\d+)/) &&
        e.target.value.length <= 4) ||
      e.target.value === ""
    ) {
      setMax(e.target.value, type);
    }
  }

  return (
    <div
      className={`flex animate-[fadeRight_1.2s] flex-col gap-4 transition-all duration-200 ease-linear xxxl:grid xxxl:grid-cols-2 xxxl:gap-x-14  ${
        !isOpen ? "md:hidden" : "md:animate-[fadeRight_1s]"
      } md:flex md:flex-col`}
    >
      <SearchTextInput
        between={true}
        unit="min"
        type="text"
        id="maxPrepare"
        value={search.maxPrepareTime}
        handleChange={(e) => setMaxBoundries(e, "prepareTime")}
      >
        Max Prepare Time
      </SearchTextInput>
      <SearchTextInput
        between={true}
        unit="min"
        type="text"
        id="maxCooking"
        value={search.maxCookTime}
        handleChange={(e) => setMaxBoundries(e, "cookTime")}
      >
        Max Cooking Time
      </SearchTextInput>
      <SearchTextInput
        between={true}
        unit="kcal"
        type="text"
        id="maxCalories"
        value={search.maxCalories}
        handleChange={(e) => setMaxBoundries(e, "calories")}
      >
        Max Calories
      </SearchTextInput>
      <SearchTextInput
        between={true}
        unit="gram"
        type="text"
        id="maxCarbs"
        value={search.maxNetCarbs}
        handleChange={(e) => setMaxBoundries(e, "netCarbs")}
      >
        Max Net Carbs
      </SearchTextInput>
    </div>
  );
}

export default MaxList;
