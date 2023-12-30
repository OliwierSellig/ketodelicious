import { useEffect, useState } from "react";
import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconFull } from "@heroicons/react/24/solid";
import { useUser } from "@/context/UserContext";
import { RecipeItemProp } from "@/utils/utilTypes";
import toast from "react-hot-toast";
import FilledButton from "@/components/global/FilledButton";
import RemoveCreatedButton from "./RemoveCreatedButton";

interface ToggleRecipeButtonProps {
  recipe: RecipeItemProp;
  isCreated: boolean;
}

function ToggleRecipeButton({ recipe, isCreated }: ToggleRecipeButtonProps) {
  const { checkInBookmarked, addToBookmarked, removeFromBookmarked } =
    useUser();
  const [ad, setAd] = useState<string>("");
  const bookmarked = checkInBookmarked(recipe.id);

  useEffect(() => {
    if (!bookmarked) {
      setAd("");
    } else {
      const adTimeout = setTimeout(() => {
        setAd(
          "[&:hover>p:first-child]:-translate-y-[150%] [&:focus>p:first-child]:-translate-y-[150%] [&:hover>p:last-child]:-translate-y-1/2 [&:focus>p:last-child]:-translate-y-1/2",
        );
      }, 1000);
      return () => {
        clearTimeout(adTimeout);
      };
    }
  }, [bookmarked]);

  if (isCreated) return <RemoveCreatedButton recipe={recipe} />;

  return (
    <FilledButton
      size="xl"
      additionalClass={`rounded-t-none md:rounded-b-none relative xsm:px-0 mdl:mt-auto ${
        bookmarked ? ad : ""
      }`}
      handleClick={() => {
        if (!bookmarked) {
          addToBookmarked(recipe, false, "bookmarked");
          toast.success("Recipe Added Succesfully");
        } else {
          removeFromBookmarked(recipe);
          toast.success("Recipe Removed Succesfully");
        }
      }}
    >
      {!bookmarked ? (
        <p className="flex  items-center gap-2 py-1 xsm:text-lg">
          <span>Save to Collection</span>
          <BookmarkIcon className="h-7 w-7" />
        </p>
      ) : (
        <>
          <p className="flex items-center gap-2 py-1 transition-all duration-200 xsm:text-lg">
            <span>In your Collection</span>
            <BookmarkIconFull className="h-7 w-7" />
          </p>
          <p className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[100%] items-center gap-2 py-1 transition-all duration-200 xsm:text-lg">
            <span>Remove from Collection</span>
            <BookmarkSlashIcon className="h-7 w-7" />
          </p>
        </>
      )}
    </FilledButton>
  );
}

export default ToggleRecipeButton;
