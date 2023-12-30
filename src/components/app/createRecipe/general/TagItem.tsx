import { XCircleIcon } from "@heroicons/react/20/solid";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import toast from "react-hot-toast";

interface TagItemProps {
  tag: string;
}

function TagItem({ tag }: TagItemProps) {
  const { modifyTags } = useCreateRecipe();
  return (
    <li className="">
      <button
        onClick={() => {
          modifyTags("remove", tag);
          toast.success("Successfully removed tag");
        }}
        aria-label={tag}
        className="relative overflow-hidden rounded-xl bg-almond-shade-1 px-6 py-3 text-xl transition-all duration-200 ease-linear md:px-4 md:py-2 md:text-lg [&:focus>div]:translate-y-0 [&:focus>div]:opacity-100 [&:hover>div]:translate-y-0 [&:hover>div]:opacity-100"
      >
        <span>{tag}</span>
        <div className="absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center bg-red-normal/90 opacity-0  transition-all duration-150 ease-linear">
          <XCircleIcon className="h-8 w-8 fill-white-tint transition-all duration-150 ease-out hover:scale-125" />
        </div>
      </button>
    </li>
  );
}

export default TagItem;
