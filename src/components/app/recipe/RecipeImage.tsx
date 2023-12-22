"use client";

import Modal from "@/components/global/Modal";
import FullImage from "./FullImage";
import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "@/components/global/LoadingSpinner";

interface RecipeImageProps {
  image: string;
  recipeName: string;
}

function RecipeImage({ image, recipeName }: RecipeImageProps) {
  const [hasLoadedImage, setHasLoadedImage] = useState(false);

  return (
    <div className="mb-2 w-full">
      <Modal>
        <Modal.Open opens="recipe-image">
          <button
            disabled={!hasLoadedImage}
            className="recipe-view-clip  relative z-20 flex aspect-[5/2]  h-full min-h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl px-12 py-4  lg:aspect-[2/1] md:h-[30vh]  md:rounded-none [&:focus>div]:scale-110 [&:hover>div]:scale-110"
          >
            <div
              className={`after:bg-recipe-view-gradient absolute left-0 top-0 z-10 h-full w-full transition-all duration-150 ease-linear after:absolute after:left-0 after:top-0 after:z-30 after:h-full after:w-full after:content-[''] ${
                hasLoadedImage ? "animate-[fadeLeft_0.6s]" : ""
              }`}
            >
              <Image
                alt=""
                className="z-30 object-cover"
                src={image}
                fill
                sizes="60vw"
                onLoad={() => setHasLoadedImage(true)}
              />
            </div>
            <h1
              className={`z-40 font-kalam text-6xl font-bold text-white-tint md:animate-[fadeLeft_1s] md:text-4xl`}
            >
              {recipeName}
            </h1>
            {!hasLoadedImage && (
              <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-almond-shade-1">
                <LoadingSpinner size="md" />
              </div>
            )}
          </button>
        </Modal.Open>
        <Modal.Window name="recipe-image">
          <FullImage image={image} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default RecipeImage;
