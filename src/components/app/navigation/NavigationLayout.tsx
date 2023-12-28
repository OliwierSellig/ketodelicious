"use client";

import { ReactNode, useState } from "react";
import VerticalNavigation from "./VerticalNavigation";
import HorizontalNavigation from "./HorizontalNavigation";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/context/UserContext";

interface NavigationLayoutProps {
  children: ReactNode;
  padding?: boolean;
}

function NavigationLayout({ children, padding = true }: NavigationLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <div className="grid h-screen min-h-0 max-w-[100vw] grid-cols-[max-content_1fr] mdl:block">
      <VerticalNavigation
        isOpen={isMobileOpen}
        closeNav={() => setIsMobileOpen(false)}
      />
      <div className="flex  min-h-0 min-w-0 flex-col mdl:h-full mdl:w-screen">
        <HorizontalNavigation openNav={() => setIsMobileOpen(true)} />
        <main
          className={`recipe-scroll  relative grow overflow-x-clip overflow-y-scroll bg-almond-tint-1  ${
            padding ? "p-12 mdl:px-8 mdl:py-12 xsm:px-4 xsm:py-8" : ""
          }`}
        >
          <div className="flex min-h-full flex-col  items-start justify-start">
            {children}
          </div>
        </main>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          className: "toast",
          success: {
            duration: 2000,
            iconTheme: { primary: "#00A86B", secondary: "#FAFCFC" },
          },
          error: {
            duration: 5000,
            iconTheme: { primary: "#D23232", secondary: "#FAFCFC" },
          },
          style: {
            maxWidth: "500px",
            widows: "70%",
            padding: "16px 32px",
            backgroundColor: "#FEFEFE",
            color: "#333",
            textAlign: "center",
          },
        }}
      />
    </div>
  );
}

export default NavigationLayout;
