import Slider from "@/components/app/Slider";
import HorizontalNavigation from "@/components/app/navigation/HorizontalNavigation";
import VerticalNavigation from "@/components/app/navigation/VerticalNavigation";
import { ChildrenProp } from "@/utils/utilTypes";

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <>
      <div className="grid h-screen min-h-0 max-w-[100vw] grid-cols-[max-content_1fr]">
        <VerticalNavigation />
        <div className="flex  min-h-0 min-w-0 flex-col">
          <HorizontalNavigation />
          <main className="relative  grow overflow-x-clip overflow-y-scroll bg-almond-tint-1 p-12 ">
            <div className="flex min-h-full flex-col items-center justify-center">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
