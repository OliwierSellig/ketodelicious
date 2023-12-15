import RecipeNameInput from "./RecipeNameInput";
import RecipeDescriptionInput from "./RecipeDescriptionInput";
import RecipeImageInput from "./RecipeImageInput";
import RelatedTags from "./RelatedTags";
import { useState } from "react";

interface GeneralSlideProps {
  openAddTagWindow: () => void;
  tags: string[];
  removeTag: (tag: string) => void;
}

function GeneralSlide({
  openAddTagWindow,
  tags,
  removeTag,
}: GeneralSlideProps) {
  return (
    <div className="flex flex-col overflow-x-clip overflow-y-scroll">
      <h2 className="mb-12 text-center font-ubuntu text-5xl font-medium">
        Create your <span className="text-jade-normal">Recipe</span>
      </h2>
      <div className="mb-10 flex items-center justify-around gap-14">
        <div className="flex flex-col gap-4">
          <RecipeNameInput />
          <RecipeDescriptionInput />
        </div>
        <RecipeImageInput />
      </div>
      <RelatedTags
        tags={tags}
        handleRemove={removeTag}
        openAddTagWindow={openAddTagWindow}
      />
    </div>
  );
}

export default GeneralSlide;
