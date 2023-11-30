import Link from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
}

function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <Link
      href={to}
      className="text-xl font-medium hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear hover:-translate-y-px focus:-translate-y-px"
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
