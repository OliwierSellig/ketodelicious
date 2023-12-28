import FilledButton from "@/components/global/FilledButton";
import SvgButton from "@/components/global/SvgButton";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function SlideNav() {
  const {
    state: recipes,
    canModifyIterator,
    checkWindowsOpen,
    decrementIterator,
    incrementIterator,
    canProceed,
  } = useCreateRecipe();

  if (!checkWindowsOpen())
    return (
      <>
        {canModifyIterator("decrement") && (
          <SvgButton
            label="Go to the previous frame"
            additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            handleClick={decrementIterator}
          >
            <ChevronUpIcon className="h-10 w-10 fill-white-normal" />
          </SvgButton>
        )}
        {canModifyIterator("increment") ? (
          <SvgButton
            disabled={false}
            label="Go to the next frame"
            handleClick={incrementIterator}
            additionalClass="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <ChevronDownIcon className="h-10 w-10 fill-white-normal" />
          </SvgButton>
        ) : (
          <FilledButton
            size="xl"
            additionalClass="px-24 mdl:w-2/3 mdl:justify-center sm:px-0 xsm:w-3/4  absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <span className="sm:text-xl">Create Recipe</span>
            <CheckCircleIcon className="h-8 w-8 stroke-white-normal sm:h-7 sm:w-7" />
          </FilledButton>
        )}
      </>
    );
}

export default SlideNav;
