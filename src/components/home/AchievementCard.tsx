import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import AchievementNumber from "./AchievementNumber";

interface AchievementCardProps {
  number: number;
  children: ReactNode;
  image: StaticImageData;
}

function AchievementCard({ children, number, image }: AchievementCardProps) {
  return (
    <li className="flex flex-col rounded-2xl text-center bg-almond-normal shadow-sm px-4 pb-8 items-center mdl:px-2 mdl:pb-6 md:max-w-lg md:self-center">
      <div className="md:w-4/5 xsm:w-full">
        <Image src={image} alt="" />
      </div>
      <AchievementNumber number={number} />
      <p className="text-lg font-medium w-4/5 mdl:w-full">{children}</p>
    </li>
  );
}

export default AchievementCard;
