import Image from "next/image";
import hero from "../../../../public/images/hero.png";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section
      id="hero"
      className="fixed-container grid grid-cols-7 items-center pb-14 pt-44 md:grid-cols-1 md:pb-8 md:pt-20"
    >
      <div className="col-span-4">
        <h1 className="mb-6 animate-[fadeLeft_1s] font-ubuntu md:mb-4">
          <p className="mb-1 text-5xl font-semibold lg:text-4xl xxsm:text-3xl">
            Crave Less, Live More:
          </p>
          <p className="text-4xl font-semibold lg:text-3xl xsm:text-2xl xxsm:text-xl">
            Your <span className="text-jade-normal">Low-Carb</span> Adventure
            Starts Here!
          </p>
        </h1>
        <p className="mb-8 w-[85%] animate-[fadeLeft_1.2s] text-xl lg:text-lg md:w-full xsm:text-base">
          Explore a world where delicious meets nutritious, taking every bite
          closer to your health and wellness goals. Redefine your culinary
          journey with mouthwatering recipes, satisfying cravings without
          compromising flavor. Embrace a lifestyle that&apos;s both delicious
          and mindful.
        </p>
        <HeroButtons />
      </div>
      <div className="col-span-3 animate-[fadeBottom_1.2s] md:row-start-1 md:row-end-2 md:w-4/5 md:justify-self-center sm:w-full">
        <Image src={hero} priority={true} alt="Woman ejnoying low-carb food" />
      </div>
    </section>
  );
}

export default Hero;
