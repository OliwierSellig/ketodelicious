import IngredientsItem from "./IngredientsItem";
import IngredientsList from "./IngredientsList";
import SearchTextInput from "./SearchTextInput";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";

function IngredientsModifier() {
  return (
    <div
      className={`grid animate-[fadeLeft_1.2s] grid-cols-2 gap-4 md:transition-all md:duration-200 md:ease-linear sm:flex sm:flex-col sm:gap-8 ${
        !isConfiguratorOpen ? "md:hidden sm:hidden" : "md:animate-[fadeLeft_1s]"
      } `}
    >
      <div className="flex flex-col gap-4">
        <SearchTextInput id="include">
          <ArchiveBoxArrowDownIcon className="stroke-gray-tint h-7 w-7" />
          <span>Include</span>
        </SearchTextInput>
        <IngredientsList>
          <IngredientsItem>Cinamon</IngredientsItem>
          <IngredientsItem>Kurkimin</IngredientsItem>
          <IngredientsItem>Cocoa</IngredientsItem>
        </IngredientsList>
      </div>
      <div className="flex flex-col gap-4">
        <SearchTextInput id="exclude">
          <ArchiveBoxXMarkIcon className="stroke-gray-tint h-7 w-7" />
          <span>Exclude</span>
        </SearchTextInput>
        <IngredientsList>
          <IngredientsItem>Cinamon</IngredientsItem>
          <IngredientsItem>Kurkimin</IngredientsItem>
          <IngredientsItem>Cocoa</IngredientsItem>
        </IngredientsList>
      </div>
    </div>
  );
}

export default IngredientsModifier;
