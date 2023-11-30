import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface HiwStepProps {
  children: ReactNode;
  number: string;
  title: string;
  image: StaticImageData;
  reversed: boolean;
}

function HiwStep({ children, number, title, image, reversed }: HiwStepProps) {
  return (
    <li className="grid items-center grid-cols-5 gap-20">
      {!reversed && (
        <div className="col-span-2">
          <Image src={image} alt={title} />
        </div>
      )}
      <div className="col-span-3">
        <p className="text-7xl mb-2 text-jade-normal font-kalam">0{number}</p>
        <h3 className="text-4xl mb-4 font-medium font-ubuntu">{title}</h3>
        <p className="text-xl">{children}</p>
      </div>
      {reversed && (
        <div className="col-span-2">
          <Image src={image} alt={title} />
        </div>
      )}
    </li>
  );
}

export default HiwStep;
