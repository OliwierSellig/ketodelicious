"use client";

import MaxList from "./MaxList";
import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";
import { useSearch } from "@/context/SearchContext";
import IngredientsModifier from "./IngredientsModifier";

function SearchConfigurator() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState<boolean>(false);
  const { state: search, setName } = useSearch();

  return (
    <div className="mb-24 grid max-w-[1300px] grid-cols-[2fr_1fr] gap-12 xxxl:flex xxxl:flex-col md:mb-12 md:w-full">
      <div className="flex flex-col gap-4">
        <input
          value={search.name}
          onChange={(e: BaseSyntheticEvent) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Write recipe name here"
          className="mb-8 w-full animate-[fadeBottom_0.8s] rounded-2xl bg-white-tint px-8 py-3 text-xl text-gray-normal shadow-recipe-input xl:text-lg sm:mb-4"
        />
        <FilledButton
          handleClick={() => setIsConfiguratorOpen((prev) => !prev)}
          additionalClass="animate-[fadeLeft_0.6s] hidden md:flex self-start mb-4 xsm:text-lg"
        >
          <span>More options</span>
          <ChevronLeftIcon
            className={`h-8 w-8 transition-all duration-200 ease-linear ${
              isConfiguratorOpen ? "-rotate-90 " : ""
            }`}
          />
        </FilledButton>
      </div>
      <IngredientsModifier />
      <MaxList isOpen={isConfiguratorOpen} />
    </div>
  );
}

export default SearchConfigurator;
