import AmountInput from "../AmountInput";
import InputRow from "../InputRow";

function NutritionInputList() {
  return (
    <div className="recipe-scroll overflow-y-scroll">
      <ul className="flex flex-col gap-4 pr-4">
        <li>
          <InputRow label="Net Carbs" id="net-carbs">
            <AmountInput
              py={2}
              width="300px"
              additionalClass="w-[300px]"
              unit="g"
              id="net-carbs"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Total Carbs" id="total-carbs">
            <AmountInput py={2} width="300px" unit="g" id="total-carbs" />
          </InputRow>
        </li>
        <li>
          <InputRow label="Sugar" id="sugar">
            <AmountInput py={2} width="300px" unit="g" id="sugar" />
          </InputRow>
        </li>
        <li>
          <InputRow label="Fiber" id="fiber">
            <AmountInput py={2} width="300px" unit="g" id="fiber" />
          </InputRow>
        </li>
        <li>
          <InputRow label="Protein" id="protein">
            <AmountInput py={2} width="300px" unit="g" id="protein" />
          </InputRow>
        </li>
        <li>
          <InputRow label="Total Fat" id="total-fat">
            <AmountInput py={2} width="300px" unit="g" id="total-fat" />
          </InputRow>
        </li>
        <li>
          <InputRow label="Trans Fat" id="trans-fat">
            <AmountInput py={2} width="300px" unit="g" id="trans-fat" />
          </InputRow>
        </li>
      </ul>
    </div>
  );
}

export default NutritionInputList;
