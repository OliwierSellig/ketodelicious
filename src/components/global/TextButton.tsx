import { ButtonProps } from "@/utils/utilTypes";
import Link from "next/link";

const buttonStyles =
  "underline-ani relative cursor-pointer text-xl flex gap-1 items-center";

function TextButton({ children, handleClick, destination }: ButtonProps) {
  if (destination)
    return (
      <Link href={destination} className={buttonStyles}>
        {children}
      </Link>
    );

  return (
    <button className={buttonStyles} onClick={() => handleClick?.()}>
      {children}
    </button>
  );
}

export default TextButton;
