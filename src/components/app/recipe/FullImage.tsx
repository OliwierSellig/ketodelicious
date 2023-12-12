import Image from "next/image";
import dish from "../../../../public/images/dish-1.jpg";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface FullImageProps {
  onCloseModal: () => void;
}

function FullImage({ onCloseModal }: FullImageProps) {
  return (
    <div className="absolute left-1/2 top-1/2  z-[1200] w-4/5 max-w-[1600px] -translate-x-1/2 -translate-y-1/2 animate-[scaleUpModal_0.6s]">
      <Image
        src={dish}
        alt="Recipe"
        className="h-full w-full rounded-2xl object-cover  shadow-sm"
        priority={true}
      />
    </div>
  );
}

export default FullImage;
