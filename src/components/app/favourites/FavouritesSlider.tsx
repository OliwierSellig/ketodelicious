import { ReactNode } from "react";
import Slider from "../Slider";

interface FavouritesSliderProps {
  children: ReactNode;
  subheading: string;
  heading: string;
}

function FavouritesSlider({
  subheading,
  heading,
  children,
}: FavouritesSliderProps) {
  return (
    <li>
      <h2 className="mb-6 font-medium">
        <p className="animate-[fadeLeft_1.2s] text-lg text-jade-shade-2 xsm:text-base">
          {subheading}
        </p>
        <p className="animate-[fadeLeft_1s] font-ubuntu text-3xl xsm:text-2xl">
          {heading}
        </p>
      </h2>
      <Slider>{children}</Slider>
    </li>
  );
}

export default FavouritesSlider;
