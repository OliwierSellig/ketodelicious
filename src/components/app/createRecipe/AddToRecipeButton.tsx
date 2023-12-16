import FilledButton from "@/components/global/FilledButton";
import { ChildrenProp } from "@/utils/utilTypes";
import { ReactNode } from "react";

interface AddToRecipeButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

function AddToRecipeButton({ children, handleClick }: AddToRecipeButtonProps) {
  return (
    <FilledButton
      handleClick={handleClick}
      additionalClass="self-center xsm:px-0 xsm:w-full xsm:[&>span]:text-lg xsm:[&>svg]:h-7 xsm:[&>svg]:w-7 [&>svg]:w-8 [&>svg]:h-8"
      size="xl"
    >
      {children}
    </FilledButton>
  );
}

export default AddToRecipeButton;
