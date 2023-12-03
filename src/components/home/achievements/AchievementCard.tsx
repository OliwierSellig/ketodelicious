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
    <li className="flex animate-[fadeBottom_1.4s] flex-col items-center rounded-2xl bg-almond-normal px-4 pb-8 text-center shadow-sm mdl:px-2 mdl:pb-6 md:max-w-lg md:self-center">
      <div className="md:w-4/5 xsm:w-full">
        <Image src={image} alt="" />
      </div>
      <AchievementNumber number={number} />
      <p className="w-4/5 text-lg font-medium mdl:w-full">{children}</p>
    </li>
  );
}

export default AchievementCard;
