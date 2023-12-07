import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

interface PaginationNavigationProps {
  currentSite: number;
  maxSite: number;
  prevUrl: string;
  nextUrl: string;
  canGoNext: boolean;
  canGoPrev: boolean;
}

function PaginationNavigation({
  currentSite,
  maxSite,
  prevUrl,
  nextUrl,
  canGoNext,
  canGoPrev,
}: PaginationNavigationProps) {
  return (
    <nav className="flex items-center gap-3">
      <Link
        href={prevUrl}
        className={`rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoPrev ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronLeftIcon className="h-7 w-7 fill-white-normal" />
      </Link>
      <p className="text-xl font-medium">
        {currentSite} of {maxSite}
      </p>
      <Link
        href={nextUrl}
        tabIndex={canGoNext ? 0 : -1}
        className={` rounded-full bg-jade-shade-1 p-1 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
          !canGoNext ? "pointer-events-none opacity-20" : ""
        }`}
      >
        <ChevronRightIcon className="h-7 w-7 fill-white-normal" />
      </Link>
    </nav>
  );
}

export default PaginationNavigation;
