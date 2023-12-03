import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface RecipeCardProps {
  image: StaticImageData;
  children: ReactNode;
  cookingTime: number;
  calories: number;
  index: number;
  iterator: number;
}

function RecipeCard({
  image,
  children,
  cookingTime,
  calories,
  index,
  iterator,
}: RecipeCardProps) {
  const active = iterator === index;
  const pos = active
    ? { left: "50%" }
    : index < iterator
    ? { left: `${(index + 1 - iterator) * 100}%` }
    : {
        left: `${(index - iterator) * 100}%`,
        transform: "translate(-100%, -50%) scale(0.9)",
      };

  return (
    <div
      style={pos}
      className={`flex flex-col text-center px-7 pb-5 w-[360px] min-h-[360px] pt-36 bg-white-tint rounded-xl justify-between gap-4 absolute top-1/2 -translate-y-1/2 transition-all duration-[1000ms] ease-in-out   ${
        active
          ? "scale-105 -translate-x-1/2 z-20"
          : "grayscale-[80%] opacity-70 blur-[2px] scale-90 select-none z-10 sm:scale-60"
      }  sm:w-full min-h-[360px] xsm:px-3`}
    >
      <div
        style={{ width: "176px", height: "176px" }}
        className="absolute top-0 left-2/4 -translate-x-1/2 -translate-y-1/4"
      >
        <Image
          src={image}
          alt=""
          className="object-cover w-33 h-44 border-solid border-[6px] shadow-sm border-white-tint rounded-full"
        />
      </div>
      <h3 className="text-2xl font-medium font-ubuntu xsm:text-xl">
        {active ? (
          <Link
            href="/"
            className="block hover:text-jade-normal focus:text-jade-normal hover:scale-105 focus:scale-105 transition-all ease-linear duration-150"
          >
            {children}
          </Link>
        ) : (
          <span>{children}</span>
        )}
      </h3>
      <div className="flex gap-8 items-center justify-center xsm:gap-4">
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
