import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";
import OpenRecipeCreator from "../createRecipe/OpenRecipeCreator";

interface ActionButtonProps {
  type: "bookmarked" | "created";
}

function ActionButton({ type }: ActionButtonProps) {
  if (type === "bookmarked")
    return (
      <FilledButton size="lg" destination="/app/search">
        <MagnifyingGlassIcon className="h-8 w-8" />
        <span className="sm:text-lg">Search Recipes</span>
      </FilledButton>
    );

  return (
    <OpenRecipeCreator>
      <FilledButton size="lg">
        <PlusIcon className="h-8 w-8" />
        <span className="sm:text-lg">Create Recipe</span>
      </FilledButton>
    </OpenRecipeCreator>
  );
}

export default ActionButton;
