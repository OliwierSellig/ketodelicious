import { useUser } from "@/context/UserContext";
import { RecipeItemProp } from "@/utils/utilTypes";
import toast from "react-hot-toast";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFull } from "@heroicons/react/24/solid";

interface AddFavouriteButtonProps {
  recipe: RecipeItemProp;
}

function AddFavouriteButton({ recipe }: AddFavouriteButtonProps) {
  const { checkIsFavourite, addToBookmarked } = useUser();
  const isFav = checkIsFavourite(recipe.id);

  return (
    <div className="absolute  right-8 top-0 z-50 rounded-bl-2xl rounded-br-2xl bg-jade-shade-2 p-2 pt-6">
      <button
        onClick={() => {
          if (!isFav) {
            addToBookmarked(recipe, true, "favored");
            toast.success("Succesfully added as favourite");
          } else {
            addToBookmarked(recipe, false, "unfavored");
            toast.success("Succesfully removed as favourite");
          }
        }}
        className="[&:focus>svg]:scale-105 [&:hover>svg]:scale-105"
        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
      >
        {isFav ? (
          <HeartIconFull className="h-10 w-10 animate-[scaleUp_0.4s] fill-white-normal transition-all duration-200 ease-linear sm:h-8 sm:w-8" />
        ) : (
          <HeartIcon className="h-10 w-10 stroke-white-normal transition-all  duration-200 ease-linear sm:h-8 sm:w-8" />
        )}
      </button>
    </div>
  );
}

export default AddFavouriteButton;
