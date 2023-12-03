import Image from "next/image";
import hero from "../../../../public/images/hero.png";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section
      id="hero"
      className="fixed-container grid grid-cols-7 items-center pt-44 pb-14 md:grid-cols-1 md:pt-20 md:pb-8"
    >
      <div className="col-span-4">
        <h1 className="mb-6 font-ubuntu md:mb-4 animate-[fadeLeft_1s]">
          <p className="text-5xl font-semibold mb-1 lg:text-4xl xxsm:text-3xl">
            Crave Less, Live More:
          </p>
          <p className="text-4xl font-semibold lg:text-3xl xsm:text-2xl xxsm:text-xl">
            Your <span className="text-jade-normal">Low-Carb</span> Adventure
            Starts Here!
          </p>
        </h1>
        <p className="text-xl mb-8 w-[85%] lg:text-lg md:w-full xsm:text-base animate-[fadeLeft_1.2s]">
          Explore a world where delicious meets nutritious, taking every bite
          closer to your health and wellness goals. Redefine your culinary
          journey with mouthwatering recipes, satisfying cravings without
          compromising flavor. Embrace a lifestyle that's both delicious and
          mindful.
        </p>
        <HeroButtons />
      </div>
      <div className="col-span-3 md:row-start-1 md:row-end-2 md:w-4/5 md:justify-self-center sm:w-full animate-[fadeIn_1.6s]">
        <Image src={hero} alt="Woman ejnoying low-carb food" />
      </div>
    </section>
  );
}

export default Hero;
