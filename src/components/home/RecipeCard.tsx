import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ClockIcon, FireIcon } from "@heroicons/react/24/outline";

interface RecipeCardProps {
  image: StaticImageData;
  children: ReactNode;
  cookingTime: number;
  calories: number;
  index: number;
  pos: number;
  iterator: number;
}

function RecipeCard({
  image,
  children,
  cookingTime,
  calories,
  index,
  pos,
  iterator,
}: RecipeCardProps) {
  const active = iterator === index;

  return (
    <div
      style={{ left: active ? "50%" : `${pos}%` }}
      className={`${pos} flex flex-col text-center px-7 pb-5 w-[360px] h-[360px] pt-36 bg-white-tint rounded-xl justify-between gap-4 absolute top-1/2 -translate-y-1/2   ${
        active
          ? "scale-105 left-1/2 -translate-x-1/2 "
          : "grayscale-[80%] opacity-70 blur-[2px] scale-90 "
      }`}
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
    </div>
  );
}

export default RecipeCard;
