"use client";

import { UsersIcon } from "@heroicons/react/24/outline";
import { useUser } from "@/context/UserContext";
import ActivitiesItem from "./ActivitiesItem";

function ActivitiesList() {
  const { state: user } = useUser();

  if (user.activities.length < 1)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="flex items-center gap-4">
          <span className="text-xl  text-gray-tint-1">
            No activities found...
          </span>
          <UsersIcon className="h-8 w-8 stroke-gray-tint-2" />
        </p>
      </div>
    );

  return (
    <div className="recipe-scroll relative flex-grow overflow-y-scroll  border-b-2 border-solid border-gray-tint-3 ">
      <ul className="absolute left-0 top-0  flex h-full w-full flex-col gap-4 px-2 sm:px-0">
        {user.activities.map((item, i) => (
          <ActivitiesItem key={i} activity={item} />
        ))}
      </ul>
    </div>
  );
}

export default ActivitiesList;
