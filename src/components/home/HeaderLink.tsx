import { ReactNode } from "react";
import { Link } from "react-scroll";

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
}

function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <Link
      to={to}
      href="/"
      smooth={true}
      offset={-100}
      duration={500}
      className="text-xl font-medium hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear hover:-translate-y-px focus:-translate-y-px cursor-pointer"
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
