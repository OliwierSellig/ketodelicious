import SearchTextInput from "./SearchTextInput";

interface MaxListProps {
  isOpen: boolean;
}

function MaxList({ isOpen }: MaxListProps) {
  return (
    <div
      className={`flex flex-col gap-4 transition-all duration-200 ease-linear xxxl:grid xxxl:grid-cols-2 xxxl:gap-x-14  ${
        !isOpen ? "md:hidden" : "md:animate-[fadeRight_1s]"
      } md:flex md:flex-col`}
    >
      <SearchTextInput between={true} unit="min" type="number" id="maxPrepare">
        Max Prepare Time
      </SearchTextInput>
      <SearchTextInput between={true} unit="min" type="number" id="maxCooking">
        Max Cooking Time
      </SearchTextInput>
      <SearchTextInput
        between={true}
        unit="kcal"
        type="number"
        id="maxCalories"
      >
        Max Calories
      </SearchTextInput>
      <SearchTextInput between={true} unit="gram" type="number" id="maxCarbs">
        Max Net Carbs
      </SearchTextInput>
    </div>
  );
}

export default MaxList;
