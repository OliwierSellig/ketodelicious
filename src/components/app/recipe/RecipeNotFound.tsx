import FilledButton from "@/components/global/FilledButton";

function RecipeNotFound() {
  return (
    <div className=" flex w-full flex-grow animate-[fadeLeft_0.8s] flex-col items-center justify-center gap-12 text-center">
      <p className="text-3xl font-medium text-gray-tint-2 sm:text-2xl">
        We couldn&apos;t find recipe with this id, sorry...
      </p>
      <FilledButton destination="/app/search" size="xl">
        Search Recipes
      </FilledButton>
    </div>
  );
}

export default RecipeNotFound;
