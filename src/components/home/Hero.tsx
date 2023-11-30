import Image from "next/image";
import FilledButton from "../global/FilledButton";
import hero from "../../../public/images/hero.png";
import TextButton from "../global/TextButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section className="fixed-container grid grid-cols-5 items-center pt-28 pb-14">
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
        <div className="flex gap-10 items-center">
          <FilledButton size="lg" destination="/">
            Visit the app
          </FilledButton>
          <TextButton destination="/">
            <span className="font-medium ">Learn more</span>
            <ChevronRightIcon className="w-8 h-8 mt-[2px]" />
          </TextButton>
        </div>
      </div>
      <div className="col-span-2">
        <Image src={hero} alt="Woman ejnoying low-carb food" />
      </div>
    </section>
  );
}

export default Hero;
