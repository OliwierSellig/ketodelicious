import SectionHeading from "@/components/app/SectionHeading";
import SearchConfigurator from "@/components/app/search/SearchConfigurator";
import SearchRecipeList from "@/components/app/search/SearchRecipeList";

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
