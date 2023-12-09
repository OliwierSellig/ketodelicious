import { ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import dish from "../../../public/images/dish-1.jpg";

const recipeName = "Salmon bowl with zuchinni and tomatoes";

function RecipeCard() {
  return (
    <Link
      draggable={false}
      href="/"
      className=" focus-scale-[103%] flex  w-full min-w-[300px]  max-w-[600px] flex-col items-center overflow-hidden rounded-2xl bg-white-tint shadow-recipe-input  transition-all duration-200 ease-linear hover:scale-[103%] [&:focus>div>h2]:text-jade-normal "
    >
      <div className="aspect-video w-full bg-white-tint">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(51, 51, 51, 0) 0%, rgba(119, 119, 119, 0.4) 100%), url(../images/dish-1.jpg)`,
          }}
          className="recipe-image-clip h-full w-full bg-orange-300 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center px-4 pb-4 pt-2 text-center">
        <h2 className="mb-2 text-xl font-medium transition-all duration-150 ease-linear">
          {recipeName.slice(0, 40) === recipeName
            ? recipeName
            : recipeName.slice(0, 40) + "..."}
        </h2>
        <div className="flex items-center justify-center gap-8 xsm:gap-4">
          <div className="flex flex-col items-center text-sm font-medium">
            <ClockIcon className="mb-1 h-8 w-8 stroke-gray-tint-1" />
            <p className="text-lg font-semibold">25 min</p>
          </div>
          <div className="h-20 w-[2px] rounded-[120px] bg-[#999]" />
          <div className="flex flex-col items-center text-sm font-medium">
            <FireIcon className="mb-1 h-8 w-8 stroke-gray-tint-1" />
            <p className="text-lg font-medium">470 kcal</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
