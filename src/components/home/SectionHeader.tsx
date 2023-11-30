import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  subtitle: string;
}

function SectionHeader({ children, subtitle }: SectionHeaderProps) {
  return (
    <h2 className="mb-8">
      <p className="text-jade-normal font-medium text-xl">{subtitle}</p>
      <p className="font-semibold text-4xl  font-ubuntu">{children}</p>
    </h2>
  );
}

export default SectionHeader;
