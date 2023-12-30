import { useCreateRecipe } from "@/context/CreateRecipeContext";
import toast from "react-hot-toast";
import FilledButton from "@/components/global/FilledButton";

function ResetAuth() {
  const { resetState } = useCreateRecipe();

  return (
    <div className="flex flex-col items-center gap-12 text-center">
      <p className="font-ubuntu text-4xl font-medium">
        Are you sure you want to reser all the recipe data?
      </p>
      <FilledButton
        size="xl"
        handleClick={() => {
          resetState();
          toast.success("State successfully reseted!");
        }}
      >
        Reset data
      </FilledButton>
    </div>
  );
}

export default ResetAuth;
