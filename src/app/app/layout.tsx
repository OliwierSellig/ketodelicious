"use client";

import Slider from "@/components/app/Slider";
import HorizontalNavigation from "@/components/app/navigation/HorizontalNavigation";
import VerticalNavigation from "@/components/app/navigation/VerticalNavigation";
import { ChildrenProp } from "@/utils/utilTypes";
import { useState } from "react";

export default function RootLayout({ children }: ChildrenProp) {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <>
      <div className="grid h-screen min-h-0 max-w-[100vw] grid-cols-[max-content_1fr] mdl:block">
        <VerticalNavigation
          isOpen={isMobileOpen}
          closeNav={() => setIsMobileOpen(false)}
        />
        <div className="flex  min-h-0 min-w-0 flex-col mdl:h-full mdl:w-screen">
          <HorizontalNavigation openNav={() => setIsMobileOpen(true)} />
          <main className="recipe-scroll  relative grow overflow-x-clip overflow-y-scroll bg-almond-tint-1 p-12 mdl:px-8 mdl:py-12 ">
            <div className="flex min-h-full flex-col items-start justify-center">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
