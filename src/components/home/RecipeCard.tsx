import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ClockIcon, FireIcon } from "@heroicons/react/24/outline";

interface RecipeCardProps {
  image: StaticImageData;
  children: ReactNode;
  cookingTime: number;
  calories: number;
  active: boolean;
}

function RecipeCard({
  image,
  children,
  cookingTime,
  calories,
  active,
}: RecipeCardProps) {
  return (
    <li
      className={`flex flex-col text-center px-7 pb-5 pt-36 bg-white-tint rounded-xl justify-between gap-4 relative ${
        active
          ? "scale-105"
          : "grayscale-[80%] opacity-70 blur-[2px] scale-90 translate-y-6"
      } `}
    >
      <div className="absolute top-0 left-2/4 -translate-x-1/2 -translate-y-1/4">
        <Image
          src={image}
          alt=""
          className="object-cover w-44 h-44 border-solid border-[6px] shadow-sm border-white-tint rounded-full"
        />
      </div>
      <h3 className="text-2xl font-medium font-ubuntu">{children}</h3>
      <div className="flex gap-8 items-center justify-center">
        <div className="flex flex-col text-sm items-center font-medium">
          <ClockIcon className="w-10 h-10 mb-3" />
          <p>Cooking time</p>
          <p className="font-semibold">{cookingTime} min</p>
        </div>
        <div className="w-[2px] rounded-[120px] h-32 bg-[#999]" />
        <div className="flex flex-col text-sm items-center font-medium">
          <FireIcon className="w-10 h-10 mb-3" />
          <p>Total calories</p>
          <p className="font-semibold">{calories} kcal</p>
        </div>
      </div>
    </li>
  );
}

export default RecipeCard;
