import { useCreateRecipe } from "@/context/CreateRecipeContext";
import AddToRecipeWindow from "./AddToRecipeWindow";
import AddTag from "./general/AddTag";
import AddIngredient from "./ingredients/AddIngredient";
import AddPrepStep from "./preparation/AddPrepStep";

function AddWindows() {
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
}

export default AddWindows;
