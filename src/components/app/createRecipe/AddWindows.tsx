import { useCreateRecipe } from "@/context/CreateRecipeContext";
import AddToRecipeWindow from "./AddToRecipeWindow";
import AddTag from "./general/AddTag";
import AddIngredient from "./ingredients/AddIngredient";
import AddPrepStep from "./preparation/AddPrepStep";
import ResetAuth from "./ResetAuth";
import CreateAuth from "./CreateAuth";

interface AddWindowsProps {
  closeModal: () => void;
}

function AddWindows({ closeModal }: AddWindowsProps) {
  const { state: recipe, modifyWindow } = useCreateRecipe();

  if (recipe.windowsOptions.addTag.isOpen)
    return (
      <AddToRecipeWindow onClose={() => modifyWindow("close", { name: "tag" })}>
        <AddTag />
      </AddToRecipeWindow>
    );

  if (recipe.windowsOptions.addIngredient.isOpen)
    return (
      <AddToRecipeWindow onClose={() => modifyWindow("close", { name: "ing" })}>
        <AddIngredient />
      </AddToRecipeWindow>
    );

  if (recipe.windowsOptions.addStep.isOpen)
    return (
      <AddToRecipeWindow
        onClose={() => modifyWindow("close", { name: "step" })}
      >
        <AddPrepStep />
      </AddToRecipeWindow>
    );

  if (recipe.windowsOptions.reset.isOpen)
    return (
      <AddToRecipeWindow
        onClose={() => modifyWindow("close", { name: "reset" })}
      >
        <ResetAuth />
      </AddToRecipeWindow>
    );
  if (recipe.windowsOptions.create.isOpen)
    return (
      <AddToRecipeWindow
        onClose={() => modifyWindow("close", { name: "create" })}
      >
        <CreateAuth closeModal={closeModal} />
      </AddToRecipeWindow>
    );
}

export default AddWindows;
