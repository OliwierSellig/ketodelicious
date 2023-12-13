import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import NutritionInputList from "./NutritionInputList";
import { useState } from "react";

function NutritionAccordion() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="mb-6 flex items-center gap-2 [&:focus>p>span]:text-jade-normal [&:focus>svg]:fill-jade-normal [&:hover>p>span]:text-jade-normal [&:hover>svg]:fill-jade-normal"
        aria-label="Toggle Nutrition View"
      >
        <p>
          <span className="text-2xl font-medium text-gray-tint-1 transition-all duration-200 ease-linear">
            Nutrition
          </span>{" "}
          <span className="text-xl text-gray-tint-2 transition-all duration-200 ease-linear">
            (Not required)
          </span>
        </p>
        <ChevronLeftIcon
          className={`h-10 w-10 fill-gray-tint-2 transition-all duration-200 ease-linear ${
            isOpen ? "-rotate-90" : ""
          }`}
        />
      </button>
      <NutritionInputList />
    </div>
  );
}

export default NutritionAccordion;
