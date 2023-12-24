import { XMarkIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface IngredientsItemProps {
  children: ReactNode;
  handleClick: () => void;
}

function IngredientsItem({ children, handleClick }: IngredientsItemProps) {
  return (
    <button
      onClick={handleClick}
      className="relative animate-[scaleUp_0.4s] overflow-hidden rounded-2xl bg-white-tint px-4 py-2 text-lg shadow-recipe-input [&:focus>div]:opacity-100 [&:hover>div]:opacity-100"
    >
      {children}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-red-normal/80 opacity-0 backdrop-blur-[2px] transition-all duration-200 ease-linear">
        <XMarkIcon className="h-7 w-7 fill-white-tint " />
      </div>
    </button>
  );
}

export default IngredientsItem;
