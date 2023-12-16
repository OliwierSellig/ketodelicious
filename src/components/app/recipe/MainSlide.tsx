import {
  BellIcon,
  ClockIcon,
  NewspaperIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import OpenDescription from "./OpenDescription";

interface MainSlideProps {
  recipeName: string;
  desc: string;
  tagList: string[];
  cookingTime: number;
  prepareTime: number;
}

function MainSlide({
  recipeName,
  desc,
  tagList,
  cookingTime,
  prepareTime,
}: MainSlideProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className=" grid grid-cols-2 items-start  justify-between gap-8 xsm:grid-cols-1">
        <div className="col-span-1">
          <h2 className="mb-2 flex items-center gap-2 font-ubuntu text-2xl font-medium sm:text-xl ">
            <NewspaperIcon className="h-8 w-8 stroke-gray-tint-1 sm:h-7  sm:w-7" />
            <span>Description:</span>
          </h2>
          <p className="text-lg xxl:text-base sm:text-sm">
            <span>{desc.slice(0, 400)}... </span>
            <OpenDescription fullDesc={desc} recipeName={recipeName} />
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 flex items-center gap-2 font-ubuntu text-2xl font-medium sm:text-lg">
            <TagIcon className="h-8 w-8 stroke-gray-tint-1 sm:h-7 sm:w-7" />
            Related Tags:
          </h2>
          <ul className="flex flex-wrap gap-2">
            {tagList.map((tag, i) => (
              <li
                className="rounded-xl bg-almond-shade-1 px-4 py-2 text-lg sm:text-base xsm:px-4 xsm:py-2 xsm:text-sm"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12 pb-6 sm:gap-6 xsm:flex-col">
        <div className="flex items-center gap-2 text-xl sm:flex-col sm:gap-1 sm:text-lg">
          <p className="flex items-center gap-1">
            <ClockIcon className="h-8 w-8 stroke-gray-tint-1 sm:h-7 sm:w-7 " />
            <span className="font-medium">Cooking time:</span>
          </p>
          <span className=" font-bold">{cookingTime} min</span>
        </div>
        <div className="flex items-center gap-2 text-xl sm:flex-col sm:gap-1 sm:text-lg">
          <p className="flex items-center gap-1 ">
            <BellIcon className="h-8 w-8 stroke-gray-tint-1 sm:h-7 sm:w-7" />
            <span className="font-medium">Prepare time:</span>
          </p>
          <span className=" font-bold">{prepareTime} min</span>
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
