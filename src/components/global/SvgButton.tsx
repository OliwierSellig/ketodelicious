import { ReactNode, SVGProps } from "react";

interface SvgButtonProps {
  children: ReactNode;
  additionalClass?: string;
  size?: 1 | 2 | 3 | 4 | 5;
  handleClick?: Function;
  label: string;
  disabled?: boolean;
}

function SvgButton({
  children,
  additionalClass = "",
  size = 2,
  handleClick,
  label,
  disabled = false,
}: SvgButtonProps) {
  return (
    <button
      disabled={disabled}
      aria-label={label}
      onClick={() => handleClick?.()}
      className={` rounded-full bg-jade-shade-2 shadow-sm p-${size} transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-110 focus:bg-jade-normal ${
        disabled
          ? "opacity-60 grayscale-[70%] hover:scale-100 hover:bg-jade-shade-2 focus:scale-100 focus:bg-jade-shade-2"
          : ""
      } ${additionalClass}`}
    >
      {children}
    </button>
  );
}

export default SvgButton;
