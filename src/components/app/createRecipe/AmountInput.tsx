import { ChangeEvent } from "react";

interface AmountInputProps {
  value?: string;
  onChange?: Function;
  id: string;
  unit: string;
  additionalClass?: string;
  borderColor?: string;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  px?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  py?: 1 | 2 | 3 | 4 | 5 | 6;
  maxLength?: number;
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
  borderColor = "gray-tint-3",
  maxLength = 10,
}: AmountInputProps) {
  return (
    <div className={`relative `}>
      <input
        maxLength={maxLength}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (
            (e.target.value
              .split("")
              .every((item) => item.match(/^[0-9]*\.?[0-9]*$/)) &&
              e.target.value.split("").filter((item) => item === ".").length <
                2) ||
            e.target.value === ""
          )
            onChange?.(e);
        }}
        id={id}
        type="text"
        className={`recipe-input border-${borderColor} w-full  px-${px} py-${py} text-${textSize} ${additionalClass}`}
      />
      <span className="absolute right-4 top-0 z-50  translate-y-1/2 text-xl text-gray-tint-2 xsm:text-lg">
        {unit}.
      </span>
    </div>
  );
}

export default AmountInput;
