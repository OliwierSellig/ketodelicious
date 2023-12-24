import Image from "next/image";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import IngredientsList from "./IngredientsList";
import FilledButton from "@/components/global/FilledButton";
import RecipeCardDetails from "@/components/global/RecipeCardDetails";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import { RecipeItemProp } from "@/utils/utilTypes";

interface RandomRecipeCardProps {
  recipe: RecipeItemProp;
  loadImage: () => void;
  loadingImage: boolean;
}

function RandomRecipeCard({
  recipe,
  loadImage,
  loadingImage,
}: RandomRecipeCardProps) {
  return (
    <div className="mb-8 grid w-full  max-w-[1200px] animate-[scaleOpacity_0.8s] grid-cols-5 overflow-hidden rounded-2xl shadow-recipe-input xxl:flex xxl:flex-col">
      <div className=" relative col-span-3 h-full   xxl:h-[500px] mdl:aspect-video mdl:h-auto ">
        <div
          className={`after:random-recipe-bg relative z-10 h-full w-full after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full after:content-[''] ${
            !loadingImage ? "animate-[fadeRight_1s]" : ""
          } `}
        >
          <Image
            fill
            sizes={"(max-width: 1580px) 75vw, 720px"}
            src={recipe.image}
            alt={recipe.name}
            className="object-cover"
            onLoad={loadImage}
          />
        </div>
        {loadingImage && (
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-almond-tint-2 backdrop-blur-sm">
            <LoadingSpinner />
          </div>
        )}
      </div>
      <div className="relative z-50 col-span-2 flex h-full flex-col items-center justify-between bg-white-tint px-8 py-12 shadow-gray-left xsm:px-4">
        <div>
          <h2 className="mb-5 text-center font-ubuntu text-4xl font-medium lg:text-3xl">
            {recipe.name}
          </h2>
          <RecipeCardDetails
            calories={recipe.nutrients?.caloriesKCal}
            prepareTime={recipe.prepareTime}
          />
          <IngredientsList list={recipe.ingredients.slice(0, 5)} />
        </div>
        <FilledButton
          destination={`/app/recipes/${recipe.id}`}
          size="xl"
          additionalClass="xxsm:w-full xxsm:justify-center xxsm:px-2"
        >
          <ArrowUpOnSquareIcon className="h-7 w-7 stroke-white-normal" />
          <span className="lg:text-xl">Visit Recipe</span>
        </FilledButton>
      </div>
    </div>
  );
}

export default RandomRecipeCard;
