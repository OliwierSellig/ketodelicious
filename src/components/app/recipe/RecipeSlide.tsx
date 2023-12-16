import { ReactNode, useEffect, useState } from "react";

interface RecipeSlideProps {
  children: ReactNode;
  index: number;
  current: number;
}

function RecipeSlide({ children, index, current }: RecipeSlideProps) {
  return (
    <div
      className={`recipe-scroll absolute left-0 top-0 h-full w-full overflow-y-scroll px-12 pb-12 pt-8 transition-all duration-300 ease-linear xl:pb-8 md:px-6 xsm:px-4`}
      style={{ transform: `translateX(${(index - current) * 100}%)` }}
    >
      {children}
    </div>
  );
}

export default RecipeSlide;
