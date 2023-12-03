import AchievementCard from "./AchievementCard";
import SectionHeader from "../SectionHeader";
import ac1 from "../../../../public/images/ac-1.png";
import ac2 from "../../../../public/images/ac-2.png";
import ac3 from "../../../../public/images/ac-3.png";

function Achievements() {
  return (
    <section
      id="achievements"
      className="fixed-container pt-14 pb-28 md:pb-20 md:pt-10"
    >
      <SectionHeader subtitle="Achievements">
        What we've achieved so far
      </SectionHeader>
      <ul className="flex py-4 gap-4 md:flex-col md:px-6 md:gap-6 xsm:px-2">
        <AchievementCard number={100000} image={ac1}>
          Registered users from all around the world
        </AchievementCard>
        <AchievementCard number={12000} image={ac2}>
          Unique recipes from almost every cousine
        </AchievementCard>
        <AchievementCard number={140} image={ac3}>
          New recipes added every single day
        </AchievementCard>
      </ul>
    </section>
  );
}

export default Achievements;
