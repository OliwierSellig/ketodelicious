import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import { IngredientProp } from "@/utils/utilTypes";
import toast from "react-hot-toast";
import AmountInput from "../AmountInput";
import InputCol from "../InputCol";
import TextInput from "../TextInput";
import AddToRecipeHeader from "../AddToRecipeHeader";
import AddToRecipeButton from "../AddToRecipeButton";

function AddIngredient() {
  const {
    state: recipe,
    modifyIngredients,
    modifyWindow,
    checkInIngredients,
  } = useCreateRecipe();

  const [ingName, setIngName] = useState<string>(
    recipe.windowsOptions.addIngredient.ingredient.name || "",
  );
  const [ingNamedAmount, setIngNamedAmount] = useState<string>(
    recipe.windowsOptions.addIngredient.ingredient.servingSize.desc || "",
  );
  const [ingGramAmount, setIngGramAmount] = useState<string>(
    recipe.windowsOptions.addIngredient.ingredient.servingSize.grams?.toString() ||
      "",
  );

  const editedName =
    recipe.windowsOptions.addIngredient.ingredient.name || null;

  function handleSubmit() {
    if (ingName.length < 1) {
      toast.error("Please write a recipe name");
      return;
    }
    if (parseFloat(ingGramAmount) <= 0 && ingNamedAmount.length < 1) {
      toast.error("Write amount for at least one of the fields");
      return;
    }
    if (checkInIngredients(ingName) && ingName !== editedName) {
      toast.error("Ingredient with that name already exist");
      return;
    }

    const ingredientItem: IngredientProp = {
      name: ingName,
      servingSize: { grams: parseFloat(ingGramAmount), desc: ingNamedAmount },
    };

    if (editedName !== null && ingredientItem.name !== editedName) {
      modifyIngredients({
        action: "edit",
        item: ingredientItem,
        prevItemName: editedName,
      });
      toast.success("Ingredient updated successfully");
    } else {
      modifyIngredients({ action: "add", item: ingredientItem });
      toast.success("Ingredient added successfully");
    }
    modifyWindow("close", { name: "ing" });
  }

  return (
    <>
      <AddToRecipeHeader>
        Add an{" "}
        <AddToRecipeHeader.Highlight>Ingredient</AddToRecipeHeader.Highlight>
      </AddToRecipeHeader>
      <form
        className="flex flex-col items-center xsm:w-full"
        onSubmit={(e: BaseSyntheticEvent) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputCol
          additionalClass="mb-8 w-full"
          id="ingredient-name"
          label="Ingredient Name"
          additionalInfo="Max 40 letters"
        >
          <TextInput
            value={ingName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIngName(e.target.value)
            }
            id="ingredient-name"
            borderColor="gray-tint-2"
          />
        </InputCol>
        <div className="mb-12 grid grid-cols-2 gap-8 xsm:w-full xsm:grid-cols-1">
          <InputCol
            additionalClass="col-span-1"
            id="ingredient-named-amount"
            label="Named Amount"
          >
            <TextInput
              value={ingNamedAmount}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIngNamedAmount(e.target.value)
              }
              id="ingredient-named-amount"
              borderColor="gray-tint-2"
            />
          </InputCol>
          <InputCol
            additionalClass="col-span-1"
            id="ingredient-grams-amount"
            label="Grams Amount"
          >
            <AmountInput
              value={ingGramAmount}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIngGramAmount(e.target.value)
              }
              id="ingredient-grams-amount"
              borderColor="gray-tint-2"
              unit="g"
            />
          </InputCol>
        </div>
        <AddToRecipeButton handleClick={() => {}}>
          <span>Save the Ingredient</span>
          <ClipboardDocumentCheckIcon />
        </AddToRecipeButton>
      </form>
    </>
  );
}

export default AddIngredient;
