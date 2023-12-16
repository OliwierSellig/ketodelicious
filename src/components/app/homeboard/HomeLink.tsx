import FilledButton from "@/components/global/FilledButton";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { ComponentType, ReactNode } from "react";

interface HomeLinkProps {
  Icon: ComponentType;
  children: ReactNode;
  to?: string;
  additionalClass?: string;
}

function HomeLink({
  children,
  Icon,
  to = "",
  additionalClass = "",
}: HomeLinkProps) {
  return (
    <FilledButton
      destination={to}
      size="xl"
      additionalClass={`xl:py-3 xl:px-8 [&>svg]:h-7 [&>svg]:w-7 ${additionalClass}`}
    >
      <Icon />
      <span className="text-2xl xl:text-xl">{children}</span>
    </FilledButton>
  );
}

export default HomeLink;
