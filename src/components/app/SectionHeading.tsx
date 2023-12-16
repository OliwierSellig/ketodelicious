import { ChildrenProp } from "@/utils/utilTypes";

function SectionHeading({ children }: ChildrenProp) {
  return (
    <h1 className="mb-8 animate-[fadeLeft_0.8s] font-kalam text-6xl xl:text-5xl xsm:text-4xl">
      {children}
    </h1>
  );
}

export default SectionHeading;

function Highlight({ children }: ChildrenProp) {
  return <span className="text-jade-shade-1">{children}</span>;
}

SectionHeading.Highlight = Highlight;
