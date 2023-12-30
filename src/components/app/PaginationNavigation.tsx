"use client";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

interface PaginationNavigationProps {
  currentSite: number;
  maxSite: number;
  handleNext: Function;
  handlePrev: Function;
  canGoNext: boolean;
  canGoPrev: boolean;
  additionalClass?: string;
}

function PaginationNavigation({
  additionalClass = "",
  currentSite,
  handleNext,
  handlePrev,
  maxSite,
  canGoNext,
  canGoPrev,
}: PaginationNavigationProps) {
  return (
    <nav
      className={`flex animate-[fadeBottom_0.8s] items-center gap-3 ${additionalClass}`}
    >
      <button
        onClick={() => handlePrev()}
        disabled={!canGoPrev}
        aria-label="See Previous"
        className={`rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoPrev ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronLeftIcon className="h-7 w-7 fill-white-normal xxsm:h-6 xxsm:w-6" />
      </button>
      <p className="text-xl font-medium xsm:text-lg">
        {currentSite} of {maxSite}
      </p>
      <button
        onClick={() => handleNext()}
        disabled={!canGoNext}
        aria-label="See Next"
        className={` rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoNext ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronRightIcon className="h-7 w-7 fill-white-normal xxsm:h-6 xxsm:w-6" />
      </button>
    </nav>
  );
}

export default PaginationNavigation;
