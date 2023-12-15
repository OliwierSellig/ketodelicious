import AmountInput from "../AmountInput";
import InputRow from "../InputRow";

interface NutritionInputListProps {
  open: boolean;
}

function NutritionInputList({ open }: NutritionInputListProps) {
  return (
    <div
      className={`recipe-scroll relative  overflow-y-scroll transition-all duration-150 ease-linear ${
        !open ? "invisible h-0 max-h-none opacity-0" : "h-full"
      }`}
    >
      <ul className="absolute left-0 top-0 flex h-full w-full flex-col gap-4 pr-4">
        <li>
          <InputRow label="Net Carbs" id="net-carbs">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="net-carbs"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Total Carbs" id="total-carbs">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="total-carbs"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Sugar" id="sugar">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="sugar"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Fiber" id="fiber">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="fiber"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Protein" id="protein">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="protein"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Total Fat" id="total-fat">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="total-fat"
            />
          </InputRow>
        </li>
        <li>
          <InputRow label="Trans Fat" id="trans-fat">
            <AmountInput
              py={2}
              additionalClass="w-[300px] xl:w-[240px] lg:w-[200px]"
              unit="g"
              id="trans-fat"
            />
          </InputRow>
        </li>
      </ul>
    </div>
  );
}

export default NutritionInputList;
