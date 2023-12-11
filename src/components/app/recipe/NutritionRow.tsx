import { ReactNode } from "react";

interface NutritionRowProps {
  value: string;
  children: ReactNode;
}

function NutritionRow({ children, value }: NutritionRowProps) {
  return (
    <li className="grid grid-cols-2 border-b-2 border-solid border-gray-tint-1 text-center ">
      <p className="col-span-1 border-r border-solid border-gray-tint-1 py-1">
        {value}
      </p>
      <p className="col-span-1 border-l border-solid border-gray-tint-1 py-1">
        {children}
      </p>
    </li>
  );
}

export default NutritionRow;
