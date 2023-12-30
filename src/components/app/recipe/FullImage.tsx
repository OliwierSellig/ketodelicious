import LoadingSpinner from "@/components/global/LoadingSpinner";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface FullImageProps {
  image: string | StaticImageData;
}

function FullImage({ image }: FullImageProps) {
  const [hasLoadedImage, setHasLoadedImage] = useState(false);

  return (
    <>
      {!hasLoadedImage && (
        <div className="absolute left-0 top-0 z-[1300] flex h-full w-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      <div
        className={`absolute left-1/2 top-1/2  aspect-video max-h-[800px] w-11/12 max-w-[1600px] -translate-x-1/2 -translate-y-1/2 ${
          hasLoadedImage ? "z-[1400] animate-[scaleUpModal_0.6s]" : "z-[1200]"
        }  sm:aspect-square`}
      >
        <Image
          src={image}
          alt="Recipe"
          className="rounded-2xl object-cover"
          fill
          sizes="(max-width: 1760px) 90vw, 1600px"
          priority={true}
          onLoad={() => setHasLoadedImage(true)}
        />
      </div>
    </>
  );
}

export default FullImage;
