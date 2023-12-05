import { ChildrenProp } from "@/utils/utilTypes";
import HorizontalNavigation from "./HorizontalNavigation";
import VerticalNavigation from "./VerticalNavigation";

function AppNavigation({ children }: ChildrenProp) {
  return (
    <div className="grid min-h-screen grid-cols-[max-content_1fr]">
      <VerticalNavigation />
      <div className="flex flex-col">
        <HorizontalNavigation />
        <div className="bg-almond-tint-1 items-cetner relative flex grow justify-center overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppNavigation;
