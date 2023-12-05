import IngredientsItem from "./IngredientsItem";
import IngredientsList from "./IngredientsList";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";
import SearchTextInput from "./SearchTextInput";
import MaxList from "./MaxList";

function SearchConfigurator() {
  return (
    <div className="mb-24 grid max-w-[1300px] grid-cols-[2fr_1fr] gap-12">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          placeholder="Write recipe name here"
          className="shadow-recipe-input mb-8 w-full rounded-2xl bg-white-tint px-8 py-3 text-xl text-gray-normal"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <SearchTextInput id="include" placeholder="Ex. Cinamon">
              <ArchiveBoxArrowDownIcon className="h-7 w-7 stroke-gray-tint" />
              <span>Include</span>
            </SearchTextInput>
            <IngredientsList>
              <IngredientsItem>Cinamon</IngredientsItem>
              <IngredientsItem>Kurkimin</IngredientsItem>
              <IngredientsItem>Cocoa</IngredientsItem>
            </IngredientsList>
          </div>
          <div className="flex flex-col gap-4">
            <SearchTextInput id="exclude" placeholder="Ex. Eggs">
              <ArchiveBoxXMarkIcon className="h-7 w-7 stroke-gray-tint" />
              <span>Exclude</span>
            </SearchTextInput>
            <IngredientsList>
              <IngredientsItem>Cinamon</IngredientsItem>
              <IngredientsItem>Kurkimin</IngredientsItem>
              <IngredientsItem>Cocoa</IngredientsItem>
            </IngredientsList>
          </div>
        </div>
      </div>
      <MaxList />
    </div>
  );
}

export default SearchConfigurator;
