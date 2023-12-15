import { ChildrenProp } from "@/utils/utilTypes";

function SectionHeading({ children }: ChildrenProp) {
  return <h1 className="mb-8 font-kalam text-6xl xl:text-5xl">{children}</h1>;
}

export default SectionHeading;

function Highlight({ children }: ChildrenProp) {
  return <span className="text-jade-normal">{children}</span>;
}

SectionHeading.Highlight = Highlight;
