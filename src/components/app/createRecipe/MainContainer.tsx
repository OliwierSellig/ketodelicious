"use client";

import GeneralSlide from "./general/GeneralSlide";
import IngredientsSlide from "./ingredients/IngredientsSlide";
import PreparationSlide from "./preparation/PreparationSlide";
import SlideSkeleton from "./SlideSkeleton";
import SlideNav from "./SlideNav";
import AddWindows from "./AddWindows";

interface MainContainerProps {
  onCloseModal: () => void;
}

function MainContainer({ onCloseModal }: MainContainerProps) {
  return (
    <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 min-w-[1200px] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 animate-[fadeLeftModal_1s] rounded-2xl bg-almond-tint-2  xl:h-3/4 xl:w-[96%] xl:min-w-0">
      <div className="relative h-full w-full overflow-clip rounded-2xl">
        <SlideSkeleton index={0}>
          <GeneralSlide />
        </SlideSkeleton>
        <SlideSkeleton index={1}>
          <IngredientsSlide />
        </SlideSkeleton>
        <SlideSkeleton index={2}>
          <PreparationSlide />
        </SlideSkeleton>
      </div>
      <AddWindows closeModal={onCloseModal} />
      <SlideNav />
    </div>
  );
}

export default MainContainer;
