import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  subtitle: string;
}

function SectionHeader({ children, subtitle }: SectionHeaderProps) {
  return (
    <h2 className="mb-8 animate-[fadeLeft_1s]">
      <p className="text-jade-shade-2 text-xl font-medium">{subtitle}</p>
      <p className="font-ubuntu text-4xl  font-semibold">{children}</p>
    </h2>
  );
}

export default SectionHeader;
