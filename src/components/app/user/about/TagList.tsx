"use client";

import { useUser } from "@/context/UserContext";
import AboutList from "./AboutList";

function TagList() {
  const { getFilteredList } = useUser();

  const list = getFilteredList("tags");

  return <AboutList theme="almond" list={list} />;
}

export default TagList;
