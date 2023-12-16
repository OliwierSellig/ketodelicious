interface AmountInputProps {
  value?: string;
  onChange?: Function;
  id: string;
  unit: string;
  additionalClass?: string;
  width?: string;
  borderColor?: string;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  px?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  py?: 1 | 2 | 3 | 4 | 5 | 6;
}

function AmountInput({
  value,
  onChange,
  id,
  additionalClass,
  unit,
  textSize = "xl",
  px = 6,
  py = 3,
  width,
  borderColor = "gray-tint-3",
}: AmountInputProps) {
  return (
    <div className={`relative `}>
      <input
        value={value}
        onChange={(e) => onChange?.(e)}
        id={id}
        type="number"
        className={`recipe-input border-${borderColor} w-full  px-${px} py-${py} text-${textSize} ${additionalClass} hideArrowInputNumber`}
      />
      <span className="absolute right-4 top-0 z-50  translate-y-1/2 text-xl text-gray-tint-2 xsm:text-lg">
        {unit}.
      </span>
    </div>
  );
}

export default AmountInput;
