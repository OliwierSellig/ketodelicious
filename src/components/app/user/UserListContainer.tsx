"use client";

import { RecipeItemProp, UserRecipe } from "@/utils/utilTypes";
import UserListHeader from "./UserListHeader";
import UserList from "./UserList";
import { useState } from "react";

interface UserListContainer {
  type: "created" | "bookmarked";
  list: RecipeItemProp[] | UserRecipe[];
  heading: string;
}

function UserListContainer({ type, list, heading }: UserListContainer) {
  const [iterator, setIterator] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-center">
      <UserListHeader
        query={query}
        setQuery={setQuery}
        setIterator={setIterator}
        type={type}
      >
        {heading}
      </UserListHeader>
      <UserList
        type={type}
        list={list}
        iterator={iterator}
        setIterator={setIterator}
        query={query}
      />
    </div>
  );
}

export default UserListContainer;
