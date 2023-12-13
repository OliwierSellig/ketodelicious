import { ReactNode } from "react";

interface InputRowProps {
  children: ReactNode;
  id: string;
  label: string;
  additionalClass?: string;
  gap?: number;
  width?: string;
}

function InputRow({
  children,
  id,
  label,
  additionalClass = "",
  gap = 3,
  width,
}: InputRowProps) {
  return (
    <div
      className={`flex items-center justify-between gap-${gap} ${additionalClass}  `}
    >
      <label className={`flex-grow text-2xl font-medium`} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default InputRow;
