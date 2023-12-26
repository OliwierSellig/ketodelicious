import {
  PlusCircleIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface ActivityItemProps {
  date: any;
  action: "Created" | "Bookmarked" | "Unbookmarked" | "Deleted";
  item: { name: string; id: string };
}

function ActivitiesItem({ date, action, item }: ActivityItemProps) {
  return (
    <li className="flex items-center gap-2 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-gray-tint-1  ">
      {action === "Created" ? (
        <PlusCircleIcon />
      ) : action === "Bookmarked" ? (
        <BookmarkIcon />
      ) : action === "Unbookmarked" ? (
        <BookmarkSlashIcon />
      ) : (
        <MinusCircleIcon />
      )}
      <p className=" text-lg font-medium text-gray-tint-1 sm:text-base">
        <span>{date}: </span>
        <span className="font-rnormal">{action} - </span>
        <Link
          className="inline-block text-jade-shade-2 transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-normal focus:scale-105 focus:text-jade-normal"
          href={`/app/recipes/${item.id}`}
        >
          {item.name}
        </Link>
      </p>
    </li>
  );
}

export default ActivitiesItem;
