import HorizontalNavigation from "@/components/app/navigation/HorizontalNavigation";
import VerticalNavigation from "@/components/app/navigation/VerticalNavigation";
import { ChildrenProp } from "@/utils/utilTypes";

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <div className="grid min-h-screen grid-cols-[max-content_1fr]">
      <VerticalNavigation />
      <div className="flex flex-col">
        <HorizontalNavigation />
        <div className="items-cetner relative flex w-full grow items-center justify-center overflow-y-scroll bg-almond-tint-1">
          {children}
        </div>
      </div>
    </div>
  );
}
