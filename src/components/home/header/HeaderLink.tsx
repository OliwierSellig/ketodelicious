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
      className={`cursor-pointer text-xl font-medium transition-all duration-150 ease-linear hover:-translate-y-px hover:text-jade-normal focus:-translate-y-px focus:text-jade-normal lg:animate-[fadeLeft_600ms] lg:font-ubuntu lg:text-3xl lg:text-white-normal lg:hover:translate-x-4 lg:hover:text-jade-normal lg:focus:translate-x-4 lg:focus:text-jade-normal sm:text-2xl`}
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
