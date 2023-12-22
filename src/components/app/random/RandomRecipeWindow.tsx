import SectionHeading from "../SectionHeading";
import RandomRecipeContainer from "./RandomRecipeContainer";

function RandomRecipeWindow() {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-start xl:pt-0">
      <SectionHeading>
        <SectionHeading.Highlight>Random</SectionHeading.Highlight> Recipe
      </SectionHeading>
      <p className="mb-20 animate-[fadeRight_1s] font-ubuntu text-4xl font-medium xl:text-3xl lg:text-2xl mdl:mb-8">
        And your recipe of the day is:
      </p>
      <RandomRecipeContainer />
    </div>
  );
}

export default RandomRecipeWindow;
