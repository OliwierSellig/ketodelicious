import FilledButton from "@/components/global/FilledButton";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";

function RecipeImageInput() {
  return (
    <div className="xsm:w-full">
      <p className="mb-3 text-2xl font-medium md:text-xl">Recipe Image</p>
      <div className="flex aspect-square w-[420px] flex-col items-center justify-center rounded-2xl border-2 border-gray-tint-3 shadow-md xl:w-[360px] xsm:w-full">
        <p className="mb-2 flex items-center gap-2">
          <DocumentArrowUpIcon className="h-6 w-6 stroke-gray-tint-1" />
          <span className="text-lg">Drop an image here</span>
        </p>
        <FilledButton size="lg" additionalClass="rounded-xl mb-2">
          Upload a file
        </FilledButton>

        <p className="text-sm text-gray-tint-1">Only (PNG, JPG, JPEG) files</p>
      </div>
    </div>
  );
}

export default RecipeImageInput;
