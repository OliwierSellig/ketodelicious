import { useUser } from "@/context/UserContext";
import { UserRecipe } from "@/utils/utilTypes";
import toast from "react-hot-toast";
import FilledButton from "@/components/global/FilledButton";

interface RemoveAuthProps {
  recipe: UserRecipe;
}

function RemoveAuth({ recipe }: RemoveAuthProps) {
  const { removeFromCreated } = useUser();

  return (
    <div className="absolute left-1/2 top-1/2 flex h-1/2 max-h-[400px] w-11/12 max-w-[620px] -translate-x-1/2 -translate-y-1/2 animate-[fadeLeftModal_0.6s] flex-col items-center justify-center rounded-2xl bg-white-tint px-4 py-8 text-center">
      <p className="mb-2 font-ubuntu text-3xl font-medium text-gray-tint-1 sm:text-2xl">
        Are you sure you want do remove this recipe?
      </p>
      <p className="mb-10 text-xl text-gray-tint-2 sm:text-lg">
        Once removed, you won&apos;t be able to get it back
      </p>
      <FilledButton
        size="xl"
        destination="/app"
        handleClick={() => {
          removeFromCreated(recipe);
          toast.success("Recipe removed succesfully!");
        }}
      >
        <span className="sm:text-xl">Remove Recipe</span>
      </FilledButton>
    </div>
  );
}

export default RemoveAuth;
