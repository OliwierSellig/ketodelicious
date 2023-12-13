interface TextInputProps {
  value?: string;
  onChange?: Function;
  id: string;
  placeholder?: string;
  maxLength?: number;
  additionalClass?: string;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  px?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  py?: 1 | 2 | 3 | 4 | 5 | 6;
}

function TextInput({
  value,
  onChange,
  id,
  placeholder = "",
  maxLength = 100,
  additionalClass,
  textSize = "xl",
  px = 6,
  py = 3,
}: TextInputProps) {
  return (
    <input
      type="text"
      id={id}
      value={value}
      maxLength={maxLength}
      onChange={(e) => onChange?.(e)}
      placeholder={placeholder}
      className={`recipe-input px-${px} py-${py} text-${textSize} placeholder:text-${textSize} ${additionalClass}`}
    />
  );
}

export default TextInput;
