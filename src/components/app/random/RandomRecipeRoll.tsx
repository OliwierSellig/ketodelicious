import { ArrowPathIcon } from "@heroicons/react/24/outline";

function RandomRecipeRoll() {
  return (
    <button className="duratiom-200 rounded-full bg-jade-shade-2 p-3 transition-all ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-105 focus:bg-jade-normal [&:hover>svg]:rotate-[360deg] ">
      <ArrowPathIcon className="h-12 w-12 stroke-white-normal transition-all duration-300 ease-in-out" />
    </button>
  );
}

export default RandomRecipeRoll;
