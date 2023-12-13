import { ReactNode } from "react";

interface InputColProps {
  children: ReactNode;
  id: string;
  label: string;
  additionalInfo?: string;
  additionalClass?: string;
  gap?: number;
}

function InputCol({
  children,
  id,
  label,
  additionalInfo,
  additionalClass = "",
  gap = 3,
}: InputColProps) {
  return (
    <div
      className={`flex flex-col gap-${gap} ${additionalClass} ${
        additionalInfo
          ? "[&:focus-within>label>p]:visible [&:focus-within>label>p]:translate-x-0 [&:focus-within>label>p]:opacity-100 "
          : ""
      }`}
    >
      <label
        className={`text-2xl font-medium ${
          additionalInfo
            ? "flex items-end gap-2 [&:focus-within>p]:visible [&:hover>p]:translate-x-0 [&:hover>p]:opacity-100 "
            : ""
        }`}
        htmlFor={id}
      >
        <span>{label}</span>
        {additionalInfo && (
          <p
            className={`invisible  -translate-x-full text-lg text-gray-tint-2 opacity-0 transition-all duration-200 ease-linear`}
          >
            {additionalInfo}
          </p>
        )}
      </label>
      {children}
    </div>
  );
}

export default InputCol;
