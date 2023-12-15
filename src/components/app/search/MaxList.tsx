import SearchTextInput from "./SearchTextInput";

function MaxList() {
  return (
    <div className="xxxl:grid xxxl:grid-cols-2 xxxl:gap-x-14 flex flex-col gap-4">
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
