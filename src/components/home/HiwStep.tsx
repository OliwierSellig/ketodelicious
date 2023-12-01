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
    <li className="grid items-center grid-cols-5 gap-20 lg:grid-cols-7 md:grid-cols-1 md:gap-0">
      {!reversed && (
        <div className="col-span-2 lg:col-span-3 md:w-3/5 md:justify-self-center sm:w-2/3 xsm:w-4/5 xxsm:w-full">
          <Image src={image} alt={title} />
        </div>
      )}
      <div className="col-span-3 lg:col-span-4">
        <p className="text-7xl mb-2 text-jade-normal font-kalam xsm:text-6xl">
          0{number}
        </p>
        <h3 className="text-4xl mb-4 font-medium font-ubuntu xsm:text-3xl">
          {title}
        </h3>
        <p className="text-xl lg:text-lg xsm:text-base">{children}</p>
      </div>
      {reversed && (
        <div className="col-span-2 lg:col-span-3 md:w-3/5 md:justify-self-center md:row-start-1 md:row-end-2 sm:w-2/3 xsm:w-4/5 xxsm:w-full">
          <Image src={image} alt={title} />
        </div>
      )}
    </li>
  );
}

export default HiwStep;
