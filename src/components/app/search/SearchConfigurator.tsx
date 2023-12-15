"use client";

import IngredientsItem from "./IngredientsItem";
import IngredientsList from "./IngredientsList";
import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";
import SearchTextInput from "./SearchTextInput";
import MaxList from "./MaxList";
import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import FilledButton from "@/components/global/FilledButton";

function SearchConfigurator() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState<boolean>(false);

  return (
    <div className="mb-24 grid max-w-[1300px] grid-cols-[2fr_1fr] gap-12 xxxl:flex xxxl:flex-col md:mb-12 md:w-full">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          placeholder="Write recipe name here"
          className="mb-8 w-full rounded-2xl bg-white-tint px-8 py-3 text-xl text-gray-normal shadow-recipe-input xl:text-lg sm:mb-4"
        />
        <FilledButton
          handleClick={() => setIsConfiguratorOpen((prev) => !prev)}
          additionalClass="hidden md:flex self-start mb-4 xsm:text-lg"
        >
          <span>More options</span>
          <ChevronLeftIcon
            className={`h-8 w-8 transition-all duration-200 ease-linear ${
              isConfiguratorOpen ? "-rotate-90 " : ""
            }`}
          />
        </FilledButton>

        <div
          className={`grid grid-cols-2 gap-4 md:transition-all md:duration-200 md:ease-linear sm:flex sm:flex-col sm:gap-8 ${
            !isConfiguratorOpen
              ? "md:hidden sm:hidden"
              : "md:animate-[fadeLeft_1s]"
          } `}
        >
          <div className="flex flex-col gap-4">
            <SearchTextInput id="include">
              <ArchiveBoxArrowDownIcon className="stroke-gray-tint h-7 w-7" />
              <span>Include</span>
            </SearchTextInput>
            <IngredientsList>
              <IngredientsItem>Cinamon</IngredientsItem>
              <IngredientsItem>Kurkimin</IngredientsItem>
              <IngredientsItem>Cocoa</IngredientsItem>
            </IngredientsList>
          </div>
          <div className="flex flex-col gap-4">
            <SearchTextInput id="exclude">
              <ArchiveBoxXMarkIcon className="stroke-gray-tint h-7 w-7" />
              <span>Exclude</span>
            </SearchTextInput>
            <IngredientsList>
              <IngredientsItem>Cinamon</IngredientsItem>
              <IngredientsItem>Kurkimin</IngredientsItem>
              <IngredientsItem>Cocoa</IngredientsItem>
            </IngredientsList>
          </div>
        </div>
      </div>

      <MaxList isOpen={isConfiguratorOpen} />
    </div>
  );
}

export default SearchConfigurator;
