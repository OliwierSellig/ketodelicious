import { useCreateRecipe } from "@/context/CreateRecipeContext";
import AddToRecipeWindow from "./AddToRecipeWindow";
import AddTag from "./general/AddTag";
import AddIngredient from "./ingredients/AddIngredient";
import AddPrepStep from "./preparation/AddPrepStep";

function AddWindows() {
  const { state: recipe, modifyWindow } = useCreateRecipe();

  if (recipe.windowsOpenState.addTag)
    return (
      <AddToRecipeWindow onClose={() => modifyWindow("close", "tag")}>
        <AddTag handleAdd={() => {}} />
      </AddToRecipeWindow>
    );

  if (recipe.windowsOpenState.addIngredient)
    return (
      <AddToRecipeWindow onClose={() => modifyWindow("close", "ing")}>
        <AddIngredient handleAdd={() => {}} />
      </AddToRecipeWindow>
    );

  if (recipe.windowsOpenState.addStep)
    return (
      <AddToRecipeWindow onClose={() => modifyWindow("close", "step")}>
        <AddPrepStep handleAdd={() => {}} />
      </AddToRecipeWindow>
    );
}

export default AddWindows;
