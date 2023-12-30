import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface HiwStepProps {
  children: ReactNode;
  number: string;
  title: string;
  image: StaticImageData;
  reversed: boolean;
}

function HiwStep({ children, number, title, image, reversed }: HiwStepProps) {
  return (
    <li className="grid grid-cols-5 items-center gap-20 lg:grid-cols-7 md:grid-cols-1 md:gap-0">
      {!reversed && (
        <div className="col-span-2 animate-[fadeLeft_1.4s] lg:col-span-3 md:w-3/5 md:justify-self-center sm:w-2/3 xsm:w-4/5 xxsm:w-full">
          <Image src={image} alt={title} />
        </div>
      )}
      <div
        className={`col-span-3 lg:col-span-4 ${
          reversed ? "animate-[fadeLeft_1.8s]" : "animate-[fadeRight_1.8s]"
        }`}
      >
        <p className="mb-2 font-kalam text-7xl text-jade-normal xsm:text-6xl">
          0{number}
        </p>
        <h3 className="mb-4 font-ubuntu text-4xl font-medium xsm:text-3xl">
          {title}
        </h3>
        <p className="text-xl lg:text-lg xsm:text-base">{children}</p>
      </div>
      {reversed && (
        <div className="col-span-2 animate-[fadeRight_1.4s] lg:col-span-3 md:row-start-1 md:row-end-2 md:w-3/5 md:justify-self-center sm:w-2/3 xsm:w-4/5 xxsm:w-full">
          <Image src={image} alt={title} />
        </div>
      )}
    </li>
  );
}

export default HiwStep;
