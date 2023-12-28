import RecipeNameInput from "./RecipeNameInput";
import RecipeDescriptionInput from "./RecipeDescriptionInput";
import RecipeImageInput from "./RecipeImageInput";
import RelatedTags from "./RelatedTags";

function GeneralSlide() {
  return (
    <div className="recipe-scroll flex flex-col overflow-x-clip overflow-y-scroll px-2">
      <h2 className="mb-12 text-center font-ubuntu text-5xl font-medium md:mb-10 md:text-4xl xsm:mb-6">
        Create your <span className="text-jade-normal">Recipe</span>
      </h2>
      <div className="mb-10 flex items-center justify-around gap-14 mdl:flex-col  mdl:gap-8">
        <div className="flex flex-col gap-4 mdl:w-full">
          <RecipeNameInput />
          <RecipeDescriptionInput />
        </div>
        <RecipeImageInput />
      </div>
      <RelatedTags />
    </div>
  );
}

export default GeneralSlide;
