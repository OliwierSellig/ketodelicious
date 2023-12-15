import { ReactNode } from "react";

interface SlideSkeletonProps {
  children: ReactNode;
  index: number;
  iterator: number;
}

function SlideSkeleton({ children, index, iterator }: SlideSkeletonProps) {
  return (
    <div
      style={{ transform: `translateY(${(index - iterator) * 100}%)` }}
      className="absolute left-0 top-0 h-full w-full  px-16 py-10 transition-all duration-300 ease-linear xl:px-12 lg:px-8 [&>div]:h-full [&>div]:w-full"
    >
      {children}
    </div>
  );
}

export default SlideSkeleton;
