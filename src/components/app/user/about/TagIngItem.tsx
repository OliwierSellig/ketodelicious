import { ReactNode } from "react";

interface TagIngItemProps {
  count: number;
  children: ReactNode;
  theme: "green" | "almond";
}

function TagIngItem({ count, children, theme }: TagIngItemProps) {
  return (
    <li
      className={`relative z-10 flex min-w-[96px] select-none justify-center  rounded-2xl px-8 py-3 text-lg shadow-sm hover:backdrop-blur-sm sm:px-6 sm:text-base  [&:focus>div]:h-full   [&:focus>div]:opacity-100 [&:hover>div]:h-full [&:hover>div]:opacity-100 ${
        theme === "green"
          ? "bg-jade-shade-2 text-white-normal"
          : "bg-almond-shade-1 text-gray-normal"
      }`}
    >
      <span>{children}</span>
      <div className="absolute bottom-0 left-0 z-20 flex h-0 w-full items-center  justify-center rounded-2xl opacity-0 backdrop-blur-sm transition-all duration-200 ease-linear">
        <span className="">{count} times</span>
      </div>
    </li>
  );
}

export default TagIngItem;
