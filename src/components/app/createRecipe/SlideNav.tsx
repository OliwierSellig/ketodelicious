import {
  ArrowPathIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useCreateRecipe } from "@/context/CreateRecipeContext";
import { useUser } from "@/context/UserContext";
import toast from "react-hot-toast";
import FilledButton from "@/components/global/FilledButton";
import SvgButton from "@/components/global/SvgButton";

function SlideNav() {
  const { checkInCreated } = useUser();
  const {
    state: recipes,
    canModifyIterator,
    checkWindowsOpen,
    decrementIterator,
    incrementIterator,
    modifyWindow,
    canProceed,
  } = useCreateRecipe();

  if (!checkWindowsOpen())
    return (
      <>
        {canModifyIterator("decrement") ? (
          <SvgButton
            label="Go to the previous frame"
            additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            handleClick={decrementIterator}
          >
            <ChevronUpIcon className="h-10 w-10 fill-white-normal" />
          </SvgButton>
        ) : (
          <SvgButton
            label="Reset state"
            additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 [&:focus>svg]:rotate-[360deg]"
            handleClick={() => modifyWindow("open", { name: "reset" })}
          >
            <ArrowPathIcon className="h-10 w-10 fill-white-normal transition-all duration-200 ease-in-out hover:rotate-[360deg]" />
          </SvgButton>
        )}
        {canModifyIterator("increment") ? (
          <SvgButton
            disabled={
              recipes.iterator === 0
                ? !canProceed("general")
                : !canProceed("ingredients")
            }
            label="Go to the next frame"
            handleClick={() => {
              if (checkInCreated(recipes.name)) {
                toast.error("You've already created a recipe with that name!");
                return;
              } else {
                incrementIterator();
              }
            }}
            additionalClass="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <ChevronDownIcon className="h-10 w-10 fill-white-normal" />
          </SvgButton>
        ) : (
          <FilledButton
            disabled={!canProceed("create")}
            size="xl"
            additionalClass="px-24 mdl:w-2/3 mdl:justify-center sm:px-0 xsm:w-3/4  absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            handleClick={() => modifyWindow("open", { name: "create" })}
          >
            <span className="sm:text-xl">Create Recipe</span>
            <CheckCircleIcon className="h-8 w-8 stroke-white-normal sm:h-7 sm:w-7" />
          </FilledButton>
        )}
      </>
    );
}

export default SlideNav;
