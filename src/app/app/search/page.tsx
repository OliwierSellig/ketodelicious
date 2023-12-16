import SectionHeading from "@/components/app/SectionHeading";
import SearchConfigurator from "@/components/app/search/SearchConfigurator";
import SearchRecipeList from "@/components/app/search/SearchRecipeList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search for Reicpe",
};

function page() {
  return (
    <>
      <SectionHeading>
        Search for <SectionHeading.Highlight>Recipes</SectionHeading.Highlight>
      </SectionHeading>
      <SearchConfigurator />
      <SearchRecipeList />
    </>
  );
}

export default page;
