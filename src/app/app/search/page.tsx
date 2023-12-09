import PaginationNavigation from "@/components/app/PaginationNavigation";
import SearchConfigurator from "@/components/app/search/SearchConfigurator";
import SearchRecipeList from "@/components/app/search/SearchRecipeList";

function page() {
  return (
    <>
      <h1 className="section-header">
        Search for <span className="text-jade-normal">recipes</span>
      </h1>
      <SearchConfigurator />
      <SearchRecipeList />
      <PaginationNavigation
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
