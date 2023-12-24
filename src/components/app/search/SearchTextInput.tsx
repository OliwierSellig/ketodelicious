import { BaseSyntheticEvent, ReactNode } from "react";

interface SearchTextInputProps {
  children: ReactNode;
  id: string;
  between?: boolean;
  type?: string;
  placeholder?: string;
  unit?: string;
  value: any;
  handleChange: (e: BaseSyntheticEvent) => void;
}

function SearchTextInput({
  id,
  children,
  between = false,
  type = "text",
  placeholder = "",
  unit,
  value,
  handleChange,
}: SearchTextInputProps) {
  return (
    <form
      className={`flex items-center gap-4 ${between ? "justify-between" : ""}`}
      onSubmit={(e: BaseSyntheticEvent) => {
        e.preventDefault();
      }}
    >
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-xl xl:text-lg xsm:text-base"
      >
        {children}
      </label>
      <div className="relative z-40 [&:focus-within>span]:opacity-100">
        <input
          value={value}
          onChange={(e: BaseSyntheticEvent) => handleChange(e)}
          type={type}
          id={id}
          className="hideArrowInputNumber z-40 w-52 rounded-2xl bg-white-tint px-8 py-2 pr-16 text-xl text-gray-normal shadow-recipe-input xl:w-44 xl:text-lg lg:w-36 md:w-44 xsm:w-36 xxsm:w-32"
          placeholder={placeholder}
        />
        {unit && (
          <span className="absolute right-4 top-1/2  z-20  w-11 -translate-y-[50%] text-lg font-medium text-gray-tint-2 opacity-0 transition-all duration-150 ease-linear">
            {unit}
          </span>
        )}
      </div>
    </form>
  );
}

export default SearchTextInput;
