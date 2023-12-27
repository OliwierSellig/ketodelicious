"use client";

import { useUser } from "@/context/UserContext";
import AboutList from "./AboutList";

function IngredientsList() {
  const { getFilteredList } = useUser();

  const list = getFilteredList("ingredients");

  return <AboutList theme="green" list={list} />;
}

export default IngredientsList;
