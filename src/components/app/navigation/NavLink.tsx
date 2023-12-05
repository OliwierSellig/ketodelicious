import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:stroke-text-white-normal flex items-center gap-2 rounded-2xl px-10 py-3  text-xl font-medium transition-all duration-150 ease-linear hover:bg-jade-shade-2 hover:text-white-normal focus:bg-jade-shade-2 focus:text-white-normal [&:focus>svg]:stroke-white-normal [&:hover>svg]:stroke-white-normal [&>svg]:transition-all [&>svg]:duration-150 [&>svg]:ease-linear"
    >
      {children}
    </Link>
  );
}

export default NavLink;
