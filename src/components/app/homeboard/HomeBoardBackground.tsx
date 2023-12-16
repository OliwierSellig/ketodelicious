import Image from "next/image";
import homeImage from "../../../../public/images/homeboard.png";

function HomeBoardBackground() {
  return (
    <Image
      src={homeImage}
      alt=""
      className="absolute bottom-0 left-0 aspect-square w-[50%] max-w-[800px] animate-[scaleOpacity_1s] sm:hidden"
    />
  );
}

export default HomeBoardBackground;
