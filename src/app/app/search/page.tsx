import PaginationNavigation from "@/components/app/search/PaginationNavigation";
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
      <PaginationNavigation
        additionalClass="self-center"
        currentSite={1}
        maxSite={7}
        nextUrl="/"
        prevUrl="/"
        canGoNext={false}
        canGoPrev={true}
      />
    </>
  );
}

export default page;
