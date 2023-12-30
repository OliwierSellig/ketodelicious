import { useCreateRecipe } from "@/context/CreateRecipeContext";
import toast from "react-hot-toast";
import FilledButton from "@/components/global/FilledButton";
import AddToRecipeHeader from "./AddToRecipeHeader";


interface CreateAuthProps {
  closeModal: () => void;
}

function CreateAuth({ closeModal }: CreateAuthProps) {
  const { createRecipe, resetState } = useCreateRecipe();

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <AddToRecipeHeader>
        Are you sure you want to save this recipe?
      </AddToRecipeHeader>
      <p className=" mb-12 text-xl font-medium text-gray-tint-1">
        Once, created you will not be able to edit it at any point.
      </p>
      <FilledButton
        handleClick={() => {
          createRecipe();
          closeModal?.();
          resetState();
          toast.success("Recipe created successfully!");
        }}
        size="xl"
      >
        Save the recipe
      </FilledButton>
    </div>
  );
}

export default CreateAuth;
