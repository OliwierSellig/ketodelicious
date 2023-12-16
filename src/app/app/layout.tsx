"use client";

import MainContainer from "@/components/app/createRecipe/MainContainer";
import HorizontalNavigation from "@/components/app/navigation/HorizontalNavigation";
import VerticalNavigation from "@/components/app/navigation/VerticalNavigation";
import { ChildrenProp } from "@/utils/utilTypes";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: { template: "KetoDelicious | %s", default: "KetoDelicious" },
};

export default function RootLayout({ children }: ChildrenProp) {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed left-0 top-0 z-[3000] h-screen w-screen bg-gray-tint-2/60">
        <MainContainer />
      </div>
      <div className="grid h-screen min-h-0 max-w-[100vw] grid-cols-[max-content_1fr] mdl:block">
        <VerticalNavigation
          isOpen={isMobileOpen}
          closeNav={() => setIsMobileOpen(false)}
        />
        <div className="flex  min-h-0 min-w-0 flex-col mdl:h-full mdl:w-screen">
          <HorizontalNavigation openNav={() => setIsMobileOpen(true)} />
          <main className="recipe-scroll  relative grow overflow-x-clip overflow-y-scroll bg-almond-tint-1 p-12 mdl:px-8 mdl:py-12 xsm:px-4 xsm:py-8">
            <div className="flex min-h-full flex-col  items-start justify-center">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
