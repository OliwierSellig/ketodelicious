import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import SvgButton from "@/components/global/SvgButton";

interface AddToRecipeWindowProps {
  onClose: () => void;
  children: ReactNode;
}

function AddToRecipeWindow({ onClose, children }: AddToRecipeWindowProps) {
  return (
    <div className=" add-to-recipe relative  flex flex-col items-center justify-center p-4 md:overflow-y-scroll sm:justify-start sm:py-8 sm:pt-20">
      <SvgButton
        additionalClass="absolute top-4 right-4"
        label="Close this window"
        handleClick={onClose}
      >
        <XMarkIcon className="h-8 w-8 fill-white-normal xsm:h-7 xsm:w-7" />
      </SvgButton>
      {children}
    </div>
  );
}

export default AddToRecipeWindow;
