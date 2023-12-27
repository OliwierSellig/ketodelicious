"use client";
import Modal from "@/components/global/Modal";
import FullImage from "./FullImage";
import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFull } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useUser } from "@/context/UserContext";
import { RecipeItemProp } from "@/utils/utilTypes";

interface RecipeImageProps {
  recipe: RecipeItemProp;
}

function RecipeImage({ recipe }: RecipeImageProps) {
  const { checkIsFavourite, addToBookmarked } = useUser();
  const [hasLoadedImage, setHasLoadedImage] = useState(false);
  const isFav = checkIsFavourite(recipe.id);

  return (
    <div className="relative mb-2 w-full">
      <Modal>
        <Modal.Open opens="recipe-image">
          <button
            disabled={!hasLoadedImage}
            className="recipe-view-clip  relative z-20 flex aspect-[5/2]  h-full min-h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl px-12 py-4  lg:aspect-[2/1] md:h-[30vh]  md:rounded-none [&:focus>div]:scale-110 [&:hover>div]:scale-110"
          >
            <div
              className={`absolute left-0 top-0 z-10 h-full w-full transition-all duration-150 ease-linear after:absolute after:left-0 after:top-0 after:z-30 after:h-full after:w-full after:bg-recipe-view-gradient after:content-[''] ${
                hasLoadedImage ? "animate-[fadeLeft_0.6s]" : ""
              }`}
            >
              <Image
                alt=""
                className="z-30 object-cover"
                src={recipe.image}
                fill
                sizes="60vw"
                onLoad={() => setHasLoadedImage(true)}
              />
            </div>
            <h1
              className={`z-40 font-kalam text-6xl font-bold text-white-tint md:animate-[fadeLeft_1s] md:text-4xl`}
            >
              {recipe.name}
            </h1>
            {!hasLoadedImage && (
              <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-almond-shade-1">
                <LoadingSpinner size="md" />
              </div>
            )}
          </button>
        </Modal.Open>
        <Modal.Window name="recipe-image">
          <FullImage image={recipe.image} />
        </Modal.Window>
      </Modal>
      <div className="absolute  right-8 top-0 z-50 rounded-bl-2xl rounded-br-2xl bg-jade-shade-2 p-2 pt-6">
        <button
          onClick={() => {
            if (!isFav) {
              addToBookmarked(recipe, true, "favored");
              toast.success("Succesfully added as favourite");
            } else {
              addToBookmarked(recipe, false, "unfavored");
              toast.success("Succesfully removed as favourite");
            }
          }}
          className="[&:focus>svg]:scale-105 [&:hover>svg]:scale-105"
          aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        >
          {isFav ? (
            <HeartIconFull className="h-10 w-10 animate-[scaleUp_0.4s] fill-white-normal transition-all duration-200 ease-linear sm:h-8 sm:w-8" />
          ) : (
            <HeartIcon className="h-10 w-10 stroke-white-normal transition-all  duration-200 ease-linear sm:h-8 sm:w-8" />
          )}
        </button>
      </div>
    </div>
  );
}

export default RecipeImage;
