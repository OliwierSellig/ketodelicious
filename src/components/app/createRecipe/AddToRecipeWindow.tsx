import SvgButton from "@/components/global/SvgButton";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface AddToRecipeWindowProps {
  onClose: () => void;
  children: ReactNode;
}

function AddToRecipeWindow({ onClose, children }: AddToRecipeWindowProps) {
  return (
    <div className=" add-to-recipe  flex flex-col items-center justify-center p-4">
      <SvgButton
        additionalClass="absolute top-4 right-4"
        label="Close this window"
        handleClick={onClose}
      >
        <XMarkIcon className="h-8 w-8 fill-white-normal" />
      </SvgButton>
      {children}
    </div>
  );
}

export default AddToRecipeWindow;
