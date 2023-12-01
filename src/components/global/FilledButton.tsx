import { ButtonProps } from "@/utils/utilTypes";
import Link from "next/link";

function FilledButton({
  children,
  destination,
  handleClick,
  size = "md",
}: ButtonProps) {
  const buttonStyles = `block ${
    size === "xl" ? "text-2xl" : "text-xl"
  } tacking-wide text-white-normal ${
    size === "sm"
      ? "py-1 px-4"
      : size === "md"
      ? "py-2 px-6"
      : size === "lg"
      ? "py-3 px-8"
      : "py-4 px-14 sm:px-12 sm:py-3 xsm:px-10"
  } bg-jade-normal rounded-2xl select-none cursor-pointer shadow-sm hover:bg-jade-shade focus:bg-jade-shade transition-normal hover:shadow hover:scale-[1.03] focus:scale-[1.03]`;

  if (destination) {
    return (
      <Link href={destination} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={() => handleClick?.()} className={buttonStyles}>
      {children}
    </button>
  );
}

export default FilledButton;
