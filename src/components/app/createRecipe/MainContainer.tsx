import { useState } from "react";
import GeneralSlide from "./GeneralSlide";
import IngredientsSlide from "./IngredientsSlide";
import PreparationSlide from "./PreparationSlide";
import SlideSkeleton from "./SlideSkeleton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";
import SvgButton from "@/components/global/SvgButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function MainContainer() {
  const [iterator, setIterator] = useState<number>(0);

  return (
    <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-2xl  bg-almond-tint-2">
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <SlideSkeleton index={0} iterator={iterator}>
          <GeneralSlide />
        </SlideSkeleton>
        <SlideSkeleton index={1} iterator={iterator}>
          <IngredientsSlide />
        </SlideSkeleton>
        <SlideSkeleton index={2} iterator={iterator}>
          <PreparationSlide />
        </SlideSkeleton>
      </div>

      {iterator !== 0 && (
        <SvgButton
          label="Go to the next frame"
          additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          handleClick={() => setIterator((prev) => prev - 1)}
        >
          <ChevronUpIcon className="h-10 w-10 fill-white-normal" />
        </SvgButton>
      )}
      {iterator !== 2 ? (
        <SvgButton
          label="Go to the previous frame"
          handleClick={() => setIterator((prev) => prev + 1)}
          additionalClass="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <ChevronDownIcon className="h-10 w-10 fill-white-normal" />
        </SvgButton>
      ) : (
        <FilledButton
          size="xl"
          additionalClass="px-24 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <span>Create Recipe</span>
          <CheckCircleIcon className="h-8 w-8 stroke-white-normal" />
        </FilledButton>
      )}
    </div>
  );
}

export default MainContainer;
