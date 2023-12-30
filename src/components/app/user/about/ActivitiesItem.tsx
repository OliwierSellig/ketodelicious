import {
  PlusCircleIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  MinusCircleIcon,
  XCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ActivityProp } from "@/utils/utilTypes";
import Link from "next/link";

interface ActivityItemProps {
  activity: ActivityProp;
}

function ActivitiesItem({ activity }: ActivityItemProps) {
  function getIcon() {
    switch (activity.action) {
      case "bookmarked":
        return <BookmarkIcon />;
      case "unbookmarked":
        return <BookmarkSlashIcon />;
      case "created":
        return <PlusCircleIcon />;
      case "deleted":
        return <MinusCircleIcon />;
      case "favored":
        return <HeartIcon />;
      case "unfavored":
        return <XCircleIcon />;
      default:
        throw new Error("Icon not defined");
    }
  }

  return (
    <li className="flex items-center gap-2 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-gray-tint-1  ">
      {getIcon()}
      <p className=" text-lg font-medium text-gray-tint-1 sm:text-base">
        <span>{activity.date}: </span>
        <span className="font-rnormal">
          {activity.action.at(0)?.toUpperCase() + activity.action.slice(1)} -{" "}
        </span>
        <Link
          className="inline-block text-jade-shade-2 transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-normal focus:scale-105 focus:text-jade-normal"
          href={`/app/recipes/${activity.recipe.id}`}
        >
          {activity.recipe.name}
        </Link>
      </p>
    </li>
  );
}

export default ActivitiesItem;
