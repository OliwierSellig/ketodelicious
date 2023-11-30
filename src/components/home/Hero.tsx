import Image from "next/image";
import hero from "../../../public/images/hero.png";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section
      id="hero"
      className="fixed-container grid grid-cols-5 items-center pt-44 pb-14"
    >
      <div className="col-span-3">
        <h1 className="mb-6 font-ubuntu">
          <p className="text-5xl font-semibold mb-1">Crave Less, Live More:</p>
          <p className="text-4xl font-semibold">
            Your <span className="text-jade-normal">Low-Carb</span> Adventure
            Starts Here!
          </p>
        </h1>
        <p className="text-xl mb-8 w-[85%]">
          Explore a world where delicious meets nutritious, taking every bite
          closer to your health and wellness goals. Redefine your culinary
          journey with mouthwatering recipes, satisfying cravings without
          compromising flavor. Embrace a lifestyle that's both delicious and
          mindful.
        </p>
        <HeroButtons />
      </div>
      <div className="col-span-2">
        <Image src={hero} alt="Woman ejnoying low-carb food" />
      </div>
    </section>
  );
}

export default Hero;
