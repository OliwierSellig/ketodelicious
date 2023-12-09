import SectionHeading from "@/components/app/SectionHeading";
import RandomRecipeContainer from "@/components/app/random/RandomRecipeContainer";

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
