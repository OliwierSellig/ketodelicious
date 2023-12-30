import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  children: ReactNode;
  href: string;
  label: string;
}

function NavLink({ children, href, label }: NavLinkProps) {
  return (
    <Link
      aria-label={label}
      href={href}
      className="hover:stroke-text-white-normal flex items-center gap-2 rounded-2xl px-10 py-3 text-xl font-medium transition-all duration-150  ease-linear hover:bg-jade-shade-2 hover:text-white-normal focus:bg-jade-shade-2 focus:text-white-normal xl:rounded-full xl:p-2 [&:focus>svg]:stroke-white-normal [&:hover>svg]:stroke-white-normal xl:[&>span]:hidden [&>svg]:transition-all [&>svg]:duration-150 [&>svg]:ease-linear"
    >
      {children}
    </Link>
  );
}

export default NavLink;
