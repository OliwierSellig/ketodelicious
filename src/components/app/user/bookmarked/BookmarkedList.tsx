"use client";

import UserListContainer from "../UserListContainer";
import { useUser } from "@/context/UserContext";

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
