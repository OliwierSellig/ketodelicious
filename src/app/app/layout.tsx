import Slider from "@/components/app/Slider";
import HorizontalNavigation from "@/components/app/navigation/HorizontalNavigation";
import VerticalNavigation from "@/components/app/navigation/VerticalNavigation";
import { ChildrenProp } from "@/utils/utilTypes";

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <>
      <div className="grid min-h-screen max-w-[100vw] grid-cols-[max-content_1fr]">
        <VerticalNavigation />
        <div className="flex min-w-0 flex-col">
          <HorizontalNavigation />
          <div className="items-cetner relative flex  w-full grow items-center justify-center overflow-x-clip overflow-y-scroll bg-almond-tint-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
