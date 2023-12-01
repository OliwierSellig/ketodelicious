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
      className={`absolute  bg-jade-normal p-1 rounded-full shadow-md hover:bg-jade-shade transition-all duration-100 ease-linear delay-0 focus:bg-jade-shade z-30 ${
        disabled ? "opacity-30 grayscale-[80]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default NavButton;
