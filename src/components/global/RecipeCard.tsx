import Link from "next/link";
import RecipeCardDetails from "./RecipeCardDetails";

interface RecipeCardProps {
  additionalClass?: string;
  name?: string;
  image?: string;
  prepareTime?: number;
  calories?: number;
  id?: string;
}

function RecipeCard({
  additionalClass = "",
  name = "Salmon bowl with zuchinni and tomatoes",
  image = "../../images/dish-1.jpg",
  prepareTime = 25,
  calories = 476,
  id = "",
}: RecipeCardProps) {
  return (
    <Link
      draggable={false}
      href={`/app/recipes/${id}`}
      className={`focus-scale-[103%] flex  w-full min-w-[300px]  max-w-[600px] flex-col items-center overflow-hidden rounded-2xl bg-white-tint shadow-recipe-input  transition-all duration-200 ease-linear hover:scale-[103%] [&:focus>div>h2]:text-jade-normal ${additionalClass}`}
    >
      <div className="aspect-video w-full bg-white-tint">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(51, 51, 51, 0) 0%, rgba(119, 119, 119, 0.4) 100%), url(${image})`,
          }}
          className="recipe-image-clip h-full w-full bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center px-4 pb-4 pt-2 text-center">
        <h2 className="mb-2 text-xl font-medium transition-all duration-150 ease-linear xsm:text-lg">
          {name.slice(0, 40) === name ? name : name.slice(0, 40) + "..."}
        </h2>
        <RecipeCardDetails prepareTime={prepareTime} calories={calories} />
      </div>
    </Link>
  );
}

export default RecipeCard;
