import { Dispatch, ReactNode, SetStateAction } from "react";
import ActionButton from "./ActionButton";

interface UserListHeader {
  children: ReactNode;
  type: "created" | "bookmarked";
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setIterator: Dispatch<SetStateAction<number>>;
}

function UserListHeader({
  children,
  type,
  query,
  setQuery,
  setIterator,
}: UserListHeader) {
  return (
    <nav className="mb-16 flex w-full flex-wrap items-center gap-x-8 gap-y-4 px-8 sm:px-4 xsm:px-2">
      <h2 className=" font-ubuntu text-4xl font-medium tracking-wide sm:text-3xl">
        {children}
      </h2>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIterator(0);
        }}
        type="text"
        className="flex-grow rounded-2xl bg-white-tint px-12 py-3 text-lg shadow-recipe-input placeholder:text-gray-tint-2 sm:px-6 "
        placeholder="Write recipe name here..."
      />
      <ActionButton type={type} />
    </nav>
  );
}

export default UserListHeader;
