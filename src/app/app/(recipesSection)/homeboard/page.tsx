import HomeBoardBackground from "@/components/app/homeboard/HomeBoardBackground";
import HomeboardContainer from "@/components/app/homeboard/HomeboardContainer";
import WelcomeHeading from "@/components/app/homeboard/WelcomeHeading";
import HomeNav from "@/components/app/homeboard/HomeNav";
import ProfileLink from "@/components/app/homeboard/ProfileLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homeboard",
};

function page() {
  return (
    <>
      <HomeboardContainer>
        <WelcomeHeading />
        <HomeNav />
        <ProfileLink />
      </HomeboardContainer>
      <HomeBoardBackground />
    </>
  );
}

export default page;
