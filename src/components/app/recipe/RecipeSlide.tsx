import { ReactNode } from "react";

interface RecipeSlideProps {
  index: number;
  iterator: number;
  children: ReactNode;
}

function RecipeSlide({ index, iterator, children }: RecipeSlideProps) {
  return (
    <div
      className="recipe-scroll absolute left-0 top-0 h-full w-full overflow-y-scroll px-12 pb-12 pt-8 transition-all duration-200 ease-linear"
      style={{ transform: `translateX(${(iterator + index) * 100}%)` }}
    >
      {children}
    </div>
  );
}

export default RecipeSlide;
