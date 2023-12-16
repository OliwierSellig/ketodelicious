import SectionHeading from "@/components/app/SectionHeading";
import RandomRecipeContainer from "@/components/app/random/RandomRecipeContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Recipe",
};

function page() {
  return (
    <>
      <SectionHeading>
        <SectionHeading.Highlight>Random</SectionHeading.Highlight> Recipe
      </SectionHeading>
      <RandomRecipeContainer />
    </>
  );
}

export default page;
