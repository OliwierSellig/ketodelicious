import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import { StepProp } from "@/utils/utilTypes";
import toast from "react-hot-toast";

interface StepItemProps {
  step: StepProp;
}

const buttonClass = {
  fill: "[&:focus>svg]:fill-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:fill-jade-normal",
  stroke:
    "[&:focus>svg]:stroke-jade-normal [&:hover>svg]:scale-110 [&:hover>svg]:stroke-jade-normal",
  iconFill:
    "h-12 w-12 fill-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9",
  iconStroke:
    "h-10 w-10 stroke-white-normal transition-all duration-200 ease-linear xsm:h-9 xsm:w-9",
};

function StepItem({ step }: StepItemProps) {
  const { removeStep, modifyWindow, updateStepPos, isBorderStep } =
    useCreateRecipe();

  return (
    <li className="xm:py-3 relative select-none overflow-hidden rounded-xl bg-almond-shade-1 px-8 py-4 text-xl shadow-sm transition-all duration-200 ease-linear sm:px-6 sm:text-lg xxsm:text-base [&:focus-within>div]:w-full [&:focus-within>div]:opacity-100 [&:hover>div]:w-full [&:hover>div]:opacity-100">
      <span className="w-full">{step.step}</span>
      <div className="absolute left-0 top-0 flex h-full w-0 items-center  justify-center gap-4 bg-gray-tint-2/20 opacity-0 backdrop-blur-sm transition-all duration-300 ease-linear ">
        <button
          aria-label="Remove step"
          onClick={() => {
            removeStep(step.step);
            toast.success("Step removed successfully!");
          }}
          className={buttonClass.stroke}
        >
          <XCircleIcon className={buttonClass.iconStroke} />
        </button>
        <button
          aria-label="Edit step"
          onClick={() =>
            modifyWindow("open", { name: "step", step: step.step })
          }
          className={buttonClass.stroke}
        >
          <PencilSquareIcon className={buttonClass.iconStroke} />
        </button>
        {!isBorderStep("first", step.step) && (
          <button
            aria-label="Move step up"
            onClick={() => updateStepPos("decrement", step.step)}
            className={buttonClass.fill}
          >
            <ChevronUpIcon className={buttonClass.iconFill} />
          </button>
        )}
        {!isBorderStep("last", step.step) && (
          <button
            aria-label="Move step down"
            onClick={() => updateStepPos("increment", step.step)}
            className={buttonClass.fill}
          >
            <ChevronDownIcon className={buttonClass.iconFill} />
          </button>
        )}
      </div>
    </li>
  );
}

export default StepItem;
