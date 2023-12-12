import { ReactNode, SVGProps } from "react";

interface SvgButtonProps {
  children: ReactNode;
  additionalClass: string;
  size?: 1 | 2 | 3 | 4 | 5;
  handleClick?: Function;
  label: string;
}

function SvgButton({
  children,
  additionalClass,
  size = 2,
  handleClick,
  label,
}: SvgButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={() => handleClick?.()}
      className={`${additionalClass} rounded-full bg-jade-shade-2 shadow-sm p-${size} transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-110 focus:bg-jade-normal`}
    >
      {children}
    </button>
  );
}

export default SvgButton;
