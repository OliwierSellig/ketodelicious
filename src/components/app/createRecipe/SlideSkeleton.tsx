import { ReactNode } from "react";
import { useCreateRecipe } from "@/context/CreateRecipeContext";

interface SlideSkeletonProps {
  children: ReactNode;
  index: number;
}

function SlideSkeleton({ children, index }: SlideSkeletonProps) {
  const { state: recipe } = useCreateRecipe();

  return (
    <div
      style={{ transform: `translateY(${(index - recipe.iterator) * 100}%)` }}
      className="absolute left-0 top-0 h-full w-full  px-16 py-10 transition-all duration-300 ease-linear xl:px-12 lg:px-8 sm:px-6 xsm:px-4 [&>div]:h-full [&>div]:w-full"
    >
      {children}
    </div>
  );
}

export default SlideSkeleton;
