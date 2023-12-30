import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  StarIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import OpenRecipeCreator from "../createRecipe/OpenRecipeCreator";
import HomeLink from "./HomeLink";

function HomeNav() {
  return (
    <nav className="grid grid-cols-2 gap-8 sm:flex sm:flex-col sm:items-center sm:[&>*]:w-full  sm:[&>*]:justify-center">
      <HomeLink
        to="search"
        Icon={MagnifyingGlassIcon}
        additionalClass="animate-[fadeLeft_0.8s]"
      >
        Sarch Recipes
      </HomeLink>
      <HomeLink
        to="favourites"
        Icon={ArrowPathIcon}
        additionalClass="animate-[fadeRight_0.8s]"
      >
        Our Favourites
      </HomeLink>
      <HomeLink
        to="random"
        Icon={StarIcon}
        additionalClass="animate-[fadeLeft_1s]"
      >
        Random Recipe
      </HomeLink>
      <OpenRecipeCreator>
        <HomeLink Icon={PlusIcon} additionalClass="animate-[fadeRight_1s]">
          Create Recipe
        </HomeLink>
      </OpenRecipeCreator>
    </nav>
  );
}

export default HomeNav;
