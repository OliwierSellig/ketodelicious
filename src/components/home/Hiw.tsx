import SectionHeader from "./SectionHeader";
import hiw1 from "../../../public/images/hiw-1.png";
import hiw2 from "../../../public/images/hiw-2.png";
import hiw3 from "../../../public/images/hiw-3.png";
import HiwStep from "./HiwStep";

function Hiw() {
  return (
    <section id="hiw" className="py-14 fixed-container md:py-12">
      <SectionHeader subtitle="How it works">
        From an idea, to a tasty pleasure
      </SectionHeader>
      <ul className="flex flex-col lg:gap-4 md:gap-12">
        <HiwStep
          reversed={false}
          image={hiw1}
          number="1"
          title="Search a desired recipe"
        >
          Start your culinary journey by finding the perfect recipe. Use our
          user-friendly search to discover a variety of options tailored to your
          taste and dietary preferences.
        </HiwStep>
        <HiwStep
          reversed={true}
          image={hiw2}
          number="2"
          title="Cook with a smile"
        >
          Follow our step-by-step instructions and clear guides to cook with
          confidence and joy. Whether you're a seasoned chef or a kitchen
          novice, enjoy the process of bringing your chosen recipe to life.
        </HiwStep>
        <HiwStep
          reversed={false}
          image={hiw3}
          number="3"
          title="Enjoy a healthy meal"
        >
          Savor the flavors of your delicious, home-cooked meal. Whether shared
          with loved ones or enjoyed solo, relish the satisfaction of nourishing
          your body with a tasty, wholesome dish that you prepared with a smile.
        </HiwStep>
      </ul>
    </section>
  );
}

export default Hiw;
