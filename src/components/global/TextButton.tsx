import { ButtonProps } from "@/utils/utilTypes";
import NextLink from "next/link";
import { Link } from "react-scroll";

const buttonStyles =
  "underline-ani relative cursor-pointer text-xl flex gap-1 items-center";

function TextButton({
  children,
  handleClick,
  destination,
  interPageLink = false,
}: ButtonProps) {
  if (interPageLink && destination)
    return (
      <Link
        href="/"
        smooth={true}
        offset={-100}
        duration={500}
        to={destination}
        className={buttonStyles}
      >
        {children}
      </Link>
    );

  if (destination)
    return (
      <NextLink href={destination} className={buttonStyles}>
        {children}
      </NextLink>
    );

  return (
    <button className={buttonStyles} onClick={() => handleClick?.()}>
      {children}
    </button>
  );
}

export default TextButton;
