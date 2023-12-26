import Link from "next/link";
import { ReactComponentElement, ReactElement, ReactNode } from "react";

interface UserNavLinkProps {
  to: string;
  children: ReactNode;
  icon: ReactElement<SVGAElement>;
}

function UserNavLink({ to, children, icon }: UserNavLinkProps) {
  return (
    <Link
      aria-label={String(children) || ""}
      className="w-56 animate-[scaleOpacity_1s] select-none rounded-2xl bg-white-normal px-4 py-3 text-center shadow-md  transition-all duration-150 ease-linear hover:-translate-y-1 hover:shadow-lg focus:-translate-y-1 focus:shadow-lg xxl:w-48 xl:w-40 xl:py-2  md:w-auto md:rounded-full md:px-2 md:py-2 [&>svg]:hidden [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-gray-tint-1 md:[&>svg]:block"
      href={to}
    >
      <span className="text-xl font-medium xl:text-lg md:hidden">
        {children}
      </span>

      {icon}
    </Link>
  );
}

export default UserNavLink;
