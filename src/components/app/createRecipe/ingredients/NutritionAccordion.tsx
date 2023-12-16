import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import NutritionInputList from "./NutritionInputList";
import { useState } from "react";

function NutritionAccordion() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-grow flex-col mdl:mb-6">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-6 flex items-center gap-2 [&:focus>p>span]:text-jade-normal [&:focus>svg]:fill-jade-normal [&:hover>p>span]:text-jade-normal [&:hover>svg]:fill-jade-normal"
        aria-label="Toggle Nutrition View"
      >
        <p>
          <span className="text-2xl font-medium text-gray-tint-1 transition-all duration-200 ease-linear sm:text-xl">
            Nutrition
          </span>{" "}
          <span className="text-xl text-gray-tint-2 transition-all duration-200 ease-linear sm:text-lg">
            (Not required)
          </span>
        </p>
        <ChevronLeftIcon
          className={`h-10 w-10 fill-gray-tint-2 transition-all duration-200 ease-linear sm:h-8 sm:w-8 ${
            isOpen ? "-rotate-90" : ""
          }`}
        />
      </button>
      <NutritionInputList open={isOpen} />
    </div>
  );
}

export default NutritionAccordion;
