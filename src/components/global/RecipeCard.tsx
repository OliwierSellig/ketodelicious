"use client";

import { useState } from "react";
import { ImageSizesProps } from "@/utils/utilTypes";
import Link from "next/link";
import Image from "next/image";
import previewDish from "../../../public/images/dish-1.jpg";
import RecipeCardDetails from "./RecipeCardDetails";
import LoadingSpinner from "./LoadingSpinner";

interface RecipeCardProps {
  additionalClass?: string;
  name?: string;
  image?: string;
  prepareTime?: number;
  calories?: number;
  id?: string;
  sizes: ImageSizesProps;
  tab?: boolean;
}

function RecipeCard({
  additionalClass = "",
  name = "",
  image,
  prepareTime,
  calories,
  id,
  sizes = { defaultSize: "50vw" },
  tab = true,
}: RecipeCardProps) {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const sizesString: string = sizes?.widthBase
    ? sizes.widthBase
        .map((size) => `(max-width: ${size.deviceWidth}px ${size.cardWidth})`)
        .join(", ")
        .concat(", ", sizes.defaultSize)
    : sizes.defaultSize;

  return (
    <Link
      tabIndex={tab ? 0 : -1}
      draggable={false}
      href={`/app/recipes/${id}`}
      className={`focus-scale-[103%] flex  w-full min-w-[300px]  max-w-[480px] flex-col items-center overflow-hidden rounded-2xl bg-white-tint shadow-recipe-input  transition-all duration-200 ease-linear hover:scale-[103%] [&:focus>div>h2]:text-jade-normal ${additionalClass}`}
    >
      <div className="relative aspect-video w-full bg-white-tint ">
        <div
          className={`recipe-image-clip relative h-full w-full transition-all duration-200 ease-linear  after:absolute after:left-0 after:top-0  after:z-50 after:h-full after:w-full after:content-[''] ${
            hasLoaded
              ? "after:bg-recipe-card-gradient"
              : "after:bg-recipe-card-gradient-loader"
          }`}
        >
          <Image
            alt={name}
            src={image || previewDish}
            fill
            className="object-cover"
            sizes={sizesString}
            onLoad={() => setHasLoaded(true)}
          />
          <div
            className={`absolute z-30 flex h-full w-full items-center justify-center bg-white-tint transition-all duration-200 ease-linear ${
              hasLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <LoadingSpinner size="md" />
          </div>
        </div>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center px-4 pb-4 pt-2 text-center">
        <h2 className="mb-2 text-xl font-medium transition-all duration-150 ease-linear xsm:text-lg">
          {name.slice(0, 40) === name ? name : name.slice(0, 40) + "..."}
        </h2>
        <RecipeCardDetails prepareTime={prepareTime} calories={calories} />
      </div>
    </Link>
  );
}

export default RecipeCard;
