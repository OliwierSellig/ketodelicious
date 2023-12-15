import { ClockIcon, FireIcon } from "@heroicons/react/24/outline";

interface RecipeCardDetailsProps {
  cookingTime: number;
  calories: number;
}

function RecipeCardDetails({ cookingTime, calories }: RecipeCardDetailsProps) {
  return (
    <div className="flex items-center justify-center gap-8 xsm:gap-4">
      <div className="flex flex-col items-center text-sm font-medium">
        <ClockIcon className="mb-1 h-8 w-8 stroke-gray-tint-1 xsm:h-7 xsm:w-7" />
        <p className="text-lg font-semibold sm:text-base">{cookingTime} min</p>
      </div>
      <div className="h-20 w-[2px] rounded-[120px] bg-[#999]" />
      <div className="flex flex-col items-center text-sm font-medium">
        <FireIcon className="mb-1 h-8 w-8 stroke-gray-tint-1 xsm:h-7 xsm:w-7" />
        <p className="text-lg font-medium sm:text-base">{calories} kcal</p>
      </div>
    </div>
  );
}

export default RecipeCardDetails;
