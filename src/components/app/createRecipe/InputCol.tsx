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
          ? "[&:focus-within>label>p]:visible [&:focus-within>label>p]:translate-x-0 [&:focus-within>label>p]:opacity-100 xsm:[&:focus-within>label>p]:translate-y-0  "
          : ""
      }`}
    >
      <label
        className={`text-2xl font-medium ${
          additionalInfo ? "flex items-end gap-2 xsm:grid" : ""
        } md:text-xl`}
        htmlFor={id}
      >
        <span className="xsm:row-start-2 xsm:row-end-3">{label}</span>
        {additionalInfo && (
          <p
            className={`invisible -translate-x-full text-lg text-gray-tint-2 opacity-0  transition-all duration-200 ease-linear xsm:row-start-1 xsm:row-end-2 xsm:translate-x-0 xsm:translate-y-full`}
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
