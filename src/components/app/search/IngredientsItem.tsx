import { ChildrenProp } from "@/utils/utilTypes";
import { XMarkIcon } from "@heroicons/react/20/solid";

function IngredientsItem({ children }: ChildrenProp) {
  return (
    <button className="shadow-recipe-input relative overflow-hidden rounded-2xl bg-white-tint px-4 py-2 text-lg [&:focus>div]:opacity-100 [&:hover>div]:opacity-100">
      {children}
      <div className="bg-red-normal/80 absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 backdrop-blur-[2px] transition-all duration-200 ease-linear">
        <XMarkIcon className="h-7 w-7 fill-white-tint " />
      </div>
    </button>
  );
}

export default IngredientsItem;
