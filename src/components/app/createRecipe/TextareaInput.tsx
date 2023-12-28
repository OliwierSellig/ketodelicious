interface TextareaInputProps {
  id: string;
  height: string;
  width: string;
  placeholder?: string;
  additionalClass?: string;
  resize?: boolean;
  borderColor?: string;
  maxLength?: number;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  px?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  py?: 1 | 2 | 3 | 4 | 5 | 6;
  value?: string;
  onChange?: Function;
}

function TextareaInput({
  id,
  height,
  width,
  placeholder = "",
  additionalClass = "",
  resize = false,
  textSize = "xl",
  px = 4,
  py = 3,
  borderColor = "gray-tint-3",
  maxLength = 300,
  value,
  onChange,
}: TextareaInputProps) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange?.(e)}
      maxLength={maxLength}
      placeholder={placeholder}
      className={`recipe-input border-${borderColor}  ${
        !resize ? "resize-none" : ""
      } px-${px} py-${py} text-${textSize} w-[${width}] placeholder:text-${textSize} ${additionalClass} h-[${height}]`}
    />
  );
}

export default TextareaInput;
