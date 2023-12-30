"use client";

import { useUser } from "@/context/UserContext";
import UserListContainer from "../UserListContainer";

function BookmarkedList() {
  const { state: user } = useUser();

  return (
    <UserListContainer
      list={user.bookmarked}
      type="bookmarked"
      heading="Bookmarked Recipes"
    />
  );
}

export default BookmarkedList;
