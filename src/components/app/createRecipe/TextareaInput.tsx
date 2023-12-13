interface TextareaInputProps {
  id: string;
  height: string;
  width: string;
  placeholder?: string;
  additionalClass?: string;
  resize?: boolean;
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
}: TextareaInputProps) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      style={{ height: height, width: width }}
      className={`recipe-input  ${
        !resize ? "resize-none" : ""
      } px-${px} py-${py} text-${textSize} placeholder:text-${textSize} ${additionalClass}`}
    />
  );
}

export default TextareaInput;
