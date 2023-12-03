import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { transform } from "next/dist/build/swc";
import { ReactNode } from "react";

interface NavButtonProps {
  disabled: boolean;
  handleClick: Function;
  children: ReactNode;
}

function NavButton({ disabled, handleClick, children }: NavButtonProps) {
  return (
    <button
      aria-label="See Previous"
      disabled={disabled}
      onClick={() => handleClick()}
      className={`bg-jade-shade-1  absolute z-30 rounded-full p-1 shadow-md transition-all delay-0 duration-100 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
        disabled ? "opacity-30 grayscale-[80]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default NavButton;
