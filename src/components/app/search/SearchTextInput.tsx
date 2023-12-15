import { ReactNode } from "react";

interface SearchTextInputProps {
  children: ReactNode;
  id: string;
  between?: boolean;
  type?: string;
  placeholder?: string;
  unit?: string;
}

function SearchTextInput({
  id,
  children,
  between = false,
  type = "text",
  placeholder = "",
  unit,
}: SearchTextInputProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        between ? "justify-between" : ""
      } relative [&:hover>span]:right-[-13%] [&>input:focus+span]:right-[-13%] lg:[&>input:focus+span]:right-[-15%]`}
    >
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-xl xl:text-lg"
      >
        {children}
      </label>
      <input
        type={type}
        id={id}
        className="z-20 w-52 rounded-2xl bg-white-tint px-8 py-2 text-xl text-gray-normal shadow-recipe-input xl:w-44 xl:text-lg lg:w-36"
        placeholder={placeholder}
      />

      {unit && (
        <span className="absolute right-2 top-1/2 z-10 w-11 -translate-y-[50%] text-lg font-medium text-gray-tint-2 transition-all duration-150 ease-linear">
          {unit}
        </span>
      )}
    </div>
  );
}

export default SearchTextInput;
