import { ChildrenProp } from "@/utils/utilTypes";

function AddToRecipeHeader({ children }: ChildrenProp) {
  return (
    <p className="mb-8 font-ubuntu text-5xl font-medium md:text-4xl xsm:mb-4 xxsm:text-3xl ">
      {children}
    </p>
  );
}

function HeaderHighlight({ children }: ChildrenProp) {
  return <span className="text-jade-normal">{children}</span>;
}

AddToRecipeHeader.Highlight = HeaderHighlight;

export default AddToRecipeHeader;
