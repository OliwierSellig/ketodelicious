import { ChildrenProp } from "@/utils/utilTypes";

function AboutList({ children }: ChildrenProp) {
  return <ul className="flex  flex-wrap items-start gap-2 p-2">{children}</ul>;
}

export default AboutList;
