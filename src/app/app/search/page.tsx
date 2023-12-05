import SearchConfigurator from "@/components/app/search/SearchConfigurator";
import SearchRecipeList from "@/components/app/search/SearchRecipeList";

function page() {
  return (
    <main className="flex w-full flex-col px-16">
      <h1 className="section-header">
        Search for <span className="text-jade-normal">recipes</span>
      </h1>
      <SearchConfigurator />
      <SearchRecipeList />
    </main>
  );
}

export default page;
