import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface RandomRecipeRollProps {
  handleClick: () => void;
}

function RandomRecipeRoll({ handleClick }: RandomRecipeRollProps) {
  return (
    <button
      onClick={handleClick}
      aria-label="Roll a next recipe"
      className="duratiom-200 animate-[fadeBottom_1.2s] rounded-full bg-jade-shade-2 p-3 transition-all ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-105 focus:bg-jade-normal [&:hover>svg]:rotate-[360deg] "
    >
      <ArrowPathIcon className="h-12 w-12 stroke-white-normal transition-all duration-300 ease-in-out" />
    </button>
  );
}

export default RandomRecipeRoll;
