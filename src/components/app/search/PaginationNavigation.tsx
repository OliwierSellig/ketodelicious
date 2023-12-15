import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

interface PaginationNavigationProps {
  currentSite: number;
  maxSite: number;
  prevUrl: string;
  nextUrl: string;
  canGoNext: boolean;
  canGoPrev: boolean;
  additionalClass?: string;
}

function PaginationNavigation({
  additionalClass = "",
  currentSite,
  maxSite,
  prevUrl,
  nextUrl,
  canGoNext,
  canGoPrev,
}: PaginationNavigationProps) {
  return (
    <nav className={`flex items-center gap-3 ${additionalClass}`}>
      <Link
        href={prevUrl}
        className={`rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoPrev ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronLeftIcon className="h-7 w-7 fill-white-normal xxsm:h-6 xxsm:w-6" />
      </Link>
      <p className="text-xl font-medium xsm:text-lg">
        {currentSite} of {maxSite}
      </p>
      <Link
        href={nextUrl}
        tabIndex={canGoNext ? 0 : -1}
        className={` rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoNext ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronRightIcon className="h-7 w-7 fill-white-normal xxsm:h-6 xxsm:w-6" />
      </Link>
    </nav>
  );
}

export default PaginationNavigation;
