import { ReactNode } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import SvgButton from "@/components/global/SvgButton";

interface CreateElementsButtonProps {
  children: ReactNode;
  currentNumber: number;
  minReqNumber: number;
  minReqName: string;
  additionalClass?: string;
  handleClick: Function;
}

function CreateElementsButton({
  children,
  currentNumber,
  minReqNumber,
  minReqName,
  handleClick,
  additionalClass = "",
}: CreateElementsButtonProps) {
  return (
    <div
      className={`flex items-center gap-6 ${additionalClass} sm:flex-col sm:items-start sm:gap-2`}
    >
      <div className="flex items-center gap-4">
        <p className="text-2xl font-medium md:text-xl">{children}</p>
        <SvgButton handleClick={handleClick} label="Add a tag" size={1}>
          <PlusIcon className="h-7 w-7 fill-white-normal" />
        </SvgButton>
      </div>
      <p
        className={`text-lg text-gray-tint-2 transition-all duration-200 ease-linear md:text-base  xsm:text-sm ${
          currentNumber >= minReqNumber
            ? "invisible -translate-x-1/2 opacity-0 sm:-translate-y-1/2 sm:translate-x-0"
            : ""
        }`}
      >
        You need at least{" "}
        <span className="font-medium text-jade-shade-2">{minReqNumber}</span>{" "}
        {minReqName}.
      </p>
    </div>
  );
}

export default CreateElementsButton;
