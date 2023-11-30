import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface AchievementCardProps {
  number: number;
  children: ReactNode;
  image: StaticImageData;
}

function AchievementCard({ children, number, image }: AchievementCardProps) {
  return (
    <li className="flex flex-col rounded-2xl text-center bg-almond-normal shadow-sm px-4 pb-8 items-center">
      <div>
        <Image src={image} alt="" />
      </div>
      <h3 className="text-4xl font-bold font-ubuntu mb-1">{number}+</h3>
      <p className="text-lg font-medium w-4/5">{children}</p>
    </li>
  );
}

export default AchievementCard;
