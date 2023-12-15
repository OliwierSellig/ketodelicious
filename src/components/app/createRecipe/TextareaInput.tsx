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
}: TextareaInputProps) {
  return (
    <textarea
      id={id}
      maxLength={maxLength}
      placeholder={placeholder}
      style={{ width: width }}
      className={`recipe-input border-${borderColor}  ${
        !resize ? "resize-none" : ""
      } px-${px} py-${py} text-${textSize} placeholder:text-${textSize} ${additionalClass} h-[${height}]`}
    />
  );
}

export default TextareaInput;
