import { useState } from "react";
import GeneralSlide from "./general/GeneralSlide";
import IngredientsSlide from "./ingredients/IngredientsSlide";
import PreparationSlide from "./preparation/PreparationSlide";
import SlideSkeleton from "./SlideSkeleton";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";
import SvgButton from "@/components/global/SvgButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import AddTag from "./general/AddTag";

function MainContainer() {
  const [iterator, setIterator] = useState<number>(0);
  const [addTagWindow, setAddTagWindow] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([
    "green",
    "yellow",
    "blue",
    "sugar-free",
  ]);

  function removeTag(tag: string) {
    const filteredTags = tags.filter((t) => t !== tag);
    setTags(filteredTags);
  }

  function addTag(query: string) {
    setTags((prev) => [...prev, query]);
  }

  return (
    <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 min-w-[1000px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-2xl  bg-almond-tint-2">
      <div className="relative h-full w-full overflow-clip rounded-2xl">
        <SlideSkeleton index={0} iterator={iterator}>
          <GeneralSlide
            removeTag={removeTag}
            tags={tags}
            openAddTagWindow={() => setAddTagWindow(true)}
          />
        </SlideSkeleton>
        <SlideSkeleton index={1} iterator={iterator}>
          <IngredientsSlide />
        </SlideSkeleton>
        <SlideSkeleton index={2} iterator={iterator}>
          <PreparationSlide />
        </SlideSkeleton>
      </div>

      {addTagWindow && (
        <AddTag
          handleAdd={addTag}
          handleReturn={() => setAddTagWindow(false)}
        />
      )}

      {iterator !== 0 && (
        <SvgButton
          label="Go to the previous frame"
          additionalClass="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          handleClick={() => setIterator((prev) => prev - 1)}
        >
          <ChevronUpIcon className="h-10 w-10 fill-white-normal" />
        </SvgButton>
      )}
      {!addTagWindow ? (
        iterator !== 2 ? (
          <SvgButton
            label="Go to the next frame"
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
        )
      ) : null}
    </div>
  );
}

export default MainContainer;
