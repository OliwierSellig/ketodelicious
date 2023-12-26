import { ReactElement, ReactNode } from "react";

interface AboutBoxProps {
  children: ReactNode;
  icon: ReactElement<SVGAElement>;
  heading: string;
  additionalClass?: string;
}

function AboutBox({ children, icon, heading, additionalClass }: AboutBoxProps) {
  return (
    <div
      className={`flex min-h-[240px]  flex-col overflow-hidden rounded-2xl bg-white-tint px-6 py-8 shadow-recipe-input sm:px-4 sm:py-6 ${additionalClass}`}
    >
      <h2 className="mb-6 flex items-center gap-2 font-ubuntu text-gray-tint-1 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-gray-tint-1">
        {icon}
        <span className="text-2xl font-medium sm:text-xl">{heading}</span>
      </h2>
      {children}
    </div>
  );
}

export default AboutBox;
