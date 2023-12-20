import SectionHeading from "@/components/app/SectionHeading";
import RandomRecipeContainer from "@/components/app/random/RandomRecipeContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Recipe",
};

function page() {
  return (
    <>
      <RandomRecipeContainer />
    </>
  );
}

export default page;
