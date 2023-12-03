import { ReactNode } from "react";
import { Link } from "react-scroll";

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
  handleClick: Function;
}

function HeaderLink({ to, children, handleClick }: HeaderLinkProps) {
  return (
    <Link
      to={to}
      onClick={() => handleClick()}
      href="/"
      smooth={true}
      offset={-100}
      duration={500}
      className={`text-xl font-medium hover:text-jade-normal focus:text-jade-normal transition-all duration-150 ease-linear hover:-translate-y-px focus:-translate-y-px cursor-pointer lg:text-3xl lg:text-white-normal lg:font-ubuntu lg:hover:translate-x-4 lg:hover:text-jade-normal lg:focus:text-jade-normal lg:focus:translate-x-4 lg:animate-[fadeLeft_600ms] sm:text-2xl`}
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
