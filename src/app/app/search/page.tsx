import SectionHeading from "@/components/app/SectionHeading";
import SearchConfigurator from "@/components/app/search/SearchConfigurator";
import SearchRecipeList from "@/components/app/search/SearchRecipeList";
import { SearchProvider } from "@/context/SearchContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search for Recipe",
};

function page() {
  return (
    <>
      <SectionHeading>
        Search for <SectionHeading.Highlight>Recipes</SectionHeading.Highlight>
      </SectionHeading>
      <SearchProvider>
        <SearchConfigurator />
        <SearchRecipeList />
      </SearchProvider>
    </>
  );
}

export default page;
