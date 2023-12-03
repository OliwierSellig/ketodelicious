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
      className={`absolute top-1/2 flex min-h-[360px] w-[360px] -translate-y-1/2 flex-col justify-between gap-4 rounded-xl bg-white-tint px-7 pb-5 pt-36 text-center transition-all duration-[1000ms] ease-in-out   ${
        active
          ? "z-20 -translate-x-1/2 scale-105"
          : "sm:scale-60 z-10 scale-90 select-none opacity-70 blur-[2px] grayscale-[80%]"
      }  min-h-[360px] sm:w-full xsm:px-3`}
    >
      <div
        style={{ width: "176px", height: "176px" }}
        className="absolute left-2/4 top-0 -translate-x-1/2 -translate-y-1/4"
      >
        <Image
          src={image}
          alt=""
          className="w-33 h-44 rounded-full border-[6px] border-solid border-white-tint object-cover shadow-sm"
        />
      </div>
      <h3 className="font-ubuntu text-2xl font-medium xsm:text-xl">
        {active ? (
          <Link
            href="/"
            className="block transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-normal focus:scale-105 focus:text-jade-normal"
          >
            {children}
          </Link>
        ) : (
          <span>{children}</span>
        )}
      </h3>
      <div className="flex items-center justify-center gap-8 xsm:gap-4">
        <div className="flex flex-col items-center text-sm font-medium">
          <ClockIcon className="mb-3 h-10 w-10" />
          <p>Cooking time</p>
          <p className="font-semibold">{cookingTime} min</p>
        </div>
        <div className="h-32 w-[2px] rounded-[120px] bg-[#999]" />
        <div className="flex flex-col items-center text-sm font-medium">
          <FireIcon className="mb-3 h-10 w-10" />
          <p>Total calories</p>
          <p className="font-semibold">{calories} kcal</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
