import {
  BellIcon,
  ClockIcon,
  NewspaperIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

interface MainSlideProps {
  desc: string;
  tagList: string[];
  cookingTime: number;
  prepareTime: number;
}

function MainSlide({
  desc,
  tagList,
  cookingTime,
  prepareTime,
}: MainSlideProps) {
  return (
    <div className="flexflex-col">
      <div className="mb-20 grid grid-cols-2 items-start  justify-between gap-8">
        <div className="col-span-1">
          <h2 className="mb-2 flex gap-2 font-ubuntu text-2xl font-medium ">
            <NewspaperIcon className="h-8 w-8 stroke-gray-tint-1" />
            <span>Description:</span>
          </h2>
          <p className="text-lg">
            <span>{desc.slice(0, 400)}... </span>
            <button className="text-jade-shade-2 transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-normal focus:scale-105 focus:text-jade-normal">
              Read more
            </button>
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 flex gap-2 font-ubuntu text-2xl font-medium">
            <TagIcon className="h-8 w-8 stroke-gray-tint-1" />
            Related Tags:
          </h2>
          <ul className="flex flex-wrap gap-2">
            {tagList.map((tag, i) => (
              <li
                className="rounded-xl bg-almond-shade-1 px-4 py-2 text-lg"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12">
        <p className="flex items-center gap-1 text-xl">
          <ClockIcon className="h-8 w-8 stroke-gray-tint-1" />
          <span className="font-medium">Cooking time:</span>
          <span className="pl-2 font-bold">{cookingTime} min</span>
        </p>
        <p className="flex items-center gap-1 text-xl">
          <BellIcon className="h-8 w-8 stroke-gray-tint-1" />
          <span className="font-medium">Prepare time:</span>
          <span className="pl-1 font-bold">{prepareTime} min</span>
        </p>
      </div>
    </div>
  );
}

export default MainSlide;
