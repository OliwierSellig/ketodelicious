import { ButtonProps } from "@/utils/utilTypes";
import Link from "next/link";

function FilledButton({
  children,
  destination,
  handleClick,
  onClick,
  size = "md",
  additionalClass = "",
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
  } bg-jade-shade-2 rounded-2xl select-none cursor-pointer shadow-sm hover:bg-jade-normal focus:bg-jade-normal transition-normal hover:shadow hover:scale-[1.03] focus:scale-[1.03] flex gap-2 items-center ${additionalClass}`;

  if (destination) {
    return (
      <Link href={destination} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        handleClick?.();
        onClick?.();
      }}
      className={buttonStyles}
    >
      {children}
    </button>
  );
}

export default FilledButton;
