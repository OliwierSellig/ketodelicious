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
        <label
          className="mb-4 cursor-pointer  rounded-xl bg-jade-shade-2 px-12 py-3 text-xl text-white transition-all duration-150 ease-linear hover:scale-105 hover:bg-jade-normal focus:scale-105 focus:bg-jade-normal xsm:px-8  xsm:py-2"
          htmlFor="file"
        >
          Upload a file
        </label>
        <input className="hidden" type="file" id="file" />
        <p className="text-sm text-gray-tint-1">Only (PNG, JPG, JPEG) files</p>
      </div>
    </div>
  );
}

export default RecipeImageInput;
