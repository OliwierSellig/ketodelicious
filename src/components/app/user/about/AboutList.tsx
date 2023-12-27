import { FolderMinusIcon } from "@heroicons/react/24/outline";
import TagIngItem from "./TagIngItem";

interface AboutListProps {
  list: (string | number)[][];
  theme: "green" | "almond";
}

const MAX_AMOUNT = 8;

function AboutList({ list, theme }: AboutListProps) {
  if (list?.length < 1)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="flex items-center gap-4">
          <span className="text-lg text-gray-tint-1">No items yet...</span>
          <FolderMinusIcon className="h-7 w-7 stroke-gray-tint-2" />
        </p>
      </div>
    );
  return (
    <ul className="flex  flex-wrap items-start gap-2 p-2">
      {list.slice(0, MAX_AMOUNT).map((item) => (
        <TagIngItem key={item[0]} count={Number(item[1])} theme={theme}>
          {item[0]}
        </TagIngItem>
      ))}
    </ul>
  );
}

export default AboutList;
