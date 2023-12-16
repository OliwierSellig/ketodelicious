import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface StepItemProps {
  step: string;
}

function StepItem({ step }: StepItemProps) {
  return (
    <li className="xm:py-3 relative select-none overflow-hidden rounded-xl bg-almond-shade-1 px-8 py-4 text-xl shadow-sm sm:px-6 sm:text-lg xxsm:text-base [&:focus-within>div]:w-full [&:focus-within>div]:opacity-100 [&:hover>div]:w-full [&:hover>div]:opacity-100">
      <span>{step}</span>
      <div className="absolute left-0 top-0 flex h-full w-0 items-center  justify-center gap-4 bg-gray-tint-2/20 opacity-0 backdrop-blur-sm transition-all duration-300 ease-linear ">
        <button
          aria-label="Remove step"
          className="[&:focus>svg]:stroke-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:stroke-jade-normal"
        >
          <XCircleIcon className="h-10 w-10 stroke-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9" />
        </button>
        <button
          aria-label="Edit step"
          className="[&:focus>svg]:stroke-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:stroke-jade-normal"
        >
          <PencilSquareIcon className="h-10 w-10 stroke-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9" />
        </button>
        <button
          aria-label="Move step up"
          className="[&:focus>svg]:fill-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:fill-jade-normal"
        >
          <ChevronUpIcon className="h-12 w-12 fill-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9" />
        </button>
        <button
          aria-label="Move step down"
          className="[&:focus>svg]:fill-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:fill-jade-normal"
        >
          <ChevronDownIcon className="h-12 w-12 fill-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9" />
        </button>
      </div>
    </li>
  );
}

export default StepItem;
