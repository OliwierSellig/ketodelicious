"use client";

import { useUser } from "@/context/UserContext";
import UserListContainer from "../UserListContainer";

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
