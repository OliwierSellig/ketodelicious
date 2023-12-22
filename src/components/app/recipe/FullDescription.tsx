import { FullDescriptionProps } from "@/utils/utilTypes";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { marked } from "marked";

function FullDescription({ fullDesc, recipeName }: FullDescriptionProps) {
  const html = marked(fullDesc);
  return (
    <div className="absolute left-1/2 top-1/2 flex max-h-[600px] w-11/12 max-w-[960px] -translate-x-1/2 -translate-y-1/2 animate-[fadeLeftModal_0.6s] flex-col rounded-2xl bg-almond-tint-1 px-6 py-8 xsm:px-4">
      <h2 className="mb-2 text-center font-kalam text-5xl font-bold text-jade-shade-1 sm:text-4xl">
        {recipeName}
      </h2>
      <p className="mb-4 flex items-center gap-2 self-center font-ubuntu text-3xl font-medium sm:text-2xl">
        <NewspaperIcon className="h-8 w-8 stroke-gray-tint-1" />
        <span>Description:</span>
      </p>
      <p
        className="recipe-scroll overflow-y-scroll px-4 py-2 text-xl leading-7 sm:text-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default FullDescription;
