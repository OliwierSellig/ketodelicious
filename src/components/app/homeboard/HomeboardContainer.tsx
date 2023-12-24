import { ChildrenProp } from "@/utils/utilTypes";

function HomeboardContainer({ children }: ChildrenProp) {
  return (
    <div className="z-30 flex flex-grow flex-col justify-center gap-14 self-center pb-20 sm:pb-6">
      {children}
    </div>
  );
}

export default HomeboardContainer;
