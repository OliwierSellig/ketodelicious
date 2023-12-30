"use client";

import UserListContainer from "../UserListContainer";
import { useUser } from "@/context/UserContext";

function CreatedList() {
  const { state: user } = useUser();

  return (
    <UserListContainer
      type="created"
      heading="Created Recipes"
      list={user.created}
    />
  );
}

export default CreatedList;
